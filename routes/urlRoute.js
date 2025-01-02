import express from "express";
import { createShortUrl, getShortUrl } from "../controllers/urlController.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Request received");
  res.status(200).send("Hello World");
});

router.post("/", createShortUrl);

router.get("/:surl", getShortUrl);

export default router;
