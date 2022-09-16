const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const User = sequelize.define("User", {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("User table sync!");
  })
  .catch((err) => {
    console.log("Unable to create table : ", err);
  });

module.exports = User;
