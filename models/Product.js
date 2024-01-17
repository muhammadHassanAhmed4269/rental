const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, maxlength: 1000 },
  price: { type: Number, min: 0 },
  currency: { type: String, required: true },
  pricePerDay: { type: Number, required: true, min: 0 },
  images: [{ type: String, match: /^https?:\/\// }],
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      index: "2dsphere", // Define as a 2dsphere index for geospatial queries
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  verificationStatus: {
    type: Boolean,
    required: true,
    default: true,
  },
  isAvailable: { type: Boolean, default: true },
  category: {
    type: String,
    enum: ["Electronics", "Clothing", "Books", "Other"],
  },
  dimensions: {
    length: { type: Number },
    width: { type: Number },
    height: { type: Number },
  },
  manufacturer: {
    name: { type: String },
    address: { type: String },
  },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
      comment: { type: String },
      rating: { type: Number, min: 1, max: 5 },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  availableDays: { type: Number },
  datePosted: { type: String },
  priceRange: { type: String },
});

// Create a 2dsphere index on the 'location' field
productSchema.index({ location: "2dsphere" });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
