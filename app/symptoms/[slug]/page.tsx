import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { symptoms } from "@/components/data/symptoms";
import { foods } from "@/components/data/foods";
import { nutrients } from "@/components/data/nutrients";
import { recipes } from "@/components/data/recipes";
import { articles } from "@/components/data/articles";

import SymptomOverview from "@/components/SymptomOverview";
import SymptomHero from "@/components/SymptomHero";
import FoodGrid from "@/components/FoodGrid";

import {
  createSlug,
  nutrientLink,
  recipeLink,
  symptomLink,
} from "@/lib/links";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.in";

/* =========================================================
   DYNAMIC SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const symptom = symptoms.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!symptom) {
    return {
      title: "Symptom Not Found | NutriCompass",

      description:
        "The requested symptom could not be found on NutriCompass.",

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
    `${symptom.title}: Symptoms, Foods & Nutrition`;

  /* =======================================================
     SEO DESCRIPTION
  ======================================================= */

  const description =
    `Learn about ${symptom.title} symptoms, nutrition-related foods and important nutrients. Explore practical nutrition information from NutriCompass.`;

  /* =======================================================
     CANONICAL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/symptoms/${symptom.slug}`;

  /* =======================================================
     IMAGE
  ======================================================= */

  const imageUrl = symptom.image
    ? symptom.image.startsWith("http")
      ? symptom.image
      : `${SITE_URL}${symptom.image}`
    : `${SITE_URL}/images/symptoms/${symptom.slug}.jpg`;

  return {
    title,

    description,

    keywords: [
      symptom.title,
      `${symptom.title} symptoms`,
      `${symptom.title} foods`,
      `${symptom.title} nutrition`,
      `foods for ${symptom.title}`,
      "nutrition",
      "healthy foods",
      ...symptom.nutrients,
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

      title:
        `${title} | NutriCompass`,

      description,

      url: canonicalUrl,

      siteName: "NutriCompass",

      locale: "en_US",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt:
            `${symptom.title} Nutrition Information`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${title} | NutriCompass`,

      description,

      images: [imageUrl],
    },
  };
}

/* =========================================================
   SYMPTOM PAGE
========================================================= */

export default async function SymptomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const symptom = symptoms.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!symptom) {
    return (
      <main className="min-h-screen bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="bg-white rounded-3xl shadow-md p-10 text-center">

            <div className="text-7xl">
              🩺
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Symptom Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              We couldn't find the symptom you're looking for.
            </p>

            <Link
              href="/symptoms"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Browse Symptoms
            </Link>

          </div>

        </div>

      </main>
    );
  }

  /* =======================================================
     URLS
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/symptoms/${symptom.slug}`;

  const imageUrl = symptom.image
    ? symptom.image.startsWith("http")
      ? symptom.image
      : `${SITE_URL}${symptom.image}`
    : `${SITE_URL}/images/symptoms/${symptom.slug}.jpg`;

  /* =======================================================
     RELATED FOODS
  ======================================================= */

  const relatedFoods = foods.filter((food) =>
    symptom.bestFoods.some(
      (foodName) =>
        createSlug(foodName) === food.slug
    )
  );

  /* =======================================================
     RELATED NUTRIENTS
  ======================================================= */

  const relatedNutrients = nutrients.filter(
    (nutrient) =>
      symptom.nutrients.some(
        (nutrientName) =>
          createSlug(nutrientName) ===
          nutrient.slug
      )
  );

  /* =======================================================
     RELATED RECIPES
  ======================================================= */

  const relatedRecipes = recipes.filter((recipe) =>
    recipe.relatedSymptoms.some(
      (relatedSymptom) =>
        createSlug(relatedSymptom) ===
        symptom.slug
    )
  );

  /* =======================================================
     RELATED ARTICLES
  ======================================================= */

  const relatedArticles = articles.filter((article) =>
    article.relatedSymptoms.some(
      (relatedSymptom) =>
        createSlug(relatedSymptom) === symptom.slug
    )
  );

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

        name: "Symptoms",

        item: `${SITE_URL}/symptoms`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: symptom.title,

        item: canonicalUrl,
      },
    ],
  };

  /* =======================================================
     MEDICAL / INFORMATIONAL ARTICLE SCHEMA
     
     We intentionally use Article rather than claiming a
     medical condition-specific schema that the data does
     not establish.
  ======================================================= */

  const symptomSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      `${symptom.title}: Symptoms, Foods & Nutrition`,

    description:
      symptom.overview,

    image: [
      imageUrl,
    ],

    url: canonicalUrl,

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": canonicalUrl,
    },

    author: {
      "@type": "Organization",

      name: "NutriCompass",

      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",

      name: "NutriCompass",

      url: SITE_URL,
    },

    about: {
      "@type": "Thing",

      name: symptom.title,
    },

    keywords: [
      symptom.title,
      `${symptom.title} symptoms`,
      `${symptom.title} foods`,
      `${symptom.title} nutrition`,
      ...symptom.nutrients,
    ].join(", "),
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            symptomSchema
          ),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-6 pt-8">

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
            href="/symptoms"
            className="hover:text-green-700 transition"
          >
            Symptoms
          </Link>

          <span aria-hidden="true">
            →
          </span>

          <span
            className="text-gray-800 font-medium"
            aria-current="page"
          >
            {symptom.title}
          </span>

        </nav>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <SymptomHero
          title={symptom.title}
          description={symptom.shortDescription}
          image={symptom.image}
        />

      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <SymptomOverview
          overview={symptom.overview}
        />

      </section>

      {/* =====================================================
          COMMON SYMPTOMS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Common Symptoms Of {symptom.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {symptom.symptoms.map((item) => (

              <div
                key={item}
                className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-green-700 font-medium"
              >
                ✓ {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          BEST FOODS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="mt-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Best Foods For {symptom.title}
          </h2>

          <p className="text-gray-600 mb-8">
            Explore foods that may provide nutrients relevant to{" "}
            {symptom.title.toLowerCase()}.
          </p>

          <FoodGrid
            names={symptom.bestFoods}
          />

        </div>

      </section>

      {/* =====================================================
          FOODS TO AVOID
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Foods To Limit Or Avoid
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {symptom.avoidFoods.map((food) => (

              <div
                key={food}
                className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-medium text-red-700"
              >
                🚫 {food}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          RECOMMENDED NUTRIENTS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Recommended Nutrients
          </h2>

          <p className="text-gray-600 mb-6">
            Explore nutrients that are relevant to{" "}
            {symptom.title.toLowerCase()}.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {symptom.nutrients.map((nutrient) => {

              const nutrientData = nutrients.find(
                (item) =>
                  createSlug(item.name) ===
                  createSlug(nutrient)
              );

              if (!nutrientData) {

                return (
                  <div
                    key={nutrient}
                    className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center"
                  >

                    <div className="text-3xl mb-2">
                      💊
                    </div>

                    <h3 className="font-semibold text-blue-800">
                      {nutrient}
                    </h3>

                  </div>
                );
              }

              return (
                <Link
                  key={nutrient}
                  href={nutrientLink(nutrient)}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center hover:bg-blue-100 hover:shadow-md transition block"
                >

                  <div className="text-3xl mb-2">
                    💊
                  </div>

                  <h3 className="font-semibold text-blue-800">
                    {nutrientData.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Learn More →
                  </p>

                </Link>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED RECIPES
      ===================================================== */}

      {relatedRecipes.length > 0 && (

        <section className="max-w-6xl mx-auto px-6">

          <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Related Recipes For {symptom.title}
            </h2>

            <p className="text-gray-600 mb-8">
              Explore recipes that include foods and nutrients
              related to {symptom.title.toLowerCase()}.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {relatedRecipes.map((recipe) => (

                <Link
                  key={recipe.slug}
                  href={recipeLink(recipe.name)}
                  className="group bg-orange-50 border border-orange-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
                >

                  <div className="relative h-48 bg-orange-100">

                    <Image
                      src={recipe.image}
                      alt={`${recipe.name} recipe`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                      {recipe.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {recipe.description}
                    </p>

                    <div className="mt-4 text-green-700 font-semibold">
                      View Recipe →
                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          RELATED NUTRITION ARTICLES
      ===================================================== */}

      {relatedArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Related Nutrition Articles About {symptom.title}
            </h2>

            <p className="mt-2 text-gray-600">
              Explore nutrition guides related to {symptom.title.toLowerCase()}
              and the nutrients and foods connected with it.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                  className="group bg-purple-50 border border-purple-200 rounded-2xl p-6 hover:bg-purple-100 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-4xl" aria-hidden="true">
                      📖
                    </div>

                    <span className="text-sm font-semibold text-purple-700">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-green-700 transition">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="mt-4 text-green-700 font-semibold">
                    Read {article.title} →
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          MEDICAL DISCLAIMER
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="mt-10 mb-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">

          <div className="flex gap-4">

            <div className="text-2xl">
              ℹ️
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Important Information
              </h2>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                NutriCompass provides general nutrition information for
                educational purposes. Symptoms can have many possible causes,
                and nutrition information should not be used to diagnose or
                treat a medical condition. Speak with a qualified healthcare
                professional for personalized advice.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BACK TO SYMPTOMS
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-6 py-12">

        <Link
          href="/symptoms"
          className="inline-flex items-center text-green-700 font-semibold hover:underline"
        >
          ← Back To Symptoms
        </Link>

      </div>

    </main>
  );
}