const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "..", "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

module.exports = app;
