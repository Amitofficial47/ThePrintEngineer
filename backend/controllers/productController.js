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

    const parsedPrice = Number(price);
    if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be a valid number greater than zero",
      });
    }

    const parsedStock = Number(stock ?? 0);
    if (!Number.isFinite(parsedStock) || parsedStock < 0) {
      return res.status(400).json({
        success: false,
        message: "Stock must be a valid non-negative number",
      });
    }

    const images = (req.files || []).map((file) => file.path);

    const product = await Product.create({
      name: String(name).trim(),
      price: parsedPrice,
      description: description ? String(description).trim() : "",
      category,
      customizable: customizable === true || customizable === "true",
      stock: parsedStock,
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