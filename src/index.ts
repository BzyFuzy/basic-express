import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { SampleDoc } from "./models/sample";

require("dotenv").config();

const app = express();
app.use(json());
const port = 8080;

mongoose.connect(
  "mongodb://localhost:27017/sample",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");
  }
);
app.get("/", async (req, res) => {
  SampleDoc.find().exec((err, result) => {
    res.send(result);
  });
});

app.post("/sample/create", async (req, res) => {
  const newDoc = new SampleDoc(req.body);
  await newDoc.save();
  res.json({ status: "done" });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
