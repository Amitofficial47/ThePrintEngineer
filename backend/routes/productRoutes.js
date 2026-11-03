const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const { protect, adminOnly } = require("../middleware/auth");

const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

router.post("/", protect, adminOnly, upload.array("images", 5), createProduct);
router.get("/", getProducts);

module.exports = router;