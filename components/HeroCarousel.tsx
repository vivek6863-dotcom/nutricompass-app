"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

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
    image: "/images/hero/symptoms.jpg",
    icon: "🩺",
  },

  {
    title: "Discover The Power Of Healthy Foods",
    description:
      "Explore nutritious foods and discover their key nutrients, benefits, and related health topics.",
    button: "Browse Foods",
    link: "/foods",
    image: "/images/hero/foods.jpg",
    icon: "🥦",
  },

  {
    title: "Understand Essential Nutrients",
    description:
      "Learn how vitamins, minerals, protein, and fiber support normal body functions.",
    button: "Learn Nutrients",
    link: "/nutrients",
    image: "/images/hero/nutrients.jpg",
    icon: "💊",
  },

  {
    title: "Healthy Recipes For Every Goal",
    description:
      "Discover simple, nutritious recipes made with wholesome ingredients and essential nutrients.",
    button: "View Recipes",
    link: "/recipes",
    image: "/images/hero/recipes.jpg",
    icon: "🍽️",
  },
];

export default function HeroCarousel() {
  return (
    <section
      aria-label="NutriCompass nutrition highlights"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10"
    >
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="!block overflow-hidden rounded-3xl shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.title}
            className="!h-auto"
          >
            <div className="relative h-[400px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-3xl bg-green-900">

              {/* Background Image */}

              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover scale-[1.04]"
              />

              {/* Green Overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-800/45" />

              {/* Content */}

              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6 sm:px-12 lg:px-16">

                <div className="max-w-4xl mx-auto">

                  {/* Icon */}

                  <div
                    className="text-5xl sm:text-6xl lg:text-7xl"
                    aria-hidden="true"
                  >
                    {slide.icon}
                  </div>

                  {/* Main Homepage H1 */}

                  <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Description */}

                  <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-green-50 leading-7 sm:leading-8 drop-shadow">
                    {slide.description}
                  </p>

                  {/* CTA */}

                  <Link
                    href={slide.link}
                    className="inline-flex items-center mt-7 sm:mt-8 bg-white text-green-700 font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:bg-green-50 hover:scale-105 transition-all duration-300"
                  >
                    {slide.button} →
                  </Link>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}