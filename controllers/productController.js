const Product = require("../models/Product");

const ProductController = {
  browseProducts: async (req, res) => {
    try {
      const products = await Product.find(); // Retrieve all products
      res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  filterProducts: async (req, res) => {
    const {
      location,
      verificationStatus,
      daysAvailable,
      datePosted,
      priceRange,
    } = req.query;
    try {
      // Use received query parameters to filter products from the database
      // Example:
      const filteredProducts = await Product.find({
        location,
        verificationStatus,
        daysAvailable,
        datePosted,
        price: { $gte: priceRange.min, $lte: priceRange.max },
      });
      res.json(filteredProducts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  updateProductDetails: async (req, res) => {
    const productId = req.params.id;
    const { details } = req.body;
    try {
      // Find the product by ID and update its details
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { details },
        { new: true }
      );
      res.json(updatedProduct);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  uploadProductPictures: async (req, res) => {
    const productId = req.params.id;
    const { pictures } = req.body;
    try {
      // Find the product by ID and update its pictures array
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      if (product.pictures.length + pictures.length > 5) {
        return res
          .status(400)
          .json({ message: "Cannot upload more than 5 pictures" });
      }

      product.pictures.push(...pictures);
      await product.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = ProductController;
