const Schema = require("mongoose").Schema;

const Translation = new Schema({
  text: { type: String, default: "Missing" },
  label: { type: String, required: true, index: { unique: true } },
  page: { type: String, required: true },
  language: { type: String, enum: ["sv", "en", "es"], required: true }
});

module.exports = Translation;
