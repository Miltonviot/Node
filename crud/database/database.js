const Sequelize = require("sequelize");

const connection = new Sequelize('crud','root','br@sfeed2021',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;