import express from "express";
import { createShortUrl, getShortUrl } from "../controllers/urlController.js";

const router = express.Router();

//shortener route to test if server is running
router.get("/", (req, res) => {
  console.log("Request received");
  res.status(200).send("Hello World");
});

//shortener route to create short URL
router.post("/", createShortUrl);

//shortener route to redirect to original URL
router.get("/:surl", getShortUrl);

export default router;
