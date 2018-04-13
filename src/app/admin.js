const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const translationService = require("../lib/translations");

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "..", "views", "admin"));

app.get("/", (req, res) => {
  res.render("admin");
});

app.get("/translate/home", async (req, res) => {
  const translations = await translationService.getTranslationsForPage("home");
  res.render("home", { translations });
});

app.get("/translate/faq", async (req, res) => {
  const translations = await translationService.getTranslationsForPage("faq");
  res.render("faq", { translations });
});

app.get("/translate/label", async (req, res) => {
  const { page, label } = req.query;
  const translations = await translationService.getTranslationsForLabel(
    page,
    label
  );
  res.render("label", { translations });
});

app.post("/save", (req, res) => {
  res.render("admin");
});

module.exports = app;
