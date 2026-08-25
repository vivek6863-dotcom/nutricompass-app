import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/components/data/articles";
import { nutrientLink } from "@/lib/links";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nutricompass.in";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Health & Nutrition Articles | NutriCompass",

  description:
    "Explore nutrition articles about healthy foods, essential nutrients, common symptoms, healthy eating, and practical nutrition information.",

  keywords: [
    "nutrition articles",
    "health and nutrition articles",
    "healthy eating",
    "nutrition tips",
    "healthy foods",
    "essential nutrients",
    "nutrition information",
    "food and nutrition",
  ],

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

  alternates: {
    canonical: `${SITE_URL}/articles`,
  },

  openGraph: {
    type: "website",
    title: "Health & Nutrition Articles | NutriCompass",
    description:
      "Explore nutrition articles about healthy foods, essential nutrients, common symptoms, healthy eating, and practical nutrition information.",
    url: `${SITE_URL}/articles`,
    siteName: "NutriCompass",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Health & Nutrition Articles | NutriCompass",
    description:
      "Explore nutrition articles about healthy foods, essential nutrients, common symptoms, healthy eating, and practical nutrition information.",
  },
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  name: "Health & Nutrition Articles",

  description:
    "Explore nutrition articles about healthy foods, essential nutrients, common symptoms, healthy eating, and practical nutrition information.",

  url: `${SITE_URL}/articles`,

  isPartOf: {
    "@type": "WebSite",
    name: "NutriCompass",
    url: SITE_URL,
  },

  about: [
    {
      "@type": "Thing",
      name: "Nutrition",
    },
    {
      "@type": "Thing",
      name: "Healthy Eating",
    },
    {
      "@type": "Thing",
      name: "Food",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",

  name: "NutriCompass Health & Nutrition Articles",

  url: `${SITE_URL}/articles`,

  numberOfItems: articles.length,

  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",

    position: index + 1,

    url: `${SITE_URL}/articles/${article.slug}`,

    name: article.title,
  })),
};

/* =========================================================
   PAGE
========================================================= */

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 pt-8">

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
        >

          <Link
            href="/"
            className="hover:text-green-700 transition"
          >
            Home
          </Link>

          <span aria-hidden="true">
            →
          </span>

          <span
            className="text-gray-800 font-medium"
            aria-current="page"
          >
            Articles
          </span>

        </nav>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-3xl text-white p-10 md:p-16 text-center">

          <div
            className="text-6xl"
            aria-hidden="true"
          >
            📖
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Health & Nutrition Articles
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-green-50 leading-8">
            Explore helpful articles about nutrition, healthy foods,
            essential nutrients, common symptoms, and healthy eating.
          </p>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        aria-labelledby="nutrition-article-guide"
        className="max-w-5xl mx-auto px-6 pb-14"
      >

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            NutriCompass Nutrition Library
          </p>

          <h2
            id="nutrition-article-guide"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Learn More About Food & Nutrition
          </h2>

          <div className="mt-5 space-y-4 text-gray-600 leading-8 text-lg">

            <p>
              Nutrition can involve many different topics, including
              food choices, essential nutrients, healthy eating patterns,
              and nutrition-related symptoms.
            </p>

            <p>
              Our articles provide general educational information to
              help you explore these topics and understand how they
              connect with the foods and nutrients in the NutriCompass
              library.
            </p>

            <p>
              Browse the articles below and use the related links to
              explore individual foods, nutrients, symptoms, and recipes.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLE LIBRARY
      ===================================================== */}

      <section
        aria-labelledby="article-library"
        className="max-w-7xl mx-auto px-6 pb-16"
      >

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Explore Our Article Library
          </p>

          <h2
            id="article-library"
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Latest Nutrition Articles
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Read practical nutrition information and educational guides
            covering foods, nutrients, symptoms, and healthy eating.
          </p>

        </div>

        {/* =====================================================
            ARTICLE GRID
        ===================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (

            <article
              key={article.id}
              className="h-full bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* =================================================
                  ARTICLE HEADER
              ================================================= */}

              <Link
                href={`/articles/${article.slug}`}
                className="group block"
                aria-label={`Read article: ${article.title}`}
              >

                <div className="h-52 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">

                  <span
                    className="text-7xl group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    📖
                  </span>

                </div>

              </Link>

              {/* =================================================
                  ARTICLE CONTENT
              ================================================= */}

              <div className="p-7">

                {/* Category */}

                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>

                {/* Title */}

                <h3 className="mt-4 text-2xl font-bold text-gray-900 leading-tight">

                  <Link
                    href={`/articles/${article.slug}`}
                    className="hover:text-green-700 transition"
                  >
                    {article.title}
                  </Link>

                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
                  {article.description}
                </p>

                {/* =================================================
                    ARTICLE META
                ================================================= */}

                <div className="flex flex-wrap gap-2 mt-5">

                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                    ⏱️ {article.readTime}
                  </span>

                  <time
                    dateTime={article.publishedDate}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
                  >
                    📅 {article.publishedDate}
                  </time>

                </div>

                {/* =================================================
                    RELATED NUTRIENTS
                ================================================= */}

                {article.relatedNutrients.length > 0 && (

                  <div
                    className="mt-6"
                    aria-label="Related nutrients"
                  >

                    <p className="text-sm font-semibold text-gray-800 mb-3">
                      Related Nutrients
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {article.relatedNutrients.map(
                        (nutrient) => (

                          <Link
                            key={nutrient}
                            href={nutrientLink(nutrient)}
                            className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition"
                          >
                            {nutrient}
                          </Link>

                        )
                      )}

                    </div>

                  </div>

                )}

                {/* =================================================
                    CTA
                ================================================= */}

                <div className="mt-7 pt-5 border-t border-gray-100">

                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Read {article.title} →
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          EXPLORE NUTRITION TOPICS
      ===================================================== */}

      <section
        aria-labelledby="explore-nutrition-topics"
        className="max-w-7xl mx-auto px-6 pb-16"
      >

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="text-center">

            <p className="text-green-700 font-semibold uppercase tracking-wide">
              Explore More
            </p>

            <h2
              id="explore-nutrition-topics"
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Explore Foods, Nutrients, Symptoms & Recipes
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
              Use the NutriCompass library to explore nutrition topics
              from different perspectives and discover related information.
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
                Healthy Foods
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover foods and learn about their key nutrients
                and nutritional characteristics.
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
                Essential Nutrients
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Learn about vitamins, minerals, protein, fiber,
                and other essential nutrients.
              </p>

              <Link
                href="/nutrients"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Nutrients →
              </Link>

            </div>

            {/* Symptoms */}

            <div className="bg-purple-50 rounded-2xl p-6">

              <div
                className="text-4xl"
                aria-hidden="true"
              >
                🩺
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Nutrition & Symptoms
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Explore nutrition-related educational information
                about common symptoms and nutritional factors.
              </p>

              <Link
                href="/symptoms"
                className="inline-block mt-4 text-green-700 font-semibold hover:underline"
              >
                Explore Symptoms →
              </Link>

            </div>

          </div>

          {/* Recipes */}

          <div className="mt-6 bg-orange-50 rounded-2xl p-6 text-center">

            <div
              className="text-4xl"
              aria-hidden="true"
            >
              🍽️
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Healthy Recipes
            </h3>

            <p className="mt-3 text-gray-600 leading-7 max-w-2xl mx-auto">
              Discover nutritious recipes made with wholesome foods
              and explore the nutrients they can contribute to your diet.
            </p>

            <Link
              href="/recipes"
              className="inline-block mt-4 text-green-700 font-semibold hover:underline"
            >
              Explore Recipes →
            </Link>

          </div>

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
                for educational purposes. The information on this
                website should not be used to diagnose, treat, or
                prevent a medical condition. Nutritional needs can
                vary between individuals. Speak with a qualified
                healthcare professional for personalized advice.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}