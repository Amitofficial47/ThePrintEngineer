// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { FiBox, FiCpu, FiStar, FiHome } from "react-icons/fi";
// import { FiSun } from "react-icons/fi";


// type Category = {
//   _id: string;
//   name: string;
//   icon?: string;
//   image?: string;
// };

// // ICON MAP
// const iconMap: Record<string, React.ReactNode> = {
//   toy: <FiStar />,
//   figure: <FiBox />,
//   gadget: <FiCpu />,
//   decor: <FiHome />,
//   festival: <FiSun />,
//   default: <FiBox />,
// };

// export default function Categories() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
//         //fetch("http://localhost:8080/api/categories");
//         const result = await res.json();

//         // ✅ FIX: extract correct array from API response
//         setCategories(result.data || []);
//       } catch (err) {
//         console.log("Error fetching categories:", err);
//         setCategories([]);
//       }
//     }

//     fetchCategories();
//   }, []);

//   return (
//     <section className="py-16 px-4 md:px-6 bg-gray-50">

//       {/* TITLE */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold">
//           Explore 3D Creations
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Unique designs crafted with precision 3D printing
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

//         {Array.isArray(categories) &&
//           categories.map((cat) => (
//             <div
//               key={cat._id}
//               className="relative h-40 md:h-52 rounded-xl overflow-hidden group cursor-pointer"
//             >

//               {/* IMAGE */}
//               <Image
//                 src={cat.image || "/categories/default.png"}
//                 alt={cat.name}
//                 fill
//                 className="object-cover group-hover:scale-110 transition duration-500"
//                 sizes="(max-width:768px) 100vw, 25vw"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

//               {/* CONTENT */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

//                 <div className="text-2xl mb-2">
//                   {iconMap[cat.icon || "default"]}
//                 </div>

//                 <p className="font-semibold text-sm md:text-base">
//                   {cat.name}
//                 </p>

//               </div>

//             </div>
//           ))}

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiBox, FiCpu, FiStar, FiHome, FiSun } from "react-icons/fi";

type Category = {
  _id: string;
  name: string;
  icon?: string;
  image?: string;
};

// ICON MAP
const iconMap: Record<string, React.ReactNode> = {
  toy: <FiStar />,
  figure: <FiBox />,
  gadget: <FiCpu />,
  decor: <FiHome />,
  festival: <FiSun />,
  default: <FiBox />,
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
      console.error("NEXT_PUBLIC_API_URL is not configured");
      setCategories([]);
      return;
    }

    async function fetchCategories() {
      try {
        const res = await fetch(`${API_URL}/api/categories`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const result = await res.json();
        setCategories(Array.isArray(result?.data) ? result.data : []);
      } catch (err) {
        console.error("Failed to load categories:", err);
        setCategories([]);
      }
    }

    fetchCategories();
  }, []);

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Explore 3D Creations
        </h2>
        <p className="text-gray-500 mt-2">
          Unique designs crafted with precision 3D printing
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {categories.map((cat) => (
          <div
            key={cat._id}
            className="relative h-40 md:h-52 rounded-xl overflow-hidden group cursor-pointer"
          >

            {/* IMAGE */}
            <Image
              src={
                cat.image && cat.image.trim() !== ""
                  ? cat.image
                  : "/categories/default.png"
              }
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
              sizes="(max-width:768px) 100vw, 25vw"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-2xl mb-2">
                {iconMap[cat.icon || "default"]}
              </div>

              <p className="font-semibold text-sm md:text-base">
                {cat.name}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}