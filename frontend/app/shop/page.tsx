"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch, FiFilter } from "react-icons/fi";

type Product = {
  _id: string;
  name: string;
  price: number;
  images?: string[];
  image?: string;
  category?: {
    _id: string;
    name: string;
  };
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          console.error("NEXT_PUBLIC_API_URL is not configured");
          setProducts([]);
          return;
        }

        const res = await fetch(`${apiUrl}/api/products`, { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setProducts(Array.isArray(data?.data) ? data.data : []);
      } catch (err) {
        console.error("Failed to load products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category?.name).filter(Boolean)),
  ];

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || p.category?.name === category;

    return matchSearch && matchCategory;
  });

  return (
    <main className="py-8 px-3 sm:px-4 md:px-6">

      {/* HEADER */}
      <div className="text-center mb-6 md:mb-8">
        <p className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-2">
          3D Products
        </p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Explore 3D Creations
        </h1>

        <p className="text-gray-500 text-sm sm:text-base">
          Toys, models, gadgets & custom prints
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">

        {/* SEARCH */}
        <div className="flex items-center border rounded-lg px-3 py-2 w-full">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* FILTER */}
        <div className="flex items-center border rounded-lg px-3 py-2 w-full sm:w-auto">
          <FiFilter className="text-gray-400 mr-2" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none bg-transparent text-sm w-full"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat === "all" ? "All" : cat}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* LOADING */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-56 sm:h-64 md:h-72 bg-gray-200 animate-pulse rounded-xl"
            />
          ))}
        </div>
      )}

      {/* EMPTY */}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 text-sm">
          No products found 😕
        </p>
      )}

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

        {filteredProducts.map((p) => {
          const img1 = p.images?.[0] || p.image || "";
          const img2 = p.images?.[1] || "";

          return (
            <div
              key={p._id}
              className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg md:hover:shadow-xl transition overflow-hidden group"
            >

              {/* IMAGE (RESPONSIVE HEIGHT 🔥) */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">

                {img1 ? (
                  <>
                    <Image
                      src={img1}
                      alt={p.name}
                      fill
                      className="object-cover object-center transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {img2 && (
                      <Image
                        src={img2}
                        alt={p.name}
                        fill
                        className="object-cover object-center opacity-0 group-hover:opacity-100 transition duration-300"
                      />
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                    No Image
                  </div>
                )}

              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-4">

                <h3 className="font-semibold text-sm md:text-base truncate">
                  {p.name}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  ₹{p.price}
                </p>

                {p.category?.name && (
                  <p className="text-xs text-gray-400 mt-1">
                    {p.category.name}
                  </p>
                )}

                <div className="mt-3 md:mt-4 flex flex-col gap-2">

                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-xs md:text-sm">
                    View Details
                  </button>

                  <button className="w-full border py-2 rounded-lg hover:bg-gray-100 transition text-xs md:text-sm">
                    Customize
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </main>
  );
}