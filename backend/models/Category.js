const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String, // 🔥 Cloudinary URL (later)
      default: "",
    },
    icon: {
      type: String, // 🔥 optional (toy, gadget, etc.)
      default: "default",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Category || mongoose.model("Category", categorySchema);