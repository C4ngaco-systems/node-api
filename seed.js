const User = require("./models/user");
bcrypt = require("bcrypt");

const router = require("express").Router();

router.route("/").get((req, res, next) => {
  return Promise.resolve()
    .then(() => bcrypt.hash("123456", 10))
    .then((hashedPass) =>
      User.create({
        firstName: "Pedro",
        email: "pedro@dev.com",
        password: hashedPass,
      })
    )
    .then((user) => {
      if (user) {
        res.json(user);
        console.log(user);
      }
    })
    .catch((err) => next(err));
});

module.exports = router;