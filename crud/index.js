const express = require("express");
const app = express();


app.set('view engine','ejs'); //Engine que renderiza o HTML

app.get("/", (req, res)=>{ // Rota Principal
    res.send("Bem vindo!");
});
app.listen(88, () => { // porta q o servidor web rodas
    console.log("O servidor está rodando");
});