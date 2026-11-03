const Category = require("../models/Category");

// ✅ CREATE CATEGORY
const createCategory = async (req, res) => {
  try {
    const { name, icon } = req.body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const image = req.file?.path || "";

    const category = await Category.create({
      name: name.trim(),
      icon: typeof icon === "string" && icon.trim() ? icon.trim() : "default",
      image: typeof image === "string" ? image.trim() : "",
    });

    res.status(201).json({
      success: true,
      data: category,
    });

  } catch (error) {
    console.error("CREATE CATEGORY ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ GET ALL CATEGORIES
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });

  } catch (error) {
    console.error("GET CATEGORY ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCategory,
  getCategories,
};