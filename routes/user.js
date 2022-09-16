const router = require("express").Router();

const User = require("../models/user");

router
  .route("/")
  .get((req, res, next) =>
    Promise.resolve()
      .then(() => User.findAll())
      .then((users) => res.json(users))
      .catch((err) => next(err))
  )
  .post((req, res, next) =>
    Promise.resolve()
      .then(() => User.create(req.body))
      .then((user) => res.json(user))
      .catch((err) => next(err))
  );

router.route("/myuser").get((req, res, next) =>
  Promise.resolve()
    .then(() => res.json(req.user))
    .catch((err) => next(err))
);

router.route("/:id").get((req, res, next) =>
  Promise.resolve()
    .then(() => User.findByPk(req.params.id))
    .then((user) => res.json(user))
    .catch((err) => next(err))
);

module.exports = router;
