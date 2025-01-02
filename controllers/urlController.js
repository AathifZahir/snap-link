import UrlModel from "../models/urlModel.js";
import generateShortUrl from "../utils/shortener.js";
import { customAlphabet } from "nanoid";

// Create short URL
const createShortUrl = async (req, res) => {
  try {
    console.log("importing nanoid");

    const orgUrl = req.body?.orgUrl;

    // Check if original URL is provided
    if (!orgUrl) {
      return res.status(400).send("Original URL is required.");
    }
    console.log(orgUrl);

    // Check if URL already exists
    const link = await UrlModel.findOne({ orgUrl });
    if (link) {
      console.log(`Redirecting to ${link.sUrl}`);
      console.log(link);
      return res.redirect(link.sUrl);
    }

    // Generate short URL
    const generateKey = customAlphabet("1234567890", 6); // Generate 6-character key
    const key = generateKey();
    console.log(key);
    const { sUrl, sUrlKey } = generateShortUrl(key);
    console.log(sUrl);
    console.log("Short URL generated");

    // Save short URL to database
    const url = new UrlModel({ key, orgUrl, sUrl, sUrlKey });
    console.log(url);
    await url.save();

    console.log(`Short URL created: ${sUrl}`);
    res.redirect(sUrl);
  } catch (err) {
    console.error("Error creating short URL:", err);
    res.status(500).send("An error occurred while creating the short URL.");
  }
};

// Get original URL and redirect
const getShortUrl = async (req, res) => {
  try {
    const sUrlKey = req.params.surl;
    console.log(sUrlKey);

    // Find short URL in database
    const link = await UrlModel.findOne({ sUrlKey });
    console.log(link);

    if (!link) {
      return res.status(404).send("Short URL not found.");
    }

    // Redirect to original URL
    console.log(`Redirecting to ${link.orgUrl}`);
    res.redirect(link.orgUrl);
  } catch (err) {
    console.error("Error redirecting to original URL:", err);
    res
      .status(500)
      .send("An error occurred while redirecting to the original URL.");
  }
};

export { createShortUrl, getShortUrl };
