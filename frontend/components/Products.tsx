// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   images?: string[];
// };

// export default function Products() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("✅ PRODUCT COMPONENT MOUNTED");

//     const API_URL = process.env.NEXT_PUBLIC_API_URL;
//     console.log("API URL:", API_URL);

//     if (!API_URL) {
//       console.error("❌ API URL missing");
//       return;
//     }

//     async function fetchProducts() {
//       try {
//         console.log("📡 FETCHING PRODUCTS...");

//         const res = await fetch(`${API_URL}/api/products`, {
//           cache: "no-store",
//         });

//         const data = await res.json();
//         console.log("✅ PRODUCT DATA:", data);

//         setProducts(data.data || []);
//       } catch (error) {
//         console.error("❌ Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <section className="py-12 px-4 md:px-6 bg-gray-50">

//       <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
//         Featured 3D Products
//       </h2>

//       {loading && (
//         <p className="text-center text-gray-500">
//           Loading products...
//         </p>
//       )}

//       {!loading && products.length === 0 && (
//         <p className="text-center text-gray-500">
//           No products found
//         </p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//         {products.map((p) => (
//           <div
//             key={p._id}
//             className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group"
//           >

//             <div className="relative w-full h-72 overflow-hidden">

//               {p.images && p.images.length > 0 ? (
//                 <>
//                   <Image
//                     src={
//                       p.images[0]
//                         ? p.images[0]
//                         : "/placeholder.png"
//                     }
//                     alt={p.name}
//                     fill
//                     className="object-cover transition duration-300 group-hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, 25vw"
//                   />

//                   {p.images[1] && (
//                     <Image
//                       src={p.images[1]}
//                       alt={p.name}
//                       fill
//                       className="object-cover opacity-0 group-hover:opacity-100 transition duration-300"
//                     />
//                   )}
//                 </>
//               ) : (
//                 <div className="flex items-center justify-center h-full text-gray-400">
//                   No Image
//                 </div>
//               )}

//             </div>

//             <div className="p-4">

//               <h3 className="font-semibold text-lg truncate">
//                 {p.name}
//               </h3>

//               <p className="text-gray-600 mt-1">
//                 ₹{p.price}
//               </p>

//               <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
//                 Add to Cart
//               </button>

//             </div>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  price: number;
  images?: string[];
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    async function fetchProducts() {
      try {
        if (!API_URL) {
          console.error("NEXT_PUBLIC_API_URL is not configured");
          setProducts([]);
          return;
        }

        const res = await fetch(`${API_URL}/api/products`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        const productData = data?.data || data?.products || data || [];
        setProducts(Array.isArray(productData) ? productData : []);
      } catch (error) {
        console.error("Failed to load products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-12 px-4 md:px-6 bg-gray-50">

      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Featured 3D Products
      </h2>

      {loading && (
        <p className="text-center text-gray-500">
          Loading products...
        </p>
      )}

      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500">
          No products found
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group"
          >

            <div className="relative w-full h-72 overflow-hidden">

              {p.images && p.images.length > 0 ? (
                <>
                  <Image
                    src={p.images[0] || "/placeholder.png"}
                    alt={p.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />

                  {p.images[1] && (
                    <Image
                      src={p.images[1]}
                      alt={p.name}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                    />
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-lg truncate">
                {p.name}
              </h3>

              <p className="text-gray-600 mt-1">
                ₹{p.price}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}