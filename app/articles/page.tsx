import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/components/data/articles";
import { nutrientLink } from "@/lib/links";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.com";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Health & Nutrition Articles | NutriCompass",

  description:
    "Explore helpful nutrition and wellness articles covering symptoms, nutrients, foods, healthy eating, and practical nutrition information.",

  keywords: [
    "nutrition articles",
    "health articles",
    "healthy eating",
    "nutrition tips",
    "wellness articles",
    "healthy foods",
    "nutrients",
    "nutrition information",
    "health and nutrition",
    "nutrition advice",
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
      "Explore helpful nutrition and wellness articles covering symptoms, nutrients, foods, healthy eating, and practical nutrition information.",

    url: `${SITE_URL}/articles`,

    siteName: "NutriCompass",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "Health & Nutrition Articles | NutriCompass",

    description:
      "Explore helpful nutrition and wellness articles covering symptoms, nutrients, foods, healthy eating, and practical nutrition information.",
  },
};

/* =========================================================
   ARTICLES PAGE
========================================================= */

export default function ArticlesPage() {

  /* =======================================================
     COLLECTION PAGE STRUCTURED DATA
  ======================================================= */

  const collectionSchema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: "Health & Nutrition Articles",

    description:
      "Explore helpful nutrition and wellness articles covering symptoms, nutrients, foods, healthy eating, and practical nutrition information.",

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
        name: "Wellness",
      },
    ],
  };

  /* =======================================================
     ARTICLE LIST STRUCTURED DATA
  ======================================================= */

  const itemListSchema = {
    "@context": "https://schema.org",

    "@type": "ItemList",

    name: "NutriCompass Health & Nutrition Articles",

    url: `${SITE_URL}/articles`,

    numberOfItems: articles.length,

    itemListElement: articles.map(
      (article, index) => ({
        "@type": "ListItem",

        position: index + 1,

        url: `${SITE_URL}/articles/${article.slug}`,

        name: article.title,
      })
    ),
  };

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

      <div className="max-w-6xl mx-auto px-4 pt-8">

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

      <section className="max-w-6xl mx-auto py-12 px-4">

        <div className="text-center">

          <div
            className="text-6xl"
            aria-hidden="true"
          >
            📖
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-green-700">
            Health & Nutrition Articles
          </h1>

          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Explore helpful nutrition and wellness articles to better
            understand symptoms, nutrients, foods, and healthy eating.
          </p>

        </div>

      </section>

      {/* =====================================================
          ARTICLE GRID
      ===================================================== */}

      <section
        className="max-w-6xl mx-auto px-4 pb-16"
        aria-label="Health and nutrition articles"
      >

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (

            <article
              key={article.id}
              className="h-full bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* =================================================
                  ARTICLE IMAGE / HEADER
              ================================================= */}

              <Link
                href={`/articles/${article.slug}`}
                className="group block"
                aria-label={`Read article: ${article.title}`}
              >

                <div className="h-52 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">

                  <span
                    className="text-7xl"
                    aria-hidden="true"
                  >
                    📖
                  </span>

                </div>

              </Link>

              {/* =================================================
                  ARTICLE CONTENT
              ================================================= */}

              <div className="p-6">

                {/* Category */}

                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </span>

                {/* Title */}

                <h2 className="mt-4 text-2xl font-bold text-gray-800">

                  <Link
                    href={`/articles/${article.slug}`}
                    className="hover:text-green-700 transition"
                  >
                    {article.title}
                  </Link>

                </h2>

                {/* Description */}

                <p className="mt-3 text-gray-600 leading-7">
                  {article.description}
                </p>

                {/* =================================================
                    ARTICLE META
                ================================================= */}

                <div className="flex flex-wrap gap-2 mt-5">

                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    ⏱️ {article.readTime}
                  </span>

                  <time
                    dateTime={article.publishedDate}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    📅 {article.publishedDate}
                  </time>

                </div>

                {/* =================================================
                    RELATED NUTRIENTS
                ================================================= */}

                {article.relatedNutrients.length > 0 && (

                  <div
                    className="flex flex-wrap gap-2 mt-5"
                    aria-label="Related nutrients"
                  >

                    {article.relatedNutrients.map(
                      (nutrient) => (

                        <Link
                          key={nutrient}
                          href={nutrientLink(nutrient)}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition"
                        >
                          {nutrient}
                        </Link>

                      )
                    )}

                  </div>

                )}

                {/* =================================================
                    CTA
                ================================================= */}

                <div className="mt-6">

                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Read Article →
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}