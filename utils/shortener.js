import base62 from "base62";

// generates short url from id and returns short url and key
function generateShortUrl(uid) {
  const baseUrl = "http://localhost:3000/shorten/";
  const sUrlKey = base62.encode(parseInt(uid, 16)); // Convert id to base62
  console.log(`Short URL: ${sUrlKey}`);
  const sUrl = `${baseUrl}${sUrlKey}`;
  console.log(`Generated short URL: ${sUrl}`);
  return { sUrl, sUrlKey };
}

export default generateShortUrl;
