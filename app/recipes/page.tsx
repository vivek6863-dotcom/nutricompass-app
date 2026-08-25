import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { recipes } from "@/components/data/recipes";

export const metadata: Metadata = {
  title: "Healthy Recipes | NutriCompass",
  description:
    "Explore nutritious recipes made with wholesome foods. Discover recipe ingredients, preparation times, servings, and key nutrients with NutriCompass.",

  alternates: {
    canonical: "/recipes",
  },

  openGraph: {
    type: "website",
    url: "https://nutricompass.in/recipes",
    siteName: "NutriCompass",
    title: "Healthy Recipes | NutriCompass",
    description:
      "Explore nutritious recipes made with wholesome foods and discover their key nutrients and preparation details.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthy Recipes | NutriCompass",
    description:
      "Explore nutritious recipes made with wholesome foods and discover their key nutrients and preparation details.",
  },
};

const recipeCollectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Healthy Recipes",
  url: "https://nutricompass.in/recipes",
  description:
    "Explore nutritious recipes made with wholesome foods and discover their key nutrients and preparation details.",
  isPartOf: {
    "@type": "WebSite",
    name: "NutriCompass",
    url: "https://nutricompass.in/",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: recipes.map((recipe, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: recipe.name,
      url: `https://nutricompass.in/recipes/${recipe.slug}`,
    })),
  },
};

export default function RecipesPage() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(recipeCollectionStructuredData),
        }}
      />

      <main className="min-h-screen bg-gray-50">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

          <div className="max-w-7xl mx-auto px-6 py-20 text-center">

            <div
              className="text-6xl"
              aria-hidden="true"
            >
              🍽️
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold">
              Healthy Recipes
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-green-50 leading-8">
              Discover nutritious recipes made with wholesome foods and
              learn about their preparation time, servings, and key nutrients.
            </p>

          </div>

        </section>

        {/* =====================================================
            RECIPE LIBRARY
        ===================================================== */}

        <section
          aria-labelledby="recipe-library"
          className="max-w-7xl mx-auto px-6 py-16"
        >

          {/* Section Heading */}

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold uppercase tracking-wide">
              Explore Our Recipe Library
            </p>

            <h2
              id="recipe-library"
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            >
              Nutritious Recipes For Everyday Eating
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 leading-8">
              Browse simple recipes and discover the foods and nutrients
              included in each dish.
            </p>

          </div>

          {/* =================================================
              RECIPE GRID
          ================================================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {recipes.map((recipe) => (

              <Link
                key={recipe.id}
                href={`/recipes/${recipe.slug}`}
                aria-label={`View ${recipe.name} recipe`}
                className="group"
              >

                <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                  {/* =================================================
                      RECIPE IMAGE
                  ================================================= */}

                  <div className="relative h-60 bg-green-50 overflow-hidden">

                    <Image
                      src={recipe.image}
                      alt={`${recipe.name} - Healthy Recipe`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-7">

                    {/* Recipe Name */}

                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition leading-tight">
                      {recipe.name}
                    </h2>

                    {/* Description */}

                    <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
                      {recipe.description}
                    </p>

                    {/* =================================================
                        RECIPE DETAILS
                    ================================================= */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                        ⏱️ Prep: {recipe.prepTime}
                      </span>

                      <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                        🔥 Cook: {recipe.cookTime}
                      </span>

                      <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                        👥 {recipe.servings} Servings
                      </span>

                    </div>

                    {/* =================================================
                        KEY NUTRIENTS
                    ================================================= */}

                    <div className="mt-6">

                      <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        Key Nutrients
                      </h3>

                      <div className="flex flex-wrap gap-2">

                        {recipe.nutrients.map((nutrient) => (

                          <span
                            key={nutrient}
                            className="bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm"
                          >
                            {nutrient}
                          </span>

                        ))}

                      </div>

                    </div>

                    {/* =================================================
                        CTA
                    ================================================= */}

                    <div className="mt-7 pt-5 border-t border-gray-100">

                      <span className="text-green-700 font-semibold group-hover:underline">
                        View {recipe.name} Recipe →
                      </span>

                    </div>

                  </div>

                </article>

              </Link>

            ))}

          </div>

        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="bg-green-700 rounded-3xl p-10 md:p-14 text-center text-white">

            <div
              className="text-5xl"
              aria-hidden="true"
            >
              🥗
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold">
              Discover The Foods Behind Your Recipes
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-green-50 text-lg leading-8">
              Explore the nutritional information behind common foods and
              discover their key nutrients and related nutrition topics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

              <Link
                href="/foods"
                className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Explore Healthy Foods →
              </Link>

              <Link
                href="/nutrients"
                className="border border-white/60 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Explore Nutrients →
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}