const express = require("express");
const cors = require("cors");
const productRouter = require("./Routes/productRoutes");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./.config.env" });

app.use(cors());
mongoose
  .connect(process.env.DB_URL)
  .then(() => { 
    console.log("DB connection successful");
  }).catch((err) => {
    console.log("Error:", err.message);
  })
console.log(process.env.NODE_ENV);

app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

app.use("/api/v1/products", productRouter);
app.listen(process.env.PORT_NO, () => {
  console.log(`Server is running on port ${process.env.PORT_NO}`);
});