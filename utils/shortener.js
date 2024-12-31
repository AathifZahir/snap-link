const base62 = require("base62/lib/ascii");

function generateShortUrl(orgUrl, uid) {
  const baseUrl = "http://localhost:3000/";
  const shortUrl = base62.encode(parseInt(uid, 16));
  const sUrl = `${baseUrl}${shortUrl}`;
  return sUrl;
}

module.exports = generateShortUrl;
