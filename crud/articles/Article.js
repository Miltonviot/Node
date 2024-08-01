const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = require("../categories/Category");// preciso importar o model, para poder realizar o relacionamento entre as tabelas no Sequelize

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false

    }
});

Category.hasMany(Article); // tem muitos relacionamento 1 para N a categoria tem muitos artigos
Article.belongsTo(Category); // artigo pertence a categoria isso cria o relacionamento entre as tabelas belongTo = relacionamento 1 para 1 artigo só tem 1 categoria

//Article.sync({force: true}); //depois excluir só roda 1° vez que precisar criar as tabelas e relacionamento

module.exports = Article;