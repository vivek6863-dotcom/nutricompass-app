import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { recipes } from "@/components/data/recipes";
import { foods } from "@/components/data/foods";
import { symptoms } from "@/components/data/symptoms";

import {
  createSlug,
  foodLink,
  symptomLink,
} from "@/lib/links";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.com";

/* =========================================================
   HELPER
   Convert "10 Minutes" → "PT10M"
   Convert "1 Hour" → "PT1H"
========================================================= */

function convertTimeToISO(time: string): string {
  const value = time.toLowerCase().trim();

  const hoursMatch = value.match(/(\d+(?:\.\d+)?)\s*hour/);
  const minutesMatch = value.match(/(\d+(?:\.\d+)?)\s*minute/);

  let hours = 0;
  let minutes = 0;

  if (hoursMatch) {
    hours = Number(hoursMatch[1]);
  }

  if (minutesMatch) {
    minutes = Number(minutesMatch[1]);
  }

  if (hours === 0 && minutes === 0) {
    return "PT0M";
  }

  return `PT${hours > 0 ? `${hours}H` : ""}${
    minutes > 0 ? `${minutes}M` : ""
  }`;
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

  const recipe = recipes.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!recipe) {
    return {
      title: "Recipe Not Found | NutriCompass",

      description:
        "The requested recipe could not be found on NutriCompass.",

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
    `${recipe.name}: Healthy Recipe & Nutrition`;

  /* =======================================================
     SEO DESCRIPTION
  ======================================================= */

  const description =
    `${recipe.description} Learn the ingredients, preparation method, key nutrients, and related nutrition information on NutriCompass.`;

  /* =======================================================
     CANONICAL
  ======================================================= */

  const canonicalUrl =
    `${SITE_URL}/recipes/${recipe.slug}`;

  /* =======================================================
     IMAGE
  ======================================================= */

  const imageUrl =
    recipe.image.startsWith("http")
      ? recipe.image
      : `${SITE_URL}${recipe.image}`;

  return {
    title,

    description,

    keywords: [
      recipe.name,
      `${recipe.name} recipe`,
      `${recipe.name} nutrition`,
      `healthy ${recipe.name}`,
      "healthy recipes",
      "nutritious recipes",
      ...recipe.nutrients,
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
        `${recipe.name}: Healthy Recipe & Nutrition | NutriCompass`,

      description,

      url: canonicalUrl,

      siteName: "NutriCompass",

      locale: "en_US",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: `${recipe.name} Healthy Recipe`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${recipe.name}: Healthy Recipe & Nutrition`,

      description,

      images: [imageUrl],
    },
  };
}

/* =========================================================
   RECIPE PAGE
========================================================= */

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const recipe = recipes.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     RECIPE NOT FOUND
  ======================================================= */

  if (!recipe) {
    return (
      <main className="min-h-screen bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="bg-white rounded-3xl shadow-md p-10 text-center">

            <div className="text-7xl">
              🍲
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Recipe Not Found
            </h1>

            <p className="mt-4 text-gray-600">
              We couldn't find the recipe you're looking for.
            </p>

            <Link
              href="/recipes"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Browse Recipes
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
    `${SITE_URL}/recipes/${recipe.slug}`;

  const imageUrl =
    recipe.image.startsWith("http")
      ? recipe.image
      : `${SITE_URL}${recipe.image}`;

  /* =======================================================
     RELATED FOODS
  ======================================================= */

  const relatedFoods = foods.filter((food) =>
    recipe.relatedFoods.some(
      (relatedFood) =>
        createSlug(relatedFood) ===
        createSlug(food.name)
    )
  );

  /* =======================================================
     RELATED SYMPTOMS
  ======================================================= */

  const relatedSymptoms = symptoms.filter((symptom) =>
    recipe.relatedSymptoms.some(
      (relatedSymptom) =>
        createSlug(relatedSymptom) ===
        createSlug(symptom.title)
    )
  );

  /* =======================================================
     TIME VALUES
  ======================================================= */

  const prepTimeISO =
    convertTimeToISO(recipe.prepTime);

  const cookTimeISO =
    convertTimeToISO(recipe.cookTime);

  /* =======================================================
     TOTAL TIME
  ======================================================= */

  const totalMinutes =
    Number(
      recipe.prepTime.match(/\d+/)?.[0] || 0
    ) +
    Number(
      recipe.cookTime.match(/\d+/)?.[0] || 0
    );

  const totalTimeISO =
    `PT${totalMinutes}M`;

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

        name: "Recipes",

        item: `${SITE_URL}/recipes`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: recipe.name,

        item: canonicalUrl,
      },
    ],
  };

  /* =======================================================
     RECIPE STRUCTURED DATA
  ======================================================= */

  const recipeSchema = {
    "@context": "https://schema.org",

    "@type": "Recipe",

    name: recipe.name,

    description: recipe.description,

    image: [
      imageUrl,
    ],

    url: canonicalUrl,

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

    prepTime: prepTimeISO,

    cookTime: cookTimeISO,

    totalTime: totalTimeISO,

    recipeYield:
      `${recipe.servings} Servings`,

    recipeCategory:
      "Healthy Recipe",

    recipeCuisine:
      "Healthy",

    recipeIngredient:
      recipe.ingredients,

    recipeInstructions:
      recipe.instructions.map(
        (instruction, index) => ({
          "@type": "HowToStep",

          position: index + 1,

          text: instruction,
        })
      ),

    keywords: [
      recipe.name,
      "healthy recipe",
      "nutritious recipe",
      ...recipe.nutrients,
    ].join(", "),

    isAccessibleForFree: true,
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
            recipeSchema
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
            href="/recipes"
            className="hover:text-green-700 transition"
          >
            Recipes
          </Link>

          <span aria-hidden="true">
            →
          </span>

          <span
            className="text-gray-800 font-medium"
            aria-current="page"
          >
            {recipe.name}
          </span>

        </nav>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

          {/* RECIPE IMAGE */}

          <div className="relative w-full aspect-[3/2] bg-green-50">

            <Image
              src={recipe.image}
              alt={`${recipe.name} Healthy Recipe`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />

          </div>

          {/* RECIPE INFORMATION */}

          <div className="p-8 md:p-12">

            <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              🍽️ Healthy Recipe
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
              {recipe.name}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-8 max-w-4xl">
              {recipe.description}
            </p>

            {/* RECIPE DETAILS */}

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                ⏱️ Prep: {recipe.prepTime}
              </span>

              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                🔥 Cook: {recipe.cookTime}
              </span>

              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                👥 {recipe.servings} Servings
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INGREDIENTS + INSTRUCTIONS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* INGREDIENTS */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Ingredients
            </h2>

            <p className="mt-2 text-gray-600">
              Ingredients needed to prepare this recipe.
            </p>

            <ul className="mt-8 space-y-4">

              {recipe.ingredients.map(
                (ingredient, index) => (

                  <li
                    key={ingredient}
                    className="flex items-start gap-4 bg-green-50 border border-green-100 rounded-xl p-4"
                  >

                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>

                    <span className="text-gray-700 pt-1">
                      {ingredient}
                    </span>

                  </li>

                )
              )}

            </ul>

          </div>

          {/* INSTRUCTIONS */}

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              How To Prepare
            </h2>

            <p className="mt-2 text-gray-600">
              Follow these simple steps to prepare the recipe.
            </p>

            <ol className="mt-8 space-y-5">

              {recipe.instructions.map(
                (instruction, index) => (

                  <li
                    key={instruction}
                    className="flex items-start gap-4"
                  >

                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </span>

                    <p className="text-gray-700 leading-7 pt-1">
                      {instruction}
                    </p>

                  </li>

                )
              )}

            </ol>

          </div>

        </div>

      </section>

      {/* =====================================================
          KEY NUTRIENTS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Key Nutrients
          </h2>

          <p className="mt-2 text-gray-600">
            Important nutrients provided by this recipe.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            {recipe.nutrients.map(
              (nutrient) => (

                <Link
                  key={nutrient}
                  href={`/nutrients/${createSlug(nutrient)}`}
                  className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition"
                >
                  💊 {nutrient}
                </Link>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED FOODS
      ===================================================== */}

      {relatedFoods.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Related Foods
                </h2>

                <p className="mt-2 text-gray-600">
                  Explore the nutritious foods used in or related to this recipe.
                </p>

              </div>

              <Link
                href="/foods"
                className="text-green-700 font-semibold hover:underline"
              >
                View All Foods →
              </Link>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

              {relatedFoods.map(
                (food) => (

                  <Link
                    key={food.slug}
                    href={foodLink(food.name)}
                    className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
                  >

                    <div className="relative w-full aspect-[3/2] bg-green-50">

                      <Image
                        src={food.image}
                        alt={`${food.name} related to ${recipe.name}`}
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

                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          RELATED SYMPTOMS
      ===================================================== */}

      {relatedSymptoms.length > 0 && (

        <section className="max-w-6xl mx-auto px-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Related Nutrition Topics
            </h2>

            <p className="mt-2 text-gray-600">
              Explore nutrition-related topics associated with this recipe.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

              {relatedSymptoms.map(
                (symptom) => (

                  <Link
                    key={symptom.slug}
                    href={symptomLink(symptom.title)}
                    className="group bg-green-50 border border-green-100 rounded-2xl p-5 hover:bg-green-100 hover:shadow-md transition"
                  >

                    <div className="text-3xl">
                      🩺
                    </div>

                    <h3 className="mt-3 font-bold text-gray-900 group-hover:text-green-700">
                      {symptom.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                      {symptom.shortDescription}
                    </p>

                    <div className="mt-4 text-green-700 font-semibold text-sm">
                      Explore Topic →
                    </div>

                  </Link>

                )
              )}

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
                educational purposes. Recipes are provided as general
                nutritional suggestions and may not be suitable for everyone.
                Individual dietary needs can vary. Speak with a qualified
                healthcare professional or registered dietitian for
                personalized advice.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BACK TO RECIPES
      ===================================================== */}

      <div className="max-w-6xl mx-auto px-6 py-12">

        <Link
          href="/recipes"
          className="inline-flex items-center text-green-700 font-semibold hover:underline"
        >
          ← Back To Recipes
        </Link>

      </div>

    </main>
  );
}