const express = require("express");
const yaml = require("js-yaml");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();

const config = yaml.load(fs.readFileSync("config.yml", "utf-8"));
// const hostname = config["Server"]["Host"];
const port = config["Server"]["Port"];
const dbHost = config["MongoDB"]["Host"];
const dbPort = config["MongoDB"]["Port"];
const dbName = config["MongoDB"]["Database"];


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// mongoose
//   .connect("mongodb+srv://root:rootpass13579@clusterpizza.dal4jmk.mongodb.net/")
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.log(err));

mongoose
  .connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

const { User } = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    console.log(err);
    return err
      ? res.json({ success: false, err })
      : res.status(200).json({ success: true, userInfo: userInfo });
  });
});
