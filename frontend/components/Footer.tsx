"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="flex flex-col gap-3">

          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="ThePrintEngineer Logo"
              width={40}
              height={40}
              className="rounded-md"
            />

            <h2 className="text-xl font-bold">
              ThePrintEngineer
            </h2>

          </div>

          <p className="text-gray-400 text-sm">
            High-quality custom printing solutions for your brand and business.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-white transition">
                <FaHome className="text-sm" />
                Home
              </Link>
            </li>

            <li>
              <Link href="/shop" className="flex items-center gap-2 hover:text-white transition">
                <FaShoppingBag className="text-sm" />
                Shop
              </Link>
            </li>

            <li>
              <Link href="/about" className="flex items-center gap-2 hover:text-white transition">
                <FaInfoCircle className="text-sm" />
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="flex items-center gap-2 hover:text-white transition">
                <FaPhone className="text-sm" />
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-400 text-sm">
            Email: theprintengineer@gmail.com
          </p>

          <p className="text-gray-400 text-sm">
            Phone: +91 80919 27360
          </p>

        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-5 text-2xl">

            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>

            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} ThePrintEngineer. All rights reserved.
      </div>

    </footer>
  );
}