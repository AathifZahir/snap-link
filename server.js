const express = require("express");
const app = express();
const PORT = 3000;
const urlRouter = require("./routes/urlRoute");
const mongo = require("mongoose");
require("dotenv").config();

//Mongo Connection
mongo
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  console.log("Request received");
  res.status(200).send("Hello World");
});

app.use("/shorten", urlRouter);

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`));
