const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const ACCESS_TOKEN_SECRET = "mysecret";

router.route("/register").post((req, res, next) =>
  Promise.resolve()
    .then(() => bcrypt.hash(req.body.password, 10))
    .then((hashedPass) => User.create({ ...req.body, password: hashedPass }))
    .then((user) => res.json(user))
    .catch((err) => next(err))
);

router.route("/login").post((req, res, next) =>
  Promise.resolve()
    .then(() => User.findOne({ email: req.body.email }))
    .then((user) =>
      user
        ? bcrypt
            .compare(req.body.password, user.password)
            .then((isValidated) =>
              isValidated
                ? jwt.sign(
                    JSON.stringify({ ...user, password: "null" }),
                    ACCESS_TOKEN_SECRET
                  )
                : next(createError(401))
            )
        : next(createError(404))
    )
    .then((accessToken) => res.json({ accessToken }))
    .catch((err) => next(err))
);

module.exports = router;
