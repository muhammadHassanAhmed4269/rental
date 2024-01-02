const { isNotFound } = require("entity-checker");
const Product = require("../models/Product"); // Your Product model

const ProductController = {
  getProductListings: async (req, res) => {
    try {
      const products = await Product.find().populate("owner", "username");
      res.json(products);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },

  filterProductListings: async (req, res) => {
    try {
      const {
        location,
        verificationStatus,
        availableDays,
        datePosted,
        priceRange,
      } = req.query;

      const filters = {};

      if (location) {
        filters.location = {
          $geoWithin: {
            $centerSphere: [JSON.parse(location), 1500 / 6371],
          },
        };
      }

      if (datePosted) {
        filters.datePosted = {
          $gte: new Date(datePosted), // Convert datePosted to Date object
        };
      }

      let price = JSON.parse(priceRange);
      if (price && Array.isArray(price) && price.length === 2) {
        filters.price = {
          $gte: JSON.parse(price[0]),
          $lte: JSON.parse(price[1]),
        };
      }

      if (verificationStatus) {
        filters.verificationStatus = verificationStatus;
      }

      if (availableDays) {
        filters.availableDays = { $gte: parseInt(availableDays) };
      }

      console.log(JSON.stringify(filters));

      const filteredProducts = await Product.find(filters);
      res.json(filteredProducts);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },

  updateProductDetails: async (req, res) => {
    try {
      const { _id } = req.params;
      const {
        /* Update fields */
      } = req.body;

      const product = await Product.findById(_id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Update product details

      await product.save();
      res.json({ message: "Product details updated successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },

  uploadProductPictures: async (req, res) => {
    try {
      const { _id } = req.params;
      const product = await Product.findById(_id);

      if (isNotFound(product)) {
        return res.status(404).json({ message: "Product not found" });
      }

      const files = req.files;
      const imagePaths = files.slice(0, 4).map((file) => file.path);

      product.images = imagePaths;

      await product.save();
      res.json({ message: "Pictures uploaded successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = ProductController;
