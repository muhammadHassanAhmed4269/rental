const Customer = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isNotFound } = require("entity-checker");

const CustomerController = {
  updateProfile: async (req, res) => {
    const { username, email, phoneNumber, location } = req.body;
    const customerId = req.customer._id;

    try {
      const customer = await Customer.findById(customerId);

      if (isNotFound(customer)) {
        return res.status(404).json({ message: "Customer not found" });
      }

      customer.username = username || customer.username;
      customer.email = email || customer.email;
      customer.phoneNumber = phoneNumber || customer.phoneNumber;
      customer.location = location || customer.location;

      await customer.save();
      res.json({ message: "Profile updated successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },

  uploadProfilePicture: async (req, res) => {
    try {
      const customer = await customer.findById(req.customer._id); // Assuming authenticated Customer ID is attached to the request

      if (isNotFound(customer)) {
        return res.status(404).json({ message: "Customer not found" });
      }

      customer.profilePicture = req.file.path;
      await customer.save();

      res.json({ message: "Profile picture uploaded successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },

  deleteProfile: async (req, res) => {
    const customerId = req.customer._id;

    try {
      const customer = await Customer.findByIdAndDeconste(customerId);

      if (isNotFound(customer)) {
        return res.status(404).json({ message: "Customer not found" });
      }

      res.json({ message: "Profile deconsted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = CustomerController;
