import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { foods } from "@/components/data/foods";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nutricompass.in";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Healthy Foods: Nutrition, Benefits & Key Nutrients | NutriCompass",

  description:
    "Explore healthy foods and learn about their key nutrients, nutritional benefits, related symptoms, recipes, and role in a balanced diet.",

  alternates: {
    canonical: `${SITE_URL}/foods`,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/foods`,
    siteName: "NutriCompass",
    title:
      "Healthy Foods: Nutrition, Benefits & Key Nutrients | NutriCompass",
    description:
      "Explore healthy foods and learn about their key nutrients, nutritional benefits, related symptoms, recipes, and role in a balanced diet.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Healthy Foods: Nutrition, Benefits & Key Nutrients | NutriCompass",
    description:
      "Explore healthy foods and learn about their key nutrients, nutritional benefits, related symptoms, recipes, and role in a balanced diet.",
  },
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Healthy Foods: Nutrition, Benefits & Key Nutrients",

  url: `${SITE_URL}/foods`,

  description:
    "Explore healthy foods and learn about their key nutrients, nutritional benefits, related symptoms, recipes, and role in a balanced diet.",

  isPartOf: {
    "@type": "WebSite",
    name: "NutriCompass",
    url: SITE_URL,
  },

  about: {
    "@type": "Thing",
    name: "Food and Nutrition",
  },
};

const itemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  name: "NutriCompass Healthy Foods",

  description:
    "A collection of foods with nutrition information, key nutrients, benefits, and related nutrition topics.",

  url: `${SITE_URL}/foods`,

  numberOfItems: foods.length,

  itemListElement: foods.map((food, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: food.name,

    url: `${SITE_URL}/foods/${food.slug}`,
  })),
};

/* =========================================================
   PAGE
========================================================= */

export default function FoodsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListStructuredData),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <div
            className="text-6xl"
            aria-hidden="true"
          >
            🥗
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Healthy Foods & Nutrition
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-green-50 leading-8">
            Explore nutrient-rich foods and learn about their key
            nutrients, nutritional benefits, and how they can fit
            into a balanced diet.
          </p>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="food-nutrition-guide"
        className="max-w-5xl mx-auto px-6 pt-14"
      >

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Food & Nutrition Guide
          </p>

          <h2
            id="food-nutrition-guide"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Explore Foods And Their Nutritional Benefits
          </h2>

          <div className="mt-5 space-y-4 text-gray-600 leading-8 text-lg">

            <p>
              Foods provide a combination of nutrients that contribute
              to normal body functions and overall nutritional health.
              Different foods can provide different amounts of protein,
              vitamins, minerals, fiber, and other nutrients.
            </p>

            <p>
              Our food library helps you explore individual foods,
              understand their key nutrients, and discover related
              nutrition topics, symptoms, recipes, and articles.
            </p>

            <p>
              Use the food pages below to learn more about each food
              and how it may contribute to a varied and balanced diet.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOODS
      ===================================================== */}

      <section
        aria-labelledby="food-library"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Explore Our Food Library
          </p>

          <h2
            id="food-library"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Discover Healthy Foods
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Browse foods to learn about their nutrients, nutritional
            benefits, and related health and nutrition topics.
          </p>

        </div>

        {/* ===================================================
            FOOD GRID
        =================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {foods.map((food) => (

            <Link
              key={food.id}
              href={`/foods/${food.slug}`}
              aria-label={`Learn about ${food.name} nutrition`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* =================================================
                  FOOD IMAGE
              ================================================= */}

              <div className="relative h-64 bg-green-50 overflow-hidden">

                <Image
                  src={food.image}
                  alt={`${food.name} nutrition and healthy food`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="p-7">

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition">
                    {food.name}
                  </h3>

                  <span className="shrink-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Healthy Food
                  </span>

                </div>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
                  {food.description}
                </p>

                {/* =================================================
                    KEY NUTRIENTS
                ================================================= */}

                <div className="mt-5">

                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    Key Nutrients
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {food.nutrients.map((nutrient) => (

                      <span
                        key={nutrient}
                        className="bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm"
                      >
                        💊 {nutrient}
                      </span>

                    ))}

                  </div>

                </div>

                {/* =================================================
                    BENEFITS
                ================================================= */}

                <div className="mt-6">

                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Nutritional Benefits
                  </p>

                  <ul className="space-y-1">

                    {food.benefits.slice(0, 2).map((benefit) => (

                      <li
                        key={benefit}
                        className="text-sm text-gray-600"
                      >

                        <span
                          className="text-green-600 mr-2"
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        {benefit}

                      </li>

                    ))}

                  </ul>

                </div>

                {/* =================================================
                    EXPLORE
                ================================================= */}

                <div className="mt-7 pt-5 border-t border-gray-100">

                  <span className="text-green-700 font-semibold group-hover:underline">
                    Explore {food.name} Nutrition →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* =====================================================
          WHY EXPLORE FOOD NUTRITION
      ===================================================== */}

      <section
        aria-labelledby="why-food-nutrition"
        className="max-w-7xl mx-auto px-6 pb-16"
      >

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="text-center">

            <p className="text-green-700 font-semibold uppercase tracking-wide">
              Understanding Food Nutrition
            </p>

            <h2
              id="why-food-nutrition"
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Why Learn About Food Nutrients?
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Understanding the nutrients found in different foods can
              make it easier to build a varied diet and learn more about
              the nutritional role of the foods you eat.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-green-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                💊
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Discover Key Nutrients
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Learn which vitamins, minerals, protein, fiber,
                and other nutrients are associated with different foods.
              </p>

              <Link
                href="/nutrients"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Nutrients →
              </Link>

            </div>

            <div className="bg-blue-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                🩺
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Explore Nutrition Topics
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore nutrition-related information about common
                symptoms and the nutrients and foods associated with them.
              </p>

              <Link
                href="/symptoms"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Symptoms →
              </Link>

            </div>

            <div className="bg-orange-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                🍽️
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Find Healthy Recipes
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover recipes that use nutritious ingredients and
                connect foods with practical meal ideas.
              </p>

              <Link
                href="/recipes"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Recipes →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-green-700 rounded-3xl p-10 md:p-14 text-center text-white">

          <div
            className="text-5xl"
            aria-hidden="true"
          >
            🥗
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold">
            Build A Healthier Plate
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-green-50 text-lg leading-8">
            Explore nutritious ingredients, learn about their key
            nutrients, and discover healthy recipes for a varied diet.
          </p>

          <Link
            href="/recipes"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Explore Healthy Recipes →
          </Link>

        </div>

      </section>

      {/* =====================================================
          IMPORTANT INFORMATION
      ===================================================== */}

      <section
        aria-labelledby="important-information"
        className="max-w-7xl mx-auto px-6 pb-16"
      >

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">

          <div className="flex gap-4">

            <div
              className="text-2xl"
              aria-hidden="true"
            >
              ℹ️
            </div>

            <div>

              <h2
                id="important-information"
                className="font-bold text-gray-900"
              >
                Important Information
              </h2>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                NutriCompass provides general nutrition information
                for educational purposes. Nutritional needs can vary
                between individuals. Information on this website should
                not be used to diagnose, treat, or prevent a medical
                condition. Speak with a qualified healthcare professional
                for personalized advice.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}