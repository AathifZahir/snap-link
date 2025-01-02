import express from "express";
import urlRouter from "./routes/urlRoute.js";
import mongo from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

//Mongo Connection
mongo
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Request received");
  res.status(200).send("Hello World");
});

//shortener route
app.use("/shorten", urlRouter);

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));
