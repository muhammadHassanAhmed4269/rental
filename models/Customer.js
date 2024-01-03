const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema({
  username: { type: String },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v); // Basic email validation
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  phoneNumber: {
    type: String,
  },
  password: { type: String, required: true },
  googleId: { type: String },
  facebookId: { type: String },
  profilePicture: { type: String },
  location: {
    type: {
      type: String,
      enum: ["Point"], // Restrict to 'Point' for geographic coordinates
      default: "Point",
    },
    coordinates: {
      type: [Number], // Array of numbers for [longitude, latitude]
      index: "2dsphere", // Create a geospatial index for location
    },
  },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: true },
});

// Hash password before saving
// customerSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     try {
//       const hashedPassword = await bcrypt.hash(this.password, 10);
//       this.password = hashedPassword;
//     } catch (error) {
//       return next(error);
//     }
//   }
//   return next();
// });

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
