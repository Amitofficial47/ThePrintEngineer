// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import {
//   FiSearch,
//   FiShoppingCart,
//   FiUser,
//   FiMenu,
//   FiX,
//   FiHome,
//   FiShoppingBag,
//   FiInfo,
//   FiPhone,
// } from "react-icons/fi";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/", icon: <FiHome /> },
//     { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
//     { name: "About", path: "/about", icon: <FiInfo /> },
//     { name: "Contact", path: "/contact", icon: <FiPhone /> },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={38}
//               height={38}
//               className="rounded-md"
//             />
//             <h1 className="text-lg font-bold">
//               ThePrintEngineer
//             </h1>
//           </div>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
//             <Link href="/" className={pathname === "/" ? "text-black font-semibold" : ""}>Home</Link>
//             <Link href="/shop" className={pathname === "/shop" ? "text-black font-semibold" : ""}>Shop</Link>
//             <Link href="/about" className={pathname === "/about" ? "text-black font-semibold" : ""}>About</Link>
//             <Link href="/contact" className={pathname === "/contact" ? "text-black font-semibold" : ""}>Contact</Link>
//           </nav>

//           {/* Icons (DESKTOP ONLY) */}
//           <div className="hidden md:flex items-center gap-4 text-xl text-gray-700">
//             <FiSearch />
//             <FiShoppingCart />
//             <FiUser />
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
//             <FiMenu />
//           </button>
//         </div>
//       </header>

//       {/* OVERLAY */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-50"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* SIDE DRAWER */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >

//         {/* Header */}
//         <div className="flex items-center justify-between p-5 border-b">
//           <h2 className="font-bold text-lg">Menu</h2>
//           <button onClick={() => setOpen(false)}>
//             <FiX className="text-xl" />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="p-5 flex flex-col gap-5 text-gray-700">

//           {links.map((link) => (
//             <Link
//               key={link.path}
//               href={link.path}
//               onClick={() => setOpen(false)}
//               className={`flex items-center gap-3 text-lg ${
//                 pathname === link.path ? "text-black font-semibold" : ""
//               }`}
//             >
//               {link.icon}
//               {link.name}
//             </Link>
//           ))}

//         </div>
//       </div>
//     </>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiHome,
  FiShoppingBag,
  FiInfo,
  FiPhone,
} from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
    { name: "About", path: "/about", icon: <FiInfo /> },
    { name: "Contact", path: "/contact", icon: <FiPhone /> },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={38}
              height={38}
              className="rounded-md"
            />
            <h1 className="text-lg font-bold">
              ThePrintEngineer
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-black font-semibold"
                    : "hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5 text-xl text-gray-700">

            {/* SEARCH */}
            <Link href="/search" className="hover:text-black transition">
              <FiSearch />
            </Link>

            {/* CART */}
            <Link href="/cart" className="hover:text-black transition">
              <FiShoppingCart />
            </Link>

            {/* LOGIN */}
            <Link href="/login" className="hover:text-black transition">
              <FiUser />
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-5 flex flex-col gap-5 text-gray-700">

          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 text-lg transition ${
                pathname === link.path
                  ? "text-black font-semibold"
                  : "hover:text-black"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

        </div>

        {/* Bottom Icons (Mobile) */}
        <div className="border-t p-5 flex justify-around text-xl text-gray-700">

          <Link href="/search" onClick={() => setOpen(false)}>
            <FiSearch />
          </Link>

          <Link href="/cart" onClick={() => setOpen(false)}>
            <FiShoppingCart />
          </Link>

          <Link href="/login" onClick={() => setOpen(false)}>
            <FiUser />
          </Link>

        </div>

      </div>
    </>
  );
}