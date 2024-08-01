const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Category.sync({force: true}); //depois excluir só roda 1° vez que precisar criar as tabelas e relacionamento

module.exports = Category;