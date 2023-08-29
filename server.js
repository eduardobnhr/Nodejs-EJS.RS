const express = require('express');
const app = express();

app.set("view engine", "ejs");

//ta criando uma rota
app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma facil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito facil codar em Node"
        },
        {
            title: "A",
            message: " inicialização do node é mais rapida que a do Java"
        },
        {
            title: "I",
            message: "nstanciar um objeto é diferente de java"
        },
        {
            title: "S",
            message: "uper importante aprender node antes do react"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de pagina HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})
app.get("/sobre", function(req, res){
    res.render("pages/about");
})

//listen é uma funcao do express que fica ouvindo uma porta
app.listen(8080);
console.log("running")