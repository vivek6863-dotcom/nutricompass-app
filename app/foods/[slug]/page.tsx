import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { foods } from "@/components/data/foods";
import { symptoms } from "@/components/data/symptoms";
import { nutrients } from "@/components/data/nutrients";
import { recipes } from "@/components/data/recipes";
import { articles } from "@/components/data/articles";

import {
  createSlug,
  symptomLink,
  nutrientLink,
  recipeLink,
  articleLink,
} from "@/lib/links";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.com";

/* =========================================================
   DYNAMIC SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const food = foods.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!food) {
    return {
      title: "Food Not Found | NutriCompass",

      description:
        "The requested food could not be found on NutriCompass.",

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
    `${food.name}: Benefits, Nutrients & Nutrition Information`;

  /* =======================================================
     SEO DESCRIPTION
  ======================================================= */

  const description =
    `Learn about ${food.name} benefits, key nutrients, nutrition information and healthy ways to include it in your diet. Explore ${food.name} with NutriCompass.`;

  /* =======================================================
     IMAGE
  ======================================================= */

  const imageUrl = food.image
    ? food.image.startsWith("http")
      ? food.image
      : `${SITE_URL}${food.image}`
    : `${SITE_URL}/images/foods/${food.slug}.jpg`;

  /* =======================================================
     CANONICAL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/foods/${food.slug}`;

  return {
    title,

    description,

    keywords: [
      food.name,
      `${food.name} benefits`,
      `${food.name} nutrition`,
      `${food.name} nutrients`,
      `health benefits of ${food.name}`,
      `foods rich in ${food.name}`,
      "healthy foods",
      "nutrition",
      ...food.nutrients,
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
            `${food.name} Nutrition And Health Benefits`,
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
   FOOD DETAIL PAGE
========================================================= */

export default async function FoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const food = foods.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!food) {
    return (
      <main className="min-h-screen bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="bg-white rounded-3xl shadow-md p-10 text-center">

            <div className="text-7xl">
              🥗
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Food Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              We couldn't find the food you're looking for.
            </p>

            <Link
              href="/foods"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Browse Foods
            </Link>

          </div>

        </div>

      </main>
    );
  }

  /* =======================================================
     CANONICAL + IMAGE URL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/foods/${food.slug}`;

  const imageUrl = food.image
    ? food.image.startsWith("http")
      ? food.image
      : `${SITE_URL}${food.image}`
    : `${SITE_URL}/images/foods/${food.slug}.jpg`;

  /* =======================================================
     RELATED SYMPTOMS
  ======================================================= */

  const relatedSymptoms = symptoms.filter((symptom) =>
    food.relatedSymptoms.some(
      (related) =>
        createSlug(related) === symptom.slug
    )
  );

  /* =======================================================
     RELATED NUTRIENTS
  ======================================================= */

  const relatedNutrients = nutrients.filter((nutrient) =>
    food.nutrients.some(
      (related) =>
        createSlug(related) === nutrient.slug
    )
  );

  /* =======================================================
     RELATED RECIPES
  ======================================================= */

  const relatedRecipes = recipes.filter((recipe) =>
    recipe.relatedFoods.some(
      (relatedFood) =>
        createSlug(relatedFood) === food.slug
    )
  );

  /* =======================================================
     RELATED ARTICLES
  ======================================================= */

  const relatedArticles = articles.filter(
    (article) =>
      article.relatedFoods.some(
        (relatedFood) =>
          createSlug(relatedFood) === food.slug
      ) ||
      article.relatedNutrients.some((relatedNutrient) =>
        food.nutrients.some(
          (foodNutrient) =>
            createSlug(foodNutrient) ===
            createSlug(relatedNutrient)
        )
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

        name: "Foods",

        item: `${SITE_URL}/foods`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: food.name,

        item: canonicalUrl,
      },
    ],
  };

  /* =======================================================
     FOOD ARTICLE STRUCTURED DATA
     
     There is no standard Schema.org "Food" page type
     suitable for all of these fields, so we use Article
     + about/Thing rather than inventing unsupported
     nutrition values.
  ======================================================= */

  const foodSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      `${food.name}: Benefits, Nutrients & Nutrition Information`,

    description: food.description,

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

      name: food.name,
    },

    keywords: [
      food.name,
      `${food.name} benefits`,
      `${food.name} nutrition`,
      `${food.name} nutrients`,
      ...food.nutrients,
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
            foodSchema
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
            href="/foods"
            className="hover:text-green-700 transition"
          >
            Foods
          </Link>

          <span aria-hidden="true">
            →
          </span>

          <span
            className="text-gray-800 font-medium"
            aria-current="page"
          >
            {food.name}
          </span>

        </nav>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* =================================================
                FOOD IMAGE
            ================================================= */}

            <div className="relative min-h-[350px] md:min-h-[450px] bg-gradient-to-br from-green-50 to-green-100">

              {food.image ? (

                <Image
                  src={food.image}
                  alt={`${food.name} Nutrition And Health Benefits`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover p-8"
                />

              ) : (

                <div className="h-full min-h-[350px] flex items-center justify-center">

                  <div className="text-9xl">
                    🥗
                  </div>

                </div>

              )}

            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="p-8 md:p-12 flex flex-col justify-center">

              <div className="inline-flex self-start items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                🥗 Healthy Food
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-green-700">
                {food.name}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
                {food.description}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          KEY NUTRIENTS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Key Nutrients In {food.name}
          </h2>

          <p className="mt-2 text-gray-600">
            Important nutrients found in {food.name}.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">

            {food.nutrients.map((nutrientName) => {

              const nutrient = nutrients.find(
                (item) =>
                  createSlug(item.name) ===
                  createSlug(nutrientName)
              );

              if (!nutrient) {

                return (
                  <div
                    key={nutrientName}
                    className="bg-green-50 border border-green-200 rounded-2xl p-5"
                  >

                    <div className="text-3xl">
                      💊
                    </div>

                    <div className="mt-3 font-semibold text-green-700">
                      {nutrientName}
                    </div>

                  </div>
                );

              }

              return (
                <Link
                  key={nutrient.name}
                  href={nutrientLink(nutrient.name)}
                  className="group bg-green-50 border border-green-200 rounded-2xl p-5 hover:bg-green-100 hover:shadow-md transition"
                >

                  <div className="text-3xl">
                    💊
                  </div>

                  <div className="mt-3 font-semibold text-green-700 group-hover:underline">
                    {nutrient.name}
                  </div>

                  <div className="mt-1 text-sm text-gray-600">
                    Learn About {nutrient.name} →
                  </div>

                </Link>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          HEALTH BENEFITS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Health Benefits Of {food.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            {food.benefits.map((benefit) => (

              <div
                key={benefit}
                className="bg-blue-50 border border-blue-200 rounded-2xl p-5"
              >

                <span className="mr-2">
                  ✅
                </span>

                <span className="text-gray-800">
                  {benefit}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED SYMPTOMS
      ===================================================== */}

      {relatedSymptoms.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Nutrition-Related Symptoms
            </h2>

            <p className="mt-2 text-gray-600">
              Explore nutrition topics related to {food.name}.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">

              {relatedSymptoms.map((symptom) => (

                <Link
                  key={symptom.slug}
                  href={symptomLink(symptom.title)}
                  className="group bg-red-50 border border-red-200 rounded-2xl p-5 hover:bg-red-100 hover:shadow-md transition"
                >

                  <div className="text-3xl">
                    🩺
                  </div>

                  <h3 className="mt-3 font-bold text-gray-800 group-hover:text-green-700">
                    {symptom.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {symptom.shortDescription}
                  </p>

                  <div className="mt-3 text-green-700 font-semibold text-sm">
                    Learn More →
                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          RELATED RECIPES
      ===================================================== */}

      {relatedRecipes.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Healthy Recipes Using {food.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              {relatedRecipes.map((recipe) => (

                <Link
                  key={recipe.slug}
                  href={recipeLink(recipe.name)}
                  className="group bg-orange-50 border border-orange-200 rounded-2xl p-6 hover:bg-orange-100 hover:shadow-md transition"
                >

                  <div className="text-4xl">
                    🍽️
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-green-700">
                    {recipe.name}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {recipe.description}
                  </p>

                  <div className="mt-4 text-green-700 font-semibold">
                    View Recipe →
                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          RELATED ARTICLES
      ===================================================== */}

      {relatedArticles.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Related Articles About {food.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              {relatedArticles.map((article) => (

                <Link
                  key={article.slug}
                  href={articleLink(article.title)}
                  className="group bg-purple-50 border border-purple-200 rounded-2xl p-6 hover:bg-purple-100 hover:shadow-md transition"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div className="text-4xl">
                      📖
                    </div>

                    <span className="text-sm font-semibold text-purple-700">
                      {article.category}
                    </span>

                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-green-700">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {article.description}
                  </p>

                  <div className="mt-4 text-green-700 font-semibold">
                    Read Article →
                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          IMPORTANT INFORMATION
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">

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
                educational purposes. Individual nutritional needs can vary,
                and food information should not be used to diagnose or treat
                a medical condition. Speak with a qualified healthcare
                professional for personalized advice.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BACK TO FOODS
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-6 py-12">

        <Link
          href="/foods"
          className="inline-flex items-center text-green-700 font-semibold hover:underline"
        >
          ← Back To Foods
        </Link>

      </div>

    </main>
  );
}