// import Image from "next/image";
// import {
//   FiTruck,
//   FiPenTool,
//   FiAward,
// } from "react-icons/fi";

// export default function AboutPage() {
//   return (
//     <main className="py-14 px-4 md:px-6">

//       {/* HERO */}
//       <section className="text-center max-w-3xl mx-auto mb-14">

//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           About ThePrintEngineer
//         </h1>

//         <p className="text-gray-600 text-sm md:text-lg">
//           We create high-quality custom printing solutions that help brands,
//           creators, and businesses bring their ideas to life.
//         </p>

//       </section>

//       {/* STORY SECTION WITH IMAGE */}
//       <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">

//         <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
//           <Image
//             src="/about/1.jpg"
//             alt="About ThePrintEngineer"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Our Story</h2>

//           <p className="text-gray-600 leading-relaxed">
//             ThePrintEngineer started with a simple idea — make custom printing
//             easy, affordable, and high quality for everyone. From t-shirts to mugs,
//             we help turn creative ideas into real products.
//           </p>

//           <p className="text-gray-600 leading-relaxed mt-4">
//             Today, we serve customers across India with fast delivery, premium
//             materials, and modern design tools.
//           </p>
//         </div>

//       </section>

//       {/* MISSION SECTION */}
//       <section className="bg-gray-50 py-12 px-6 rounded-2xl max-w-6xl mx-auto mb-16 text-center">

//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           Our Mission
//         </h2>

//         <p className="text-gray-600 max-w-2xl mx-auto">
//           To empower individuals and businesses with world-class custom printing
//           solutions that are fast, reliable, and affordable.
//         </p>

//       </section>

//       {/* FEATURES (WITH REAL ICONS) */}
//       <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

//         {/* FAST DELIVERY */}
//         <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
//           <div className="flex justify-center text-3xl mb-3 text-black">
//             <FiTruck />
//           </div>
//           <h3 className="font-semibold text-lg mb-2">
//             Fast Delivery
//           </h3>
//           <p className="text-gray-600 text-sm">
//             Quick turnaround time across India.
//           </p>
//         </div>

//         {/* CUSTOM DESIGN */}
//         <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
//           <div className="flex justify-center text-3xl mb-3 text-black">
//             <FiPenTool />
//           </div>
//           <h3 className="font-semibold text-lg mb-2">
//             Custom Designs
//           </h3>
//           <p className="text-gray-600 text-sm">
//             Create your own unique designs easily.
//           </p>
//         </div>

//         {/* PREMIUM QUALITY */}
//         <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
//           <div className="flex justify-center text-3xl mb-3 text-black">
//             <FiAward />
//           </div>
//           <h3 className="font-semibold text-lg mb-2">
//             Premium Quality
//           </h3>
//           <p className="text-gray-600 text-sm">
//             High-quality materials and printing.
//           </p>
//         </div>

//       </section>

//     </main>
//   );
// }

"use client";

import Image from "next/image";
import {
  FiBox,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="py-14 px-4 md:px-6">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-14">

        <p className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3">
          3D Printing Studio
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About ThePrintEngineer
        </h1>

        <p className="text-gray-600 text-sm md:text-lg">
          We transform ideas into real-world 3D creations — from toys and anime
          figures to custom gadgets and prototypes.
        </p>

      </section>

      {/* STORY SECTION */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">

        {/* IMAGE */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <Image
            src="/about/1.jpg"
            alt="3D printing process"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            ThePrintEngineer started with a vision — to make 3D printing
            accessible, creative, and powerful for everyone. Whether It&apos;s a great product, a detailed anime figure, or a functional prototype, we bring
            ideas to life layer by layer.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Today, we serve creators, businesses, and hobbyists across India
            with precision 3D printing, modern tools, and fast delivery.
          </p>
        </div>

      </section>

      {/* MISSION */}
      <section className="bg-gray-50 py-12 px-6 rounded-2xl max-w-6xl mx-auto mb-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          To empower creativity by delivering high-quality, affordable, and
          customizable 3D printing solutions — turning imagination into reality.
        </p>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        {/* FEATURE 1 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition group hover:-translate-y-2">
          <div className="flex justify-center mb-4">
            <div className="text-3xl bg-black text-white p-4 rounded-full group-hover:scale-110 transition">
              <FiBox />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Custom 3D Models
          </h3>
          <p className="text-gray-600 text-sm">
            Create unique toys, figures, and designs tailored to your needs.
          </p>
        </div>

        {/* FEATURE 2 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition group hover:-translate-y-2">
          <div className="flex justify-center mb-4">
            <div className="text-3xl bg-black text-white p-4 rounded-full group-hover:scale-110 transition">
              <FiCpu />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Advanced Technology
          </h3>
          <p className="text-gray-600 text-sm">
            High-precision 3D printers for detailed and durable creations.
          </p>
        </div>

        {/* FEATURE 3 */}
        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition group hover:-translate-y-2">
          <div className="flex justify-center mb-4">
            <div className="text-3xl bg-black text-white p-4 rounded-full group-hover:scale-110 transition">
              <FiLayers />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Layered Perfection
          </h3>
          <p className="text-gray-600 text-sm">
            Smooth finishing and strong layered builds for premium quality.
          </p>
        </div>

      </section>

    </main>
  );
}