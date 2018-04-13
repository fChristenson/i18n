const TranslationModel = require("./TranslationModel");
const TranslationService = require("./TranslationService");

const translationService = new TranslationService(TranslationModel);

module.exports = translationService;
