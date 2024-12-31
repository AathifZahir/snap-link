const UrlModel = require("../models/urlModel");
const generateShortUrl = require("../utils/shortener");
const { v4: uuidv4 } = require("uuid");

const createShortUrl = async (req, res) => {
  try {
    // Validate and sanitize input (add proper validation here if needed)
    const orgUrl = req.body;

    // Check if URL already exists in the database
    const link = await UrlModel.findOne({ orgUrl });
    if (link) {
      console.log(`Redirecting to ${link.sUrl}`);
      console.log(link);
      return res.redirect(link.sUrl);
    }

    // Generate new short URL
    const key = uuidv4();
    console.log(key);
    const sUrl = generateShortUrl(orgUrl, key);
    console.log(sUrl);
    console.log("Short URL generated");

    // Save the new URL mapping to the database
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

module.exports = { createShortUrl };
