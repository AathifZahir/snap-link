const express = require("express");
const router = express.Router();
const { createShortUrl } = require("../controllers/urlController");

router.get("/", (req, res) => {
  console.log("Request received");
  res.status(200).send("Hello World");
});

router.post("/", createShortUrl);

router.post("/:surl");

module.exports = router;
