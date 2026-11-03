# Frontend App

This folder contains the Next.js frontend for ThePrintEngineer.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Fetch-based API integration

## Features
- Home page with hero, features, categories, and testimonials
- Product listing page
- Category display section
- Login page
- Signup page
- Navigation and responsive layout
- API integration with the backend server

## Project structure
```text
frontend/
├── app/
│   ├── about/
│   ├── cart/
│   ├── contact/
│   ├── login/
│   ├── shop/
│   ├── signup/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Categories.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Products.tsx
│   └── Testimonials.tsx
├── public/
├── types/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── node_modules (generated locally)
```

## Prerequisites
- Node.js 18+
- Running backend on localhost:8080

## Installation
```bash
cd frontend
npm install
cp .env.example .env.local
```

## Environment variables
Create a `.env.local` file in `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Run locally
```bash
npm run dev
```

The app runs at:
- http://localhost:3000

## API usage
The frontend uses the backend at `NEXT_PUBLIC_API_URL` for:
- product listing
- category listing
- login
- signup

## Notes
- The login/signup flows are connected to the backend auth API.
- Protected admin actions require a valid JWT token from the server.
- For production, use environment-specific API URLs and secure deployment settings.
