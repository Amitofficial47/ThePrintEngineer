const express = require("express");
const router = express.Router();

const upload = require("../config/upload");

const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

// ✅ CREATE PRODUCT (MULTIPLE IMAGES - FINAL)
router.post("/", upload.array("images", 5), createProduct);

// ✅ GET ALL PRODUCTS
router.get("/", getProducts);

module.exports = router;