const router = require("express").Router();
const createError = require("http-errors");

const sequelize = require("../models/db");
const Store = require("../models/store");

router
  .route("/")
  .get((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findAll())
      .then((stores) => res.json(stores))
      .catch((err) => next(err))
  )
  .post((req, res, next) =>
    Promise.resolve()
      .then(() => Store.create(req.body))
      .then((store) => res.json(store))
      .catch((err) => next(err))
  );

router.route("/search").get((req, res, next) =>
  Promise.resolve()
    .then(() =>
      Store.findAll({
        where: {
          name: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("name")),
            "LIKE",
            "%" + req.query.name + "%"
          ),
        },
      })
    )
    .then((stores) => res.json(stores))
    .catch((err) => next(err))
);

router
  .route("/:id")
  .get((req, res, next) =>
    Promise.resolve()
      .then(() => Store.findByPk(req.params.id))
      .then((store) => (store ? res.json(store) : next(createError(404))))
      .catch((err) => next(err))
  )
  .delete((req, res, next) =>
    Promise.resolve()
      .then(() => Store.destroy({ where: { id: req.params.id } }))
      .then(() => res.json({ message: "Store deleted" }))
      .catch((err) => next(err))
  );

module.exports = router;
