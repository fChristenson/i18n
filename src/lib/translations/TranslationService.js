class TranslationService {
  constructor(TranslationModel) {
    this.translationModel = TranslationModel;
    this.getTranslation = this.getTranslation.bind(this);
    this.createTranslation = this.createTranslation.bind(this);
    this.updateTranslation = this.updateTranslation.bind(this);
    this.getTranslationsForLabel = this.getTranslationsForLabel.bind(this);
    this.getTranslationsForPage = this.getTranslationsForPage.bind(this);
  }

  async getTranslation(label, language) {
    return Promise.resolve("foo");
  }

  async createTranslation(page, label, text, language) {
    return Promise.resolve({});
  }

  async updateTranslation(page, label, text, language) {
    return Promise.resolve({});
  }

  async getTranslationsForLabel(page, label) {
    return Promise.resolve(["foo", "bar"]);
  }

  async getTranslationsForPage(page, language) {
    return Promise.resolve(["foo", "bar"]);
  }
}

module.exports = TranslationService;
