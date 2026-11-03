# ThePrintEngineer

ThePrintEngineer is a full-stack e-commerce and custom printing storefront built as a monorepo with a Next.js frontend and an Express + MongoDB backend.

## Stack
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT + bcryptjs
- Uploads: Multer + Cloudinary

## Project structure
```text
ThePrintEngineer/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── server.js
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── .gitignore
├── README.md
└── package.json (not present; each app is managed separately)
```

## Features
- Homepage with product and category presentation
- Responsive product catalog and shop page
- Category and product APIs with admin protection
- User registration and login
- JWT verification middleware
- Cloudinary-based image uploads
- Protected admin-only write endpoints

## Prerequisites
- Node.js 18+
- MongoDB Atlas or local MongoDB instance
- Cloudinary account
- GitHub repo configured for the monorepo

## Setup
### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
```
Update the `.env` file with your MongoDB, Cloudinary, and JWT values.

Run:
```bash
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
```
Update `.env.local` with:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

Run:
```bash
npm run dev
```

## Environment variables
### Backend `.env`
```env
MONGO_URI="mongodb://username:password@host:27017/database?authSource=admin"
PORT=8080
CLOUD_NAME="your_cloud_name"
CLOUD_API_KEY="your_cloud_api_key"
CLOUD_API_SECRET="your_cloud_api_secret"
CLIENT_URL="http://localhost:3000"
JWT_SECRET="your_super_secret_jwt_key"
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## How it works
- The frontend sends API requests to the backend on port 8080.
- The backend uses MongoDB to store users, categories, and products.
- Cloudinary stores uploaded images.
- Auth is handled with JWT tokens saved in browser local storage.
- Admin-only routes require a valid token and `role: "admin"`.

## API routes
### Public
- `GET /health`
- `GET /api/products`
- `GET /api/categories`
- `POST /api/auth/register`
- `POST /api/auth/login`

### Protected (admin only)
- `POST /api/products`
- `POST /api/categories`

## Example login/register payloads
### Register
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "secret123"
}
```

### Login
```json
{
  "email": "admin@example.com",
  "password": "secret123"
}
```

## Security notes
- `.env` files are ignored by git.
- CORS is restricted to allowed local origins.
- Passwords are hashed with bcryptjs.
- JWT tokens are validated via middleware.
- Upload limits and file filtering are enforced.

## Development notes
- The frontend is designed to run locally on port 3000.
- The backend runs locally on port 8080.
- For production, set strong secrets and deploy with environment-specific config.

## Next improvements
- Add product detail pages
- Add admin dashboard
- Add search and filter enhancements
- Add pagination and sorting
- Add automated tests and CI checks
