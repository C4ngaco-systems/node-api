const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Store = sequelize.define('Store', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
    }
});

module.exports = Store;