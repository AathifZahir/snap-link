const mongoose = require("mongoose");

const urlModelSchema = new mongoose.Schema(
  {
    key: { type: String },
  },
  {
    orgUrl: { type: String },
  },
  {
    sUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const UrlModel = mongoose.model("urlModel", urlModelSchema);

module.exports = UrlModel;
