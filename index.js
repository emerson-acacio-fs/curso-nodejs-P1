const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/:nome/:leng", (req, res) => {
  res.render("index", {
    ...req.params,
    empresa: "dddd",
    msg: false,
  });
});

app.listen("8080", () => {
  console.log("App ok!");
});
