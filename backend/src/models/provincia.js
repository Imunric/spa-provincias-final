const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Provincia = sequelize.define('Provincia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    comunidad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false
    },
    habitantes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    superficie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen_mapa: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    imagen_escudo: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'provincia',
    timestamps: false
});

module.exports = Provincia;