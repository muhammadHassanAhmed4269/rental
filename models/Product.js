const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: String },
  currency: { type: String, required: true },
  pricePerDay: { type: String, required: true },
  images: [{ type: String }],
  zipCode: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
