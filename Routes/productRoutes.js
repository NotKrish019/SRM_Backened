const express = require("express");
const productController = require("./../Controllers/productController");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);
productRouter
  .route("/:id")
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deletProduct);

module.exports = productRouter;