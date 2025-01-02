import base62 from "base62";

function generateShortUrl(orgUrl, uid) {
  const baseUrl = "http://localhost:3000/shorten/";
  const sUrlKey = base62.encode(parseInt(uid, 16));
  console.log(`Short URL: ${sUrlKey}`);
  const sUrl = `${baseUrl}${sUrlKey}`;
  console.log(`Generated short URL: ${sUrl}`);
  return { sUrl, sUrlKey };
}

export default generateShortUrl;
