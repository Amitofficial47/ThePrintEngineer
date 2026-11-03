"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const images = [
    "/hero/1.1.png",
    "/hero/1.2.png",
    "/hero/1.3.png",
  ];

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] pt-20 sm:pt-24 md:pt-0 flex items-center bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">

      {/* Background blur */}
      <div className="absolute -top-40 -right-40 w-72 md:w-96 h-72 md:h-96 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-72 md:w-96 h-72 md:h-96 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* SMALL BADGE */}
          <p className="inline-block text-xs md:text-sm bg-black text-white px-3 py-1 rounded-full mb-3">
            3D Printing Studio
          </p>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-5">
            Bring Your Ideas <br />
            <span className="text-black">To Life in 3D</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
            Create custom 3D toys, anime figures, gadgets, and unique designs
            with high-precision 3D printing.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">

            <Link
              href="/shop"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Upload Your Design
            </Link>

          </div>

        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full max-w-sm md:max-w-none mx-auto">

          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
          >

            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-75 sm:h-100 rounded-2xl overflow-hidden shadow-lg">

                  <Image
                    src={img}
                    alt={`hero-${i}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
}