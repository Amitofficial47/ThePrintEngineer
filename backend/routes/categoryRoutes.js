const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const { protect, adminOnly } = require("../middleware/auth");

const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");

router.post("/", protect, adminOnly, upload.single("image"), createCategory);
router.get("/", getCategories);

module.exports = router;