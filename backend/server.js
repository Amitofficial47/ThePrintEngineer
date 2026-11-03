require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

connectDB();

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (!origin || allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

app.use((req, res, next) => {
  console.log(`📡 Incoming: ${req.method} ${req.url}`);
  next();
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/test", (req, res) => {
  res.send("API working 🚀");
});

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  if (err && err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "Origin not allowed",
    });
  }

  console.error("🔥 SERVER ERROR:", err && err.message ? err.message : err);

  res.status(err && err.status ? err.status : 500).json({
    success: false,
    message: err && err.message ? err.message : "Internal Server Error",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});