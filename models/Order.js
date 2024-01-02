const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  deliveryAddress: {
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentDetails: {
    cardNumber: { type: String, required: true, match: /^\d{16}$/ }, // Basic card number validation (16 digits)
    cardholderName: { type: String, required: true },
    expiryDate: {
      type: String,
      required: true,
      match: /^(0[1-9]|1[0-2])\/\d{2}$/,
    }, // MM/YY format
    cvv: { type: String, required: true, match: /^\d{3,4}$/ }, // CVV of 3 or 4 digits
  },
  createdAt: { type: Date, default: Date.now }, // Recording order creation date
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
