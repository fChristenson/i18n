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
  const translations = await translationService.getTranslations(page, label);
  res.render("label", { translations });
});

app.get("/translate/label/remove", async (req, res) => {
  const { page, label } = req.query;
  await translationService.removeLabel(page, label);
  res.redirect(`/translate/${page}`);
});

app.post("/save", async (req, res) => {
  const { page, label, text, language } = req.body;

  if (await translationService.translationsExist(page, label)) {
    await translationService.updateTranslations(page, label, text, language);
  } else {
    await translationService.createTranslations(page, label, text, language);
  }

  res.render("admin");
});

module.exports = app;
