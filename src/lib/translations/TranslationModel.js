const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Translation = new Schema({
  label: { type: String, required: true },
  page: { type: String, required: true },
  translatedTexts: { type: Array, default: [] }
});

module.exports = mongoose.model("Translation", Translation);
