const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // para formularios
const connection = require("./database/database");

//importar as rotas em outros arquivos
const categoriesController = require("./categories/CategoriesContoller");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

//Engine que renderiza o HTML
app.set('view engine','ejs'); 

//static para css
app.use(express.static('public'));

//body-parser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

//conectar ao banco de dados
connection
    .authenticate()
    .then( () => {
        console.log("Conectado no banco");
    }).catch((error) => {
        console.log(error);
    })


//dizendo pra aplicação que quero usar as rotas do arquivo na pasta categories antes importar const la em cima
app.use("/",categoriesController); 
app.use("/",articlesController); 

app.get("/", (req, res)=>{ // Rota Principal
    //res.send("Bem vindo!");
    res.render("index");
});
app.listen(88, () => { // porta q o servidor web rodas
    console.log("O servidor está rodando");
});