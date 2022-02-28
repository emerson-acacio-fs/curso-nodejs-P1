const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//Dizendo para o express usar o ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  const { titulo, descricao } = req.body;

  res.send(`${titulo} ${descricao}`);
});

app.listen("8080", () => {
  console.log("App ok!");
});
