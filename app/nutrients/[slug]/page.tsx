import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { nutrients } from "@/components/data/nutrients";
import { foods } from "@/components/data/foods";
import { symptoms } from "@/components/data/symptoms";
import { recipes } from "@/components/data/recipes";

import {
  createSlug,
  foodLink,
  symptomLink,
  recipeLink,
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

  const nutrient = nutrients.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!nutrient) {
    return {
      title: "Nutrient Not Found | NutriCompass",

      description:
        "The requested nutrient could not be found on NutriCompass.",

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
    `${nutrient.name}: Benefits, Food Sources & Daily Requirement`;

  /* =======================================================
     SEO DESCRIPTION
  ======================================================= */

  const description =
    `Learn about ${nutrient.name} benefits, food sources, deficiency symptoms and daily requirements. Explore practical nutrition information from NutriCompass.`;

  /* =======================================================
     CANONICAL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/nutrients/${nutrient.slug}`;

  /* =======================================================
     IMAGE
  ======================================================= */

  const imageUrl =
    `${SITE_URL}/images/nutrients/${nutrient.slug}.jpg`;

  return {
    title,

    description,

    keywords: [
      nutrient.name,
      `${nutrient.name} benefits`,
      `${nutrient.name} food sources`,
      `${nutrient.name} deficiency`,
      `${nutrient.name} daily requirement`,
      `foods rich in ${nutrient.name}`,
      "nutrition",
      "healthy foods",
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
        `${nutrient.name}: Benefits, Food Sources & Daily Requirement | NutriCompass`,

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
            `${nutrient.name} Benefits And Food Sources`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${nutrient.name}: Benefits, Food Sources & Daily Requirement`,

      description,

      images: [imageUrl],
    },
  };
}

/* =========================================================
   NUTRIENT DETAIL PAGE
========================================================= */

export default async function NutrientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const nutrient = nutrients.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!nutrient) {
    return (
      <main className="min-h-screen bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="bg-white rounded-3xl shadow-md p-10 text-center">

            <div className="text-7xl">
              💊
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Nutrient Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              We couldn't find the nutrient you're looking for.
            </p>

            <Link
              href="/nutrients"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Browse Nutrients
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
    `${SITE_URL}/nutrients/${nutrient.slug}`;

  const imageUrl =
    `${SITE_URL}/images/nutrients/${nutrient.slug}.jpg`;

  /* =======================================================
     RELATED FOODS
  ======================================================= */

  const relatedFoods = foods.filter((food) =>
    food.nutrients.some(
      (foodNutrient) =>
        createSlug(foodNutrient) === nutrient.slug
    )
  );

  /* =======================================================
     RELATED SYMPTOMS
  ======================================================= */

  const relatedSymptoms = symptoms.filter((symptom) =>
    symptom.nutrients.some(
      (symptomNutrient) =>
        createSlug(symptomNutrient) === nutrient.slug
    )
  );

  /* =======================================================
     RELATED RECIPES
  ======================================================= */

  const relatedRecipes = recipes.filter((recipe) =>
    recipe.nutrients.some(
      (recipeNutrient) =>
        createSlug(recipeNutrient) === nutrient.slug
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

        name: "Nutrients",

        item: `${SITE_URL}/nutrients`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: nutrient.name,

        item: canonicalUrl,
      },
    ],
  };

  /* =======================================================
     ARTICLE STRUCTURED DATA
  ======================================================= */

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      `${nutrient.name}: Benefits, Food Sources & Daily Requirement`,

    description: nutrient.description,

    image: [imageUrl],

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": canonicalUrl,
    },

    url: canonicalUrl,

    publisher: {
      "@type": "Organization",

      name: "NutriCompass",

      url: SITE_URL,
    },

    about: {
      "@type": "Thing",

      name: nutrient.name,
    },

    keywords: [
      nutrient.name,
      `${nutrient.name} benefits`,
      `${nutrient.name} food sources`,
      `${nutrient.name} deficiency`,
      `${nutrient.name} daily requirement`,
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
            articleSchema
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
            href="/nutrients"
            className="hover:text-green-700 transition"
          >
            Nutrients
          </Link>

          <span aria-hidden="true">
            →
          </span>

          <span
            className="text-gray-800 font-medium"
            aria-current="page"
          >
            {nutrient.name}
          </span>

        </nav>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* IMAGE */}

            <div className="relative min-h-[320px] md:min-h-[450px] bg-green-50">

              <Image
                src={`/images/nutrients/${nutrient.slug}.jpg`}
                alt={`${nutrient.name} Nutrition`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

            {/* CONTENT */}

            <div className="p-8 md:p-12 flex flex-col justify-center">

              <div className="inline-flex w-fit items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                💊 Essential Nutrient
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-green-700">
                {nutrient.name}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
                {nutrient.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="bg-green-50 border border-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  🥗 Nutrition Guide
                </span>

                <span className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  📊 Daily Requirement
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUICK NUTRITION OVERVIEW
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-4">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Quick Nutrition Overview
          </h2>

          <p className="mt-2 text-gray-600">
            A quick look at the key nutrition information for{" "}
            {nutrient.name}.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

            {/* DAILY REQUIREMENT */}

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

              <div className="text-3xl">
                📊
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Daily Requirement
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                {nutrient.dailyRequirement}
              </p>

            </div>

            {/* FOOD SOURCES */}

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

              <div className="text-3xl">
                🥗
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Food Sources
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                {nutrient.foodSources.length} Food Sources
              </p>

            </div>

            {/* BENEFITS */}

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">

              <div className="text-3xl">
                💚
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Key Benefits
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                {nutrient.benefits.length} Key Benefits
              </p>

            </div>

            {/* DEFICIENCY */}

            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">

              <div className="text-3xl">
                ⚠️
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Deficiency Symptoms
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                {nutrient.deficiencySymptoms.length} Symptoms
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Benefits Of {nutrient.name}
          </h2>

          <p className="mt-2 text-gray-600">
            How {nutrient.name} supports normal health and nutrition.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            {nutrient.benefits.map((benefit) => (

              <div
                key={benefit}
                className="bg-green-50 border border-green-100 rounded-2xl p-6 hover:bg-green-100 hover:shadow-md transition"
              >

                <div className="flex items-start gap-4">

                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg">
                    ✓
                  </div>

                  <p className="text-gray-800 font-medium leading-7 pt-1">
                    {benefit}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          BEST FOOD SOURCES
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                Best Food Sources Of {nutrient.name}
              </h2>

              <p className="mt-2 text-gray-600">
                Explore foods that can provide {nutrient.name}.
              </p>

            </div>

            <Link
              href="/foods"
              className="text-green-700 font-semibold hover:underline"
            >
              View All Foods →
            </Link>

          </div>

          {relatedFoods.length > 0 ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

              {relatedFoods.map((food) => (

                <Link
                  key={food.slug}
                  href={foodLink(food.name)}
                  className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
                >

                  <div className="relative h-48 bg-green-50 overflow-hidden">

                    <Image
                      src={food.image}
                      alt={`${food.name} - source of ${nutrient.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                      {food.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {food.description}
                    </p>

                    <div className="mt-4 text-green-700 font-semibold text-sm">
                      Explore Food →
                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="mt-8 bg-gray-50 rounded-2xl p-8 text-center">

              <p className="text-gray-600">
                Food sources will be added soon.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          DEFICIENCY SYMPTOMS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Deficiency Symptoms Of {nutrient.name}
          </h2>

          <p className="mt-2 text-gray-600">
            Symptoms that may be associated with inadequate{" "}
            {nutrient.name} intake.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

            {nutrient.deficiencySymptoms.map((symptom) => {

              const matchingSymptom = symptoms.find(
                (item) =>
                  createSlug(item.title) ===
                  createSlug(symptom)
              );

              if (matchingSymptom) {

                return (
                  <Link
                    key={symptom}
                    href={symptomLink(matchingSymptom.title)}
                    className="group bg-red-50 border border-red-100 rounded-2xl p-5 hover:bg-red-100 hover:shadow-md transition"
                  >

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">
                        🩺
                      </div>

                      <span className="font-semibold text-gray-800 group-hover:text-green-700">
                        {symptom}
                      </span>

                    </div>

                    <p className="mt-4 text-sm text-red-700 font-medium">
                      Explore Topic →
                    </p>

                  </Link>
                );

              }

              return (
                <div
                  key={symptom}
                  className="bg-red-50 border border-red-100 rounded-2xl p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">
                      ⚠️
                    </div>

                    <span className="font-semibold text-gray-800">
                      {symptom}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          DAILY REQUIREMENT
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 rounded-3xl p-8 shadow-md">

          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">

            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-4xl">
              📊
            </div>

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                Recommended Daily Intake
              </h2>

              <p className="mt-3 text-xl text-green-700 font-bold">
                {nutrient.dailyRequirement}
              </p>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                Individual requirements can vary based on age, sex,
                life stage, and other factors.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED RECIPES
      ===================================================== */}

      {relatedRecipes.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Recipes With {nutrient.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  Discover recipes that provide {nutrient.name}.
                </p>

              </div>

              <Link
                href="/recipes"
                className="text-green-700 font-semibold hover:underline"
              >
                View All Recipes →
              </Link>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

              {relatedRecipes.map((recipe) => (

                <Link
                  key={recipe.slug}
                  href={recipeLink(recipe.name)}
                  className="group bg-orange-50 border border-orange-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
                >

                  <div className="relative h-48 bg-orange-100 overflow-hidden">

                    <Image
                      src={recipe.image}
                      alt={`${recipe.name} recipe`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                      {recipe.name}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-7 line-clamp-3">
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
          RELATED NUTRITION TOPICS
      ===================================================== */}

      {relatedSymptoms.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Related Nutrition Topics
            </h2>

            <p className="mt-2 text-gray-600">
              Explore nutrition-related topics connected with{" "}
              {nutrient.name}.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

              {relatedSymptoms.map((symptom) => (

                <Link
                  key={symptom.slug}
                  href={symptomLink(symptom.title)}
                  className="group bg-green-50 border border-green-100 rounded-2xl p-6 hover:bg-green-100 hover:shadow-md transition"
                >

                  <div className="text-3xl">
                    🩺
                  </div>

                  <h3 className="mt-4 font-bold text-gray-900 group-hover:text-green-700">
                    {symptom.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-6">
                    {symptom.shortDescription}
                  </p>

                  <div className="mt-4 text-green-700 font-semibold text-sm">
                    Explore Topic →
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

      <section className="max-w-6xl mx-auto px-6 mt-10 pb-4">

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
                educational purposes. Nutrient requirements can vary between
                individuals, and this information should not be used to
                diagnose or treat a medical condition. Speak with a qualified
                healthcare professional for personalized advice.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BACK TO NUTRIENTS
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-6 py-12">

        <Link
          href="/nutrients"
          className="inline-flex items-center text-green-700 font-semibold hover:underline"
        >
          ← Back To Nutrients
        </Link>

      </div>

    </main>
  );
}