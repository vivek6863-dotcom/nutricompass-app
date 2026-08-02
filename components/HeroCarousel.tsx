"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Find The Root Cause Of Your Symptoms",
    description:
      "Search hundreds of symptoms and discover possible nutrient deficiencies.",
    button: "Explore Symptoms",
    icon: "🩺",
  },
  {
    title: "Discover The Power Of Healthy Foods",
    description:
      "Explore foods rich in vitamins, minerals and antioxidants.",
    button: "Browse Foods",
    icon: "🥦",
  },
  {
    title: "Understand Essential Nutrients",
    description:
      "Learn how vitamins and minerals support your overall health.",
    button: "Learn Nutrients",
    icon: "💊",
  },
  {
    title: "Healthy Recipes For Every Goal",
    description:
      "Simple recipes designed for better energy and wellness.",
    button: "View Recipes",
    icon: "🍽️",
  },
];

export default function HeroCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-3xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-3xl p-16 text-center">
              <div className="text-6xl">{slide.icon}</div>

              <h2 className="text-5xl font-bold mt-6">
                {slide.title}
              </h2>

              <p className="mt-6 text-xl max-w-2xl mx-auto">
                {slide.description}
              </p>

              <button className="mt-10 bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-100 transition">
                {slide.button}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}