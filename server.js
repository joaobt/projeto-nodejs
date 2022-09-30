const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolvedor aplicação/serviços de forma facil",
    },
    {
        title: 'E',
        message: 'JS usa Javascript para renderizar HTML',
    },
    {
        title: 'M',
        message: 'uito fácil de usar',
    },
    {
        title: 'A',
        message: 'egal',
    },
    {
        title: 'I',
        message: 'nstall ejs',
    },
    {
        title: 'S',
        message: 'intaxe simples',
    },

  ];
  res.render("pages/index", {
    qualitys: items,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.get("/jogo", function (req, res) {
  res.render("pages/jogo");
});

app.listen(8080);
console.log("rodadando");
