import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { nutrients } from "@/components/data/nutrients";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nutricompass.in";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Essential Nutrients: Vitamins, Minerals & Nutrition | NutriCompass",

  description:
    "Explore essential nutrients including vitamins, minerals, protein, and fiber. Learn about their functions, food sources, nutritional benefits, and related health topics.",

  alternates: {
    canonical: `${SITE_URL}/nutrients`,
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
    url: `${SITE_URL}/nutrients`,
    siteName: "NutriCompass",
    title:
      "Essential Nutrients: Vitamins, Minerals & Nutrition | NutriCompass",
    description:
      "Explore essential nutrients including vitamins, minerals, protein, and fiber. Learn about their functions, food sources, nutritional benefits, and related health topics.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Essential Nutrients: Vitamins, Minerals & Nutrition | NutriCompass",
    description:
      "Explore essential nutrients including vitamins, minerals, protein, and fiber. Learn about their functions, food sources, nutritional benefits, and related health topics.",
  },
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Essential Nutrients: Vitamins, Minerals & Nutrition",

  url: `${SITE_URL}/nutrients`,

  description:
    "Explore essential nutrients including vitamins, minerals, protein, and fiber, along with their food sources, nutritional benefits, and related health topics.",

  isPartOf: {
    "@type": "WebSite",
    name: "NutriCompass",
    url: SITE_URL,
  },

  about: {
    "@type": "Thing",
    name: "Nutrition and Essential Nutrients",
  },
};

const itemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  name: "NutriCompass Essential Nutrients",

  description:
    "A collection of essential nutrients with information about their benefits, food sources, and related nutrition topics.",

  url: `${SITE_URL}/nutrients`,

  numberOfItems: nutrients.length,

  itemListElement: nutrients.map((nutrient, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: nutrient.name,

    url: `${SITE_URL}/nutrients/${nutrient.slug}`,
  })),
};

/* =========================================================
   PAGE
========================================================= */

export default function NutrientsPage() {
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
            💊
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Essential Nutrients
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-green-50 leading-8">
            Explore essential vitamins, minerals, protein, and fiber,
            and learn about their nutritional roles, food sources,
            and related health topics.
          </p>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="nutrient-guide"
        className="max-w-5xl mx-auto px-6 pt-14"
      >

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Nutrition & Nutrient Guide
          </p>

          <h2
            id="nutrient-guide"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Understand Essential Nutrients
          </h2>

          <div className="mt-5 space-y-4 text-gray-600 leading-8 text-lg">

            <p>
              Nutrients are substances that the body needs for normal
              growth, development, energy metabolism, and everyday
              functions. They come from a wide variety of foods and
              beverages consumed as part of the diet.
            </p>

            <p>
              Essential nutrients include vitamins, minerals, protein,
              fats, carbohydrates, and other dietary components such as
              fiber. Different nutrients have different roles, and
              eating a varied diet can help provide a broad range of
              nutrients.
            </p>

            <p>
              Explore the nutrient library below to learn about individual
              nutrients, their nutritional roles, food sources, and
              related nutrition topics.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          NUTRIENT LIBRARY
      ===================================================== */}

      <section
        aria-labelledby="nutrient-library"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        {/* Section Heading */}

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Explore Our Nutrient Library
          </p>

          <h2
            id="nutrient-library"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Vitamins, Minerals & Essential Nutrients
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Learn about individual nutrients and discover their
            nutritional roles, benefits, food sources, and related topics.
          </p>

        </div>

        {/* ===================================================
            NUTRIENT GRID
        =================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {nutrients.map((nutrient) => (

            <Link
              key={nutrient.id}
              href={`/nutrients/${nutrient.slug}`}
              aria-label={`Learn about ${nutrient.name} nutrition`}
              className="group"
            >

              <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

                {/* =================================================
                    NUTRIENT IMAGE
                ================================================= */}

                <div className="relative w-full aspect-[3/2] bg-green-50 overflow-hidden">

                  <Image
                    src={nutrient.image}
                    alt={`${nutrient.name} nutrition and food sources`}
                    fill
                    priority={nutrient.id <= 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition">
                    {nutrient.name}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
                    {nutrient.description}
                  </p>

                  {/* =================================================
                      BENEFITS
                  ================================================= */}

                  <div className="mt-5">

                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Nutritional Roles
                    </h4>

                    <ul className="space-y-2">

                      {nutrient.benefits.slice(0, 3).map((benefit) => (

                        <li
                          key={benefit}
                          className="text-gray-600 text-sm"
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
                      CTA
                  ================================================= */}

                  <div className="mt-6 pt-5 border-t border-gray-100">

                    <span className="text-green-700 font-semibold group-hover:underline">
                      Explore {nutrient.name} →
                    </span>

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </section>

      {/* =====================================================
          EXPLORE NUTRITION CONNECTIONS
      ===================================================== */}

      <section
        aria-labelledby="nutrition-connections"
        className="max-w-7xl mx-auto px-6 pb-16"
      >

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="text-center">

            <p className="text-green-700 font-semibold uppercase tracking-wide">
              Explore Nutrition Connections
            </p>

            <h2
              id="nutrition-connections"
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Connect Nutrients With Foods, Symptoms & Recipes
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Understanding how nutrients relate to different foods and
              nutrition topics can help you explore a balanced and varied
              diet.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {/* Foods */}

            <div className="bg-green-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                🥗
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Find Food Sources
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore foods and discover the nutrients they can
                contribute to your diet.
              </p>

              <Link
                href="/foods"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Foods →
              </Link>

            </div>

            {/* Symptoms */}

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
                Learn about nutrition-related information connected with
                common symptoms and nutritional needs.
              </p>

              <Link
                href="/symptoms"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Symptoms →
              </Link>

            </div>

            {/* Recipes */}

            <div className="bg-orange-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                🍽️
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Discover Healthy Recipes
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover recipes made with nutritious ingredients and
                explore practical ways to include a variety of foods
                in meals.
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
          NUTRITION ARTICLES CTA
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-green-700 rounded-3xl p-10 md:p-14 text-center text-white">

          <div
            className="text-5xl"
            aria-hidden="true"
          >
            📖
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold">
            Learn More About Nutrition
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-green-50 text-lg leading-8">
            Read nutrition articles and practical guides about foods,
            nutrients, healthy eating, and related nutrition topics.
          </p>

          <Link
            href="/articles"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Explore Nutrition Articles →
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