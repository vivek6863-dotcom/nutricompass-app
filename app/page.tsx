import type { Metadata } from "next";
import Link from "next/link";

import HeroCarousel from "../components/HeroCarousel";
import CategorySection from "../components/CategorySection";
import TrendingSymptoms from "../components/TrendingSymptoms";
import PopularFoods from "../components/PopularFoods";
import LatestArticles from "../components/LatestArticles";

export const metadata: Metadata = {
  title: "Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",

  description:
    "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes with NutriCompass.",

  alternates: {
    canonical: "https://nutricompass.in/",
  },

  openGraph: {
    type: "website",
    url: "https://nutricompass.in/",
    siteName: "NutriCompass",
    title: "Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    description:
      "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes with NutriCompass.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    description:
      "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes with NutriCompass.",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NutriCompass",
  url: "https://nutricompass.in/",
  description:
    "Nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes.",
};

export default function Home() {
  return (
    <>
      {/* Website Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <HeroCarousel />

        <CategorySection />

        {/* =====================================================
            NUTRITION INFORMATION INTRODUCTION
        ===================================================== */}
        <section
          aria-labelledby="nutrition-information"
          className="max-w-6xl mx-auto px-6 py-14"
        >
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
            <p className="text-green-700 font-semibold uppercase tracking-wide">
              NutriCompass Nutrition Guide
            </p>

            <h2
              id="nutrition-information"
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Nutrition Information For Foods, Nutrients & Healthy Eating
            </h2>

            <div className="mt-5 space-y-4 text-gray-600 leading-8 text-lg">
              <p>
                NutriCompass helps you explore nutrition information through
                healthy foods, essential nutrients, common symptoms, healthy
                recipes, and practical nutrition articles.
              </p>

              <p>
                Learn about the nutrients found in different foods, explore
                nutrition-related information for common symptoms, and discover
                simple ways to build a varied and balanced eating pattern.
              </p>

              <p>
                Browse our nutrition library to explore individual foods,
                vitamins, minerals, protein, fiber, symptoms, recipes, and
                educational articles.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPLORE NUTRITION TOPICS
        ===================================================== */}
        <section
          aria-labelledby="explore-nutrition-topics"
          className="max-w-6xl mx-auto px-6 pb-14"
        >
          <div className="text-center mb-10">
            <p className="text-green-700 font-semibold uppercase tracking-wide">
              Explore Nutrition
            </p>

            <h2
              id="explore-nutrition-topics"
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Explore Foods, Nutrients, Symptoms & Recipes
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Explore nutrition topics from different perspectives and find
              useful information about foods, nutrients, symptoms, healthy
              recipes, and healthy eating.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Foods */}
            <Link
              href="/foods"
              className="group bg-white rounded-3xl border border-gray-200 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl" aria-hidden="true">
                🥗
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-green-700">
                Healthy Foods
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore food nutrition, key nutrients, nutritional benefits,
                and related nutrition information.
              </p>

              <span className="inline-block mt-5 text-green-700 font-semibold">
                Explore Foods →
              </span>
            </Link>

            {/* Nutrients */}
            <Link
              href="/nutrients"
              className="group bg-white rounded-3xl border border-gray-200 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl" aria-hidden="true">
                💊
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-green-700">
                Essential Nutrients
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Learn about vitamins, minerals, protein, fiber, food sources,
                benefits, and daily nutritional requirements.
              </p>

              <span className="inline-block mt-5 text-green-700 font-semibold">
                Explore Nutrients →
              </span>
            </Link>

            {/* Symptoms */}
            <Link
              href="/symptoms"
              className="group bg-white rounded-3xl border border-gray-200 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl" aria-hidden="true">
                🩺
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-green-700">
                Common Symptoms
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore nutrition-related information about common symptoms
                and the foods and nutrients associated with them.
              </p>

              <span className="inline-block mt-5 text-green-700 font-semibold">
                Explore Symptoms →
              </span>
            </Link>

            {/* Recipes */}
            <Link
              href="/recipes"
              className="group bg-white rounded-3xl border border-gray-200 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl" aria-hidden="true">
                🍲
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-green-700">
                Healthy Recipes
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover recipe ideas and explore how nutritious foods can fit
                into a balanced eating pattern.
              </p>

              <span className="inline-block mt-5 text-green-700 font-semibold">
                Explore Recipes →
              </span>
            </Link>
          </div>
        </section>

        <TrendingSymptoms />

        <PopularFoods />

        {/* =====================================================
            NUTRITION EDUCATION
        ===================================================== */}
        <section
          aria-labelledby="nutrition-education"
          className="max-w-6xl mx-auto px-6 py-14"
        >
          <div className="bg-green-50 rounded-3xl border border-green-100 p-8 md:p-10">
            <div className="text-center">
              <p className="text-green-700 font-semibold uppercase tracking-wide">
                Nutrition Education
              </p>

              <h2
                id="nutrition-education"
                className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
              >
                Learn More About Food & Nutrition
              </h2>

              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                Read practical nutrition articles covering healthy foods,
                essential nutrients, nutrition information, common symptoms,
                and healthy eating.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center rounded-full bg-green-700 px-6 py-3 text-white font-semibold hover:bg-green-800 transition"
              >
                Read Nutrition Articles →
              </Link>

              <Link
                href="/foods"
                className="inline-flex items-center rounded-full bg-white border border-green-200 px-6 py-3 text-green-700 font-semibold hover:bg-green-100 transition"
              >
                Browse Healthy Foods →
              </Link>

              <Link
                href="/nutrients"
                className="inline-flex items-center rounded-full bg-white border border-green-200 px-6 py-3 text-green-700 font-semibold hover:bg-green-100 transition"
              >
                Explore Essential Nutrients →
              </Link>
            </div>
          </div>
        </section>

        <LatestArticles />
      </main>
    </>
  );
}