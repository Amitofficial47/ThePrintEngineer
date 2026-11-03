# Backend API

This folder contains the Express + MongoDB backend for ThePrintEngineer.

## Stack
- Node.js
- Express
- MongoDB + Mongoose
- Cloudinary for image uploads
- JWT for authentication
- bcryptjs for password hashing

## Features
- Product listing and creation
- Category listing and creation
- Image upload handling for Cloudinary
- User registration and login
- JWT verification middleware
- Admin-only access protection for product/category write routes

## Project structure
```text
backend/
├── config/
│   ├── cloudinary.js
│   ├── db.js
│   └── upload.js
├── controllers/
│   ├── authController.js
│   ├── categoryController.js
│   └── productController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Category.js
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── categoryRoutes.js
│   └── productRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── server.js
└── node_modules (generated locally)
```

## Prerequisites
- Node.js 18+
- MongoDB instance or MongoDB Atlas
- Cloudinary account

## Installation
```bash
cd backend
npm install
cp .env.example .env
```

## Environment variables
Create a `.env` file in `backend/`:

```env
MONGO_URI="mongodb://username:password@host:27017/database?authSource=admin"
PORT=8080
CLOUD_NAME="your_cloud_name"
CLOUD_API_KEY="your_cloud_api_key"
CLOUD_API_SECRET="your_cloud_api_secret"
CLIENT_URL="http://localhost:3000"
JWT_SECRET="your_super_secret_jwt_key"
```

## Run locally
```bash
npm run dev
```

The server runs on:
- http://localhost:8080

## Health check
```bash
curl http://localhost:8080/health
```

## API routes
### Auth
- `POST /api/auth/register`
  - Body: `{ name, email, password }`
- `POST /api/auth/login`
  - Body: `{ email, password }`

### Products
- `GET /api/products`
- `POST /api/products`
  - Requires JWT token and admin role
  - Accepts multipart form data with `images`

### Categories
- `GET /api/categories`
- `POST /api/categories`
  - Requires JWT token and admin role
  - Accepts multipart form data with `image`

## Security features
- `.env` is ignored by git
- CORS restricted to configured origins
- file upload size and type validation
- password hashing with bcryptjs
- JWT token verification via middleware

## Notes
- `POST /api/products` and `POST /api/categories` are admin-protected.
- Use a real admin user to create categories/products from the UI or API.
- For production, use a strong JWT secret and secure deployment environment variables.
