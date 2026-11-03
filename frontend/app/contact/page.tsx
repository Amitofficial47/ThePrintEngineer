// "use client";

// import { useState } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaUser,
// } from "react-icons/fa";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await new Promise((res) => setTimeout(res, 1000));
//       setSuccess(true);
//       setForm({ name: "", email: "", message: "" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="py-14 px-4 md:px-6">

//       {/* HEADER */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold">
//           Contact Us
//         </h1>

//         <p className="text-gray-500 mt-2">
//           We’d love to hear from you
//         </p>
//       </div>

//       {/* CONTAINER */}
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* LEFT INFO CARDS */}
//         <div className="space-y-4">

//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
//             <FaEnvelope className="text-black" />
//             <div>
//               <p className="font-semibold">Email</p>
//               <p className="text-gray-600 text-sm">
//                 theprintengineer@gmail.com
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
//             <FaPhoneAlt className="text-black" />
//             <div>
//               <p className="font-semibold">Phone</p>
//               <p className="text-gray-600 text-sm">
//                 +91 80919 27360
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
//             <FaMapMarkerAlt className="text-black" />
//             <div>
//               <p className="font-semibold">Address</p>
//               <p className="text-gray-600 text-sm">
//                 Altura Apartment,Zirakpur,Mohali Punjab-140603
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-2xl shadow-md space-y-4"
//         >

//           {/* NAME */}
//           <div className="relative">
//             <FaUser className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
//               required
//             />
//           </div>

//           {/* EMAIL */}
//           <div className="relative">
//             <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
//               required
//             />
//           </div>

//           {/* MESSAGE */}
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={form.message}
//             onChange={handleChange}
//             rows={5}
//             className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
//             required
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//           >
//             <FaPaperPlane />
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {/* SUCCESS */}
//           {success && (
//             <p className="text-green-600 text-sm text-center">
//               Message sent successfully!
//             </p>
//           )}

//         </form>

//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaCube,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔥 later connect API here
      await new Promise((res) => setTimeout(res, 1000));

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-14 px-4 md:px-6">

      {/* HEADER */}
      <div className="text-center mb-12">
        <p className="inline-block text-xs bg-black text-white px-3 py-1 rounded-full mb-3">
          3D Printing Support
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-500 mt-2">
          We&apos;d love to help you create something amazing in 3D
        </p>
      </div>

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-5">

          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="bg-black text-white p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600 text-sm">
                theprintengineer@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="bg-black text-white p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600 text-sm">
                +91 80919 27360
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="bg-black text-white p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600 text-sm">
                Altura Apartment, Zirakpur, Mohali, Punjab - 140603
              </p>
            </div>
          </div>

          {/* EXTRA CARD (3D SERVICE) */}
          <div className="flex items-center gap-4 p-5 bg-gray-100 rounded-2xl">
            <div className="bg-black text-white p-3 rounded-full">
              <FaCube />
            </div>
            <div>
              <p className="font-semibold">Custom 3D Printing</p>
              <p className="text-gray-600 text-sm">
                Send us your idea or design — we&apos;ll bring it to life.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md space-y-4"
        >

          {/* NAME */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Tell us about your 3D idea or requirement..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
            required
          />
          <div>
  <label className="block text-sm font-medium mb-1">
    Upload 3D File (optional)
  </label>

  <input
    type="file"
    accept=".stl,.obj,.zip"
    className="w-full border px-3 py-2 rounded-lg"
  />
</div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-600 text-sm text-center">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>
    </main>
  );
}