const express = require('express');
const app = express();

app.set("view engine", "ejs");

//ta criando uma rota
app.get("/", function(req, res){
    res.render("pages/index");
})
app.get("/sobre", function(req, res){
    res.render("pages/about");
})

//listen é uma funcao do express que fica ouvindo uma porta
app.listen(8080);
console.log("running")