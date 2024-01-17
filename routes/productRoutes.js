const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");

// Browse all products
router.get("/", ProductController.getProductListings);

// Filter products based on query parameters
router.get("/filter", ProductController.filterProductListings);

// Update product details by ID
router.put("/:id/details", ProductController.updateProductDetails);

// Upload pictures for a product by ID
router.put("/:id/pictures", ProductController.uploadProductPictures);

module.exports = router;
