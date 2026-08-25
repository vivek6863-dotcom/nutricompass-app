import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { articles } from "@/components/data/articles";

import {
  foodLink,
  nutrientLink,
  symptomLink,
} from "@/lib/links";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.in";

/* =========================================================
   STATIC ARTICLE PATHS
========================================================= */

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/* =========================================================
   DYNAMIC SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!article) {
    return {
      title: "Article Not Found | NutriCompass",

      description:
        "The requested article could not be found on NutriCompass.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  /* =======================================================
     SEO TITLE
  ======================================================= */

  const title =
    `${article.title} | NutriCompass`;

  /* =======================================================
     SEO DESCRIPTION
  ======================================================= */

  const description =
    article.description;

  /* =======================================================
     CANONICAL URL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/articles/${article.slug}`;

  /* =======================================================
     PUBLISHED DATE
  ======================================================= */

  const publishedDate =
    new Date(article.publishedDate);

  const publishedISO =
    publishedDate.toISOString();

  /* =======================================================
     RETURN METADATA
  ======================================================= */

  return {
    title,

    description,

    keywords: [
      article.title,
      article.category,
      "nutrition",
      "health",
      "healthy eating",
      "nutrition information",
      ...article.relatedFoods,
      ...article.relatedNutrients,
      ...article.relatedSymptoms,
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
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",

      title,

      description,

      url: canonicalUrl,

      siteName: "NutriCompass",

      locale: "en_US",

      publishedTime: publishedISO,

      authors: [
        article.author,
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,
    },
  };
}

/* =========================================================
   ARTICLE PAGE
========================================================= */

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     REAL 404
  ======================================================= */

  if (!article) {
    notFound();
  }

  /* =======================================================
     CANONICAL URL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/articles/${article.slug}`;

  /* =======================================================
     PUBLISHED DATE
  ======================================================= */

  const publishedDate =
    new Date(article.publishedDate);

  const publishedISO =
    publishedDate.toISOString();

  /* =======================================================
     RELATED ARTICLES
  ======================================================= */

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug
    )
    .map((item) => {

      const sharedNutrients =
        item.relatedNutrients.filter(
          (nutrient) =>
            article.relatedNutrients.includes(
              nutrient
            )
        ).length;

      const sharedSymptoms =
        item.relatedSymptoms.filter(
          (symptom) =>
            article.relatedSymptoms.includes(
              symptom
            )
        ).length;

      const sharedFoods =
        item.relatedFoods.filter(
          (food) =>
            article.relatedFoods.includes(
              food
            )
        ).length;

      const sameCategory =
        item.category === article.category
          ? 1
          : 0;

      const score =
        sharedNutrients * 3 +
        sharedSymptoms * 2 +
        sharedFoods +
        sameCategory;

      return {
        article: item,
        score,
      };
    })
    .filter(
      (item) =>
        item.score > 0
    )
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(0, 3)
    .map(
      (item) =>
        item.article
    );

  /* =======================================================
     ARTICLE STRUCTURED DATA
  ======================================================= */

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: article.title,

    description: article.description,

    articleBody: article.content,

    datePublished: publishedISO,

    dateModified: publishedISO,

    author: {
      "@type": "Organization",

      name: article.author,

      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",

      name: "NutriCompass",

      url: SITE_URL,
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": canonicalUrl,
    },

    url: canonicalUrl,

    articleSection: article.category,

    keywords: [
      article.title,
      article.category,
      ...article.relatedFoods,
      ...article.relatedNutrients,
      ...article.relatedSymptoms,
    ].join(", "),
  };

  /* =======================================================
     WEBPAGE STRUCTURED DATA
  ======================================================= */

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: article.title,

    description: article.description,

    url: canonicalUrl,

    isPartOf: {
      "@type": "WebSite",

      name: "NutriCompass",

      url: SITE_URL,
    },

    about: [
      ...article.relatedFoods.map((food) => ({
        "@type": "Thing",
        name: food,
      })),

      ...article.relatedNutrients.map((nutrient) => ({
        "@type": "Thing",
        name: nutrient,
      })),

      ...article.relatedSymptoms.map((symptom) => ({
        "@type": "Thing",
        name: symptom,
      })),
    ],
  };

  /* =======================================================
     BREADCRUMB STRUCTURED DATA
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: `${SITE_URL}/`,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Articles",

        item: `${SITE_URL}/articles`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: article.title,

        item: canonicalUrl,
      },
    ],
  };

  /* =======================================================
     RETURN PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              webPageSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="max-w-5xl mx-auto px-4 pt-8">

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

          <Link
            href="/articles"
            className="hover:text-green-700 transition"
          >
            Articles
          </Link>

          <span aria-hidden="true">
            →
          </span>

          <span
            className="text-gray-800 font-medium"
            aria-current="page"
          >
            {article.title}
          </span>

        </nav>

      </div>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <div className="max-w-5xl mx-auto py-8 px-4">

        <article className="bg-white rounded-3xl shadow-md overflow-hidden">

          {/* =================================================
              ARTICLE HEADER
          ================================================= */}

          <div className="bg-gradient-to-br from-green-100 to-green-200 px-8 py-12 md:px-12">

            <div className="inline-flex items-center bg-white/80 text-green-700 px-4 py-2 rounded-full font-semibold">
              📖 {article.category}
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {article.title}
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-8 max-w-4xl">
              {article.description}
            </p>

            {/* Article Meta */}

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">

              <span className="bg-white/70 px-4 py-2 rounded-full">
                ✍️ {article.author}
              </span>

              <span className="bg-white/70 px-4 py-2 rounded-full">
                ⏱️ {article.readTime}
              </span>

              <time
                dateTime={publishedISO}
                className="bg-white/70 px-4 py-2 rounded-full"
              >
                📅 {article.publishedDate}
              </time>

            </div>

          </div>

          {/* =================================================
              ARTICLE CONTENT
          ================================================= */}

          <div className="p-8 md:p-12">

            <div className="max-w-4xl">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About This Topic
              </h2>

              <div
                className="
                  text-lg
                  text-gray-700
                  leading-9
                  space-y-6

                  [&_h2]:text-3xl
                  [&_h2]:font-bold
                  [&_h2]:text-gray-800
                  [&_h2]:mt-10
                  [&_h2]:mb-4

                  [&_h3]:text-2xl
                  [&_h3]:font-bold
                  [&_h3]:text-gray-800
                  [&_h3]:mt-8
                  [&_h3]:mb-3

                  [&_p]:mb-6

                  [&_strong]:font-bold
                  [&_strong]:text-gray-900

                  [&_a]:text-green-700
                  [&_a]:font-semibold
                  [&_a]:underline
                  [&_a]:underline-offset-2
                  [&_a:hover]:text-green-800
                "
                dangerouslySetInnerHTML={{
                  __html:
                    article.contentHtml ||
                    article.content.replace(
                      /\n\n/g,
                      "<br /><br />"
                    ),
                }}
              />

            </div>

          </div>

        </article>

        {/* =====================================================
            RELATED SYMPTOMS
        ===================================================== */}

        {article.relatedSymptoms.length > 0 && (

          <section className="mt-10 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Related Symptoms
            </h2>

            <p className="text-gray-600 mb-6">
              Explore nutrition-related symptoms connected with this topic.
            </p>

            <div className="flex flex-wrap gap-3">

              {article.relatedSymptoms.map(
                (symptom) => (

                  <Link
                    key={symptom}
                    href={symptomLink(symptom)}
                    className="bg-red-50 border border-red-200 text-red-700 px-5 py-3 rounded-full font-semibold hover:bg-red-100 transition"
                  >
                    ⚠️ {symptom}
                  </Link>

                )
              )}

            </div>

          </section>

        )}

        {/* =====================================================
            RELATED FOODS
        ===================================================== */}

        {article.relatedFoods.length > 0 && (

          <section className="mt-10 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Related Foods
            </h2>

            <p className="text-gray-600 mb-6">
              Explore foods mentioned in this article.
            </p>

            <div className="flex flex-wrap gap-3">

              {article.relatedFoods.map(
                (food) => (

                  <Link
                    key={food}
                    href={foodLink(food)}
                    className="bg-green-100 text-green-700 px-5 py-3 rounded-full font-semibold hover:bg-green-200 transition"
                  >
                    🥗 {food}
                  </Link>

                )
              )}

            </div>

          </section>

        )}

        {/* =====================================================
            RELATED NUTRIENTS
        ===================================================== */}

        {article.relatedNutrients.length > 0 && (

          <section className="mt-10 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Related Nutrients
            </h2>

            <p className="text-gray-600 mb-6">
              Learn more about the nutrients discussed in this article.
            </p>

            <div className="flex flex-wrap gap-3">

              {article.relatedNutrients.map(
                (nutrient) => (

                  <Link
                    key={nutrient}
                    href={nutrientLink(nutrient)}
                    className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full font-semibold hover:bg-blue-200 transition"
                  >
                    💊 {nutrient}
                  </Link>

                )
              )}

            </div>

          </section>

        )}

        {/* =====================================================
            RELATED ARTICLES
        ===================================================== */}

        {relatedArticles.length > 0 && (

          <section className="mt-10">

            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Related Articles
              </h2>

              <p className="text-gray-600 mb-6">
                Continue exploring related health and nutrition topics.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {relatedArticles.map(
                  (relatedArticle) => (

                    <Link
                      key={relatedArticle.id}
                      href={`/articles/${relatedArticle.slug}`}
                      className="group"
                    >

                      <article className="h-full border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {relatedArticle.category}
                        </span>

                        <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-green-700 transition">
                          {relatedArticle.title}
                        </h3>

                        <p className="mt-3 text-gray-600 leading-7">
                          {relatedArticle.description}
                        </p>

                        <div className="mt-5 text-green-700 font-semibold">
                          Read Article →
                        </div>

                      </article>

                    </Link>

                  )
                )}

              </div>

            </div>

          </section>

        )}

        {/* =====================================================
            DISCLAIMER
        ===================================================== */}

        <section className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">

          <div className="flex gap-4">

            <div
              className="text-2xl"
              aria-hidden="true"
            >
              ℹ️
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Important Information
              </h2>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                NutriCompass provides general nutrition information for
                educational purposes. This content should not be used as
                a substitute for professional medical advice, diagnosis,
                or treatment.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            BACK TO ARTICLES
        ===================================================== */}

        <div className="mt-10">

          <Link
            href="/articles"
            className="text-green-700 font-semibold hover:underline"
          >
            ← Back To Articles
          </Link>

        </div>

      </div>

    </main>
  );
}