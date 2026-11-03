// export default function Testimonials() {
//   return (
//     <section style={{ padding: "60px 20px", background: "#f3f4f6", textAlign: "center" }}>
//       <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "30px" }}>
//         What Customers Say
//       </h2>

//       <div style={{
//         maxWidth: "600px",
//         margin: "0 auto",
//         background: "white",
//         padding: "30px",
//         borderRadius: "12px",
//         boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
//       }}>
//         <p style={{ fontSize: "16px", color: "#444" }}>
//           “Amazing quality prints and fast delivery. Highly recommended!”
//         </p>

//         <p style={{ marginTop: "15px", fontWeight: "bold" }}>
//           — Happy Customer
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  message: string;
  rating: number;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Amit Sharma",
      message: "Amazing quality prints and super fast delivery. Loved it!",
      rating: 5,
    },
    {
      name: "Neha Verma",
      message: "Great designs and very good customer support experience.",
      rating: 5,
    },
    {
      name: "Rahul Singh",
      message: "Perfect for custom t-shirts. Highly recommended!",
      rating: 4,
    },
  ];

  return (
    <section className="py-14 px-4 md:px-6 bg-gray-100">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        What Customers Say
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
          >

            {/* Stars */}
            <div className="flex justify-center mb-3 text-yellow-400">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>

            {/* Message */}
            <p className="text-gray-600 text-sm md:text-base text-center mb-4">
              “{t.message}”
            </p>

            {/* Name */}
            <p className="font-semibold text-center text-gray-800">
              — {t.name}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}