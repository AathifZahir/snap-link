import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  key: { type: String, required: true },
  orgUrl: { type: String, required: true },
  sUrl: { type: String, required: true },
  sUrlKey: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const UrlModel = mongoose.model("Url", urlSchema);

export default UrlModel;
