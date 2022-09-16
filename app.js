const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = "mysecret";

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const { User, Security, Store } = require("./routes");
const UserModel = require("./models/user");

// Auth middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return next(createError(401));
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403));
    UserModel.findOne(user)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => next(err));
  });
};

// Routes
app.use("/api/users", authMiddleware, User);
app.use("/api/security", Security);
app.use("/api/stores", authMiddleware, Store);
app.use("/api/dev", require("./seed"));
// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler middleware
app.use((err, req, res, next) => {
  // mongoose validator?
  if (err.name && err.name === "ValidationError") {
    res.status(406).json(err);
  } else if (
    (err.status && err.status === 404) ||
    (err.name && err.name === "CastError")
  ) {
    res.status(404).json({
      url: req.originalUrl,
      error: {
        message: "Not found",
      },
    });
  } else if (err.code === 11000) {
    res.status(500).json({
      url: req.originalUrl,
      error: {
        message: "Duplicate key not allowed",
      },
    });
  } else {
    console.log(err);
    // error page
    res.status(err.status || 500).json({
      url: req.originalUrl,
      error: err,
    });
  }
});

module.exports = app;
