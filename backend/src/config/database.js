const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('provinciasdb', 'root', '', {
host: 'localhost',
port: 3307, // Indicamos el puerto de forma específica
dialect: 'mysql',
logging: false});

module.exports = sequelize;