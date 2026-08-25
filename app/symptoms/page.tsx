import type { Metadata } from "next";
import Link from "next/link";

import { symptoms } from "@/components/data/symptoms";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nutricompass.in";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Common Symptoms & Nutrition Information | NutriCompass",

  description:
    "Explore common symptoms and learn about nutrition-related information, foods, nutrients, and dietary factors associated with different nutritional needs.",

  alternates: {
    canonical: `${SITE_URL}/symptoms`,
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
    url: `${SITE_URL}/symptoms`,
    siteName: "NutriCompass",
    title: "Common Symptoms & Nutrition Information | NutriCompass",
    description:
      "Explore common symptoms and learn about nutrition-related information, foods, nutrients, and dietary factors associated with different nutritional needs.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Common Symptoms & Nutrition Information | NutriCompass",
    description:
      "Explore common symptoms and learn about nutrition-related information, foods, nutrients, and dietary factors associated with different nutritional needs.",
  },
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const webPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: "Common Symptoms & Nutrition Information",

  url: `${SITE_URL}/symptoms`,

  description:
    "Explore common symptoms and nutrition-related information about foods, nutrients, and dietary factors.",

  isPartOf: {
    "@type": "WebSite",
    name: "NutriCompass",
    url: SITE_URL,
  },

  about: {
    "@type": "Thing",
    name: "Nutrition and Symptoms",
  },
};

const itemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  name: "NutriCompass Symptoms",

  description:
    "A collection of common symptoms with nutrition-related educational information.",

  url: `${SITE_URL}/symptoms`,

  numberOfItems: symptoms.length,

  itemListElement: symptoms.map((symptom, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: symptom.title,

    url: `${SITE_URL}/symptoms/${symptom.slug}`,
  })),
};

/* =========================================================
   PAGE
========================================================= */

export default function SymptomsPage() {
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
            🩺
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Common Symptoms & Nutrition
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-green-50 leading-8">
            Explore common symptoms and learn about nutrition-related
            information, foods, nutrients, and dietary factors that may
            be relevant to different nutritional needs.
          </p>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="symptom-nutrition-guide"
        className="max-w-5xl mx-auto px-6 pt-14"
      >

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Symptoms & Nutrition Guide
          </p>

          <h2
            id="symptom-nutrition-guide"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Explore Symptoms And Nutritional Factors
          </h2>

          <div className="mt-5 space-y-4 text-gray-600 leading-8 text-lg">

            <p>
              Symptoms can have many different causes. Nutrition is one
              factor that may be relevant in some situations, but a symptom
              does not necessarily indicate a specific nutrient deficiency
              or dietary problem.
            </p>

            <p>
              Our symptom library provides general educational information
              about nutrition-related factors, foods, and nutrients that
              are associated with each topic.
            </p>

            <p>
              Explore an individual symptom to learn more about the topic
              and discover related foods, nutrients, recipes, and articles
              available on NutriCompass.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SYMPTOM LIBRARY
      ===================================================== */}

      <section
        aria-labelledby="symptom-library"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        {/* Section Heading */}

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Explore Our Symptom Library
          </p>

          <h2
            id="symptom-library"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Common Symptoms & Nutrition Topics
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Browse common symptoms to explore nutrition-related
            information and connected foods and nutrients.
          </p>

        </div>

        {/* ===================================================
            SYMPTOM GRID
        =================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {symptoms.map((symptom) => (

            <Link
              key={symptom.slug}
              href={`/symptoms/${symptom.slug}`}
              aria-label={`Learn about ${symptom.title} and nutrition`}
              className="group"
            >

              <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-7">

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-4xl group-hover:bg-green-100 transition"
                  aria-hidden="true"
                >
                  {getSymptomIcon(symptom.slug)}
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="mt-5 text-2xl font-bold text-gray-900 group-hover:text-green-700 transition">
                  {symptom.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="mt-3 text-gray-600 leading-7">
                  {symptom.shortDescription}
                </p>

                {/* =================================================
                    RELATED NUTRIENTS
                ================================================= */}

                <div className="mt-5">

                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    Related Nutrients
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {symptom.nutrients.slice(0, 3).map((nutrient) => (

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
                    RELATED FOODS
                ================================================= */}

                <div className="mt-5">

                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Food Topics
                  </p>

                  <p className="text-sm text-gray-600">
                    {symptom.bestFoods.slice(0, 3).join(", ")}
                  </p>

                </div>

                {/* =================================================
                    CTA
                ================================================= */}

                <div className="mt-6 pt-5 border-t border-gray-100">

                  <span className="text-green-700 font-semibold group-hover:underline">
                    Explore {symptom.title} →
                  </span>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </section>

      {/* =====================================================
          NUTRITION CONNECTIONS
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
              Explore Foods, Nutrients & Healthy Recipes
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Explore other parts of NutriCompass to learn about foods,
              essential nutrients, recipes, and nutrition articles.
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
                Explore Foods
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover foods and learn about their nutrients and
                nutritional characteristics.
              </p>

              <Link
                href="/foods"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Foods →
              </Link>

            </div>

            {/* Nutrients */}

            <div className="bg-blue-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                💊
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Explore Nutrients
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Learn about vitamins, minerals, protein, fiber, and
                other important nutrients.
              </p>

              <Link
                href="/nutrients"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Nutrients →
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
                Discover Recipes
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Find nutritious recipes and discover practical ways
                to use a variety of foods.
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
          ARTICLES CTA
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
            Read educational articles about foods, nutrients, healthy
            eating, and nutrition-related topics.
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
                for educational purposes. Symptoms can have many
                different causes, and information on this website
                should not be used to diagnose, treat, or prevent
                a medical condition. If you have persistent, severe,
                or concerning symptoms, speak with a qualified
                healthcare professional.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

/* =========================================================
   SYMPTOM ICONS
========================================================= */

function getSymptomIcon(slug: string) {
  const icons: Record<string, string> = {
    "iron-deficiency": "🩸",
    "hair-loss": "💇",
    "vitamin-d-deficiency": "☀️",
    fatigue: "😴",
    weakness: "💪",
    acne: "🧴",
    constipation: "🥗",
    "vitamin-c-deficiency": "🍊",
    "vitamin-b12-deficiency": "🧠",
    "low-hemoglobin": "🩸",
    "low-immunity": "🛡️",
  };

  return icons[slug] || "🩺";
}