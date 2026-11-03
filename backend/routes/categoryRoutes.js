const express = require("express");
const router = express.Router();

const upload = require("../config/upload"); // ✅ import upload

const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");

// ✅ CREATE with image
router.post("/", upload.single("image"), createCategory);

// GET
router.get("/", getCategories);

module.exports = router;