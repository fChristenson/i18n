const express = require("express");
const path = require("path");
const languages = require("../config/languages");
const app = express();
const translationService = require("../lib/translations");

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "..", "views"));

app.get("/", async (req, res) => {
  const selectedLanguage = req.query.lang || languages[0];
  const translations = await translationService.getLabelsForPage(
    "home",
    selectedLanguage
  );
  res.render("index", { languages, selectedLanguage, translations });
});

app.get("/faq", async (req, res) => {
  const selectedLanguage = req.query.lang || languages[0];
  const translations = await translationService.getLabelsForPage(
    "faq",
    selectedLanguage
  );
  res.render("faq", { languages, selectedLanguage, translations });
});

module.exports = app;
