const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });
const app = express();
//Dizendo para o express usar o ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  Pergunta.findAll({
    raw: true,
    order: [["id", "DESC"]], //ASC=decrescente
  }).then((perguntas) => {
    res.render("index", { perguntas });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  const { titulo, descricao } = req.body;
  Pergunta.create({ titulo, descricao }).then(() => res.redirect("/"));
});

app.listen("8080", () => {
  console.log("App ok!");
});
