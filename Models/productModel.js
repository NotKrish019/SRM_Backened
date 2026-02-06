const mongoose = require("mongoose");

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant Name is Required"],
      unique: [true, "Name already declared"],
    },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    category: { type: String },
    rating: { type: Number },
    inStock: {
      type: Boolean,
      default: true,
      enum: {
        values: [true, false],
        message: "Only true and false values are allowed",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model("products", productModel);

module.exports = Products;