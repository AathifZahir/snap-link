const UrlModel = require("../models/urlModel");
const generateShortUrl = require("../utils/shortener");

const createShortUrl = async (req, res) => {
  try {
    const { nanoid, customAlphabet } = await import("nanoid");
    console.log("importing nanoid");

    const orgUrl = req.body?.orgUrl;
    if (!orgUrl) {
      return res.status(400).send("Original URL is required.");
    }
    console.log(orgUrl);

    const link = await UrlModel.findOne({ orgUrl });
    if (link) {
      console.log(`Redirecting to ${link.sUrl}`);
      console.log(link);
      return res.redirect(link.sUrl);
    }

    const generateKey = customAlphabet("1234567890", 6);
    const key = generateKey();
    console.log(key);
    const sUrl = generateShortUrl(orgUrl, key);
    console.log(sUrl);
    console.log("Short URL generated");

    const url = new UrlModel({ key, orgUrl, sUrl });

    console.log(url);
    await url.save();

    console.log(`Short URL created: ${sUrl}`);
    res.redirect(sUrl);
  } catch (err) {
    console.error("Error creating short URL:", err);
    res.status(500).send("An error occurred while creating the short URL.");
  }
};

const getShortUrl = async (req, res) => {
  try {
    const sUrl = req.params.surl;
    console.log(sUrl);

    const link = await UrlModel.findOne({ sUrl: sUrl });

    if (!link) {
      return res.status(404).send("Short URL not found.");
    }

    console.log(`Redirecting to ${link.orgUrl}`);
    res.redirect(link.orgUrl);
  } catch (err) {
    console.error("Error redirecting to original URL:", err);
    res
      .status(500)
      .send("An error occurred while redirecting to the original URL.");
  }
};

module.exports = { createShortUrl };
