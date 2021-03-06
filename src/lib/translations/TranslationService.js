const TranslatedText = require("./TranslatedTextModel");
const supportedLanguages = require("../../config/languages");

class TranslationService {
  constructor(TranslationModel) {
    this.TranslationModel = TranslationModel;
    this.getTranslations = this.getTranslations.bind(this);
    this.createTranslations = this.createTranslations.bind(this);
    this.updateTranslations = this.updateTranslations.bind(this);
    this.getTranslationsForPage = this.getTranslationsForPage.bind(this);
    this.removeLabel = this.removeLabel.bind(this);
    this.translationsExist = this.translationsExist.bind(this);
    this.getMissingTranslations = this.getMissingTranslations.bind(this);
    this.getLabelsForPage = this.getLabelsForPage.bind(this);
    this._createPlaceholderTexts = this._createPlaceholderTexts.bind(this);
  }

  async getMissingTranslations() {
    const allTranslations = await this.TranslationModel.find({});
    return allTranslations.filter(translations => {
      return translations.translatedTexts.some(translatedText => {
        return translatedText.text === "MISSING";
      });
    });
  }

  removeLabel(page, label) {
    return this.TranslationModel.remove({ page, label });
  }

  getTranslations(page, label) {
    return this.TranslationModel.findOne({ page, label });
  }

  createTranslations(page, label, text, language) {
    const placeholders = this._createPlaceholderTexts(language);
    const translatedTexts = [TranslatedText(text, language)].concat(
      placeholders
    );
    const translations = new this.TranslationModel({
      page,
      label,
      translatedTexts
    });
    return translations.save();
  }

  _createPlaceholderTexts(language) {
    return supportedLanguages
      .filter(supportedLanguage => supportedLanguage !== language)
      .map(supportedLanguage => {
        return TranslatedText("MISSING", supportedLanguage);
      });
  }

  async translationsExist(page, label) {
    const translation = await this.TranslationModel.findOne({ page, label });
    return translation !== null;
  }

  async updateTranslations(page, label, text, language) {
    const translation = await this.TranslationModel.findOne({ page, label });
    const updatedTexts = translation.translatedTexts
      .filter(text => text.language !== language)
      .concat([TranslatedText(text, language)]);

    translation.translatedTexts = updatedTexts;
    return translation.save();
  }

  getTranslationsForPage(page) {
    return this.TranslationModel.find({ page });
  }

  async getLabelsForPage(page, language = "sv") {
    const translations = await this.TranslationModel.find({ page });
    const labels = translations.reduce((acc, translations) => {
      const maybeText = translations.translatedTexts.find(
        translatedText => translatedText.language === language
      );
      acc[translations.label] = maybeText.text;
      return acc;
    }, {});

    return labels;
  }
}

module.exports = TranslationService;
