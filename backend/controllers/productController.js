const Product = require("../models/Product");

// ✅ CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      customizable,
      stock,
    } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, price and category are required",
      });
    }

    if (Number(price) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be greater than zero",
      });
    }

    // ✅ MULTIPLE IMAGES (Cloudinary URLs)
    const images = (req.files || []).map((file) => file.path);

    // ✅ CREATE PRODUCT
    const product = await Product.create({
      name,
      price,
      description,
      category,
      customizable: customizable === "true", // convert string → boolean
      stock: Number(stock) || 0, // convert string → number
      images,
    });

    // ✅ RESPONSE
    res.status(201).json({
      success: true,
      message: "Product created",
      data: product,
    });

  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name") // cleaner
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });

  } catch (error) {
    console.error("GET PRODUCT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
};