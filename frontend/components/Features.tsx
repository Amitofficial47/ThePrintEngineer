"use client";

import {
  FiBox,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Features() {
  const features: Feature[] = [
    {
      title: "Custom 3D Creations",
      description:
        "Turn your ideas into real 3D models — from toys to unique personalized designs.",
      icon: <FiBox />,
    },
    {
      title: "Advanced 3D Printing",
      description:
        "High-precision printing with modern technology for detailed and durable results.",
      icon: <FiCpu />,
    },
    {
      title: "Layered Perfection",
      description:
        "Smooth finishing and strong layered builds for professional-quality 3D products.",
      icon: <FiLayers />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Why Choose Our 3D Printing
        </h2>
        <p className="text-gray-500 mt-2">
          Innovation meets creativity with precision 3D printing
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center hover:-translate-y-2 group"
          >

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="text-3xl p-4 rounded-full bg-black text-white group-hover:scale-110 transition">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}