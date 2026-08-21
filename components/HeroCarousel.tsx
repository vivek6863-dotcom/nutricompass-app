"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Find The Root Cause Of Your Symptoms",
    description:
      "Explore common symptoms and learn about nutrients and foods that may support your nutritional needs.",
    button: "Explore Symptoms",
    link: "/symptoms",
    icon: "🩺",
  },

  {
    title: "Discover The Power Of Healthy Foods",
    description:
      "Explore nutritious foods and discover their key nutrients, benefits, and related health topics.",
    button: "Browse Foods",
    link: "/foods",
    icon: "🥦",
  },

  {
    title: "Understand Essential Nutrients",
    description:
      "Learn how vitamins, minerals, protein, and fiber support normal body functions.",
    button: "Learn Nutrients",
    link: "/nutrients",
    icon: "💊",
  },

  {
    title: "Healthy Recipes For Every Goal",
    description:
      "Discover simple, nutritious recipes made with wholesome ingredients and essential nutrients.",
    button: "View Recipes",
    link: "/recipes",
    icon: "🍽️",
  },
];

export default function HeroCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-3xl overflow-hidden"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>

            <div className="min-h-[420px] bg-gradient-to-r from-green-700 to-green-500 text-white rounded-3xl px-6 py-16 sm:px-12 lg:px-16 flex items-center justify-center text-center">

              <div className="max-w-4xl mx-auto">

                {/* Icon */}

                <div className="text-6xl sm:text-7xl">
                  {slide.icon}
                </div>

                {/* Heading */}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}

                <p className="mt-6 text-lg sm:text-xl text-green-50 max-w-2xl mx-auto leading-8">
                  {slide.description}
                </p>

                {/* CTA */}

                <Link
                  href={slide.link}
                  className="inline-block mt-10 bg-white text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {slide.button} →
                </Link>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}