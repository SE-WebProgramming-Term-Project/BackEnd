const express = require("express");
const yaml = require("js-yaml");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const config = yaml.load(fs.readFileSync("config.yml", "utf-8"));
// const hostname = config["Server"]["Host"];
const port = config["Server"]["Port"];
const dbHost = config["MongoDB"]["Host"];
const dbPort = config["MongoDB"]["Port"];
const dbName = config["MongoDB"]["Database"];

const userRouter = require("./routers/user");
const reviewRouter = require("./routers/review");
const orderRouter = require("./routers/order");
const pizzaRouter = require("./routers/pizza");

mongoose
  .connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);
app.use("/pizza", pizzaRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at ${port} port.`);
});