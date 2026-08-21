"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { symptoms } from "@/components/data/symptoms";
import { foods } from "@/components/data/foods";
import { nutrients } from "@/components/data/nutrients";
import { recipes } from "@/components/data/recipes";
import { articles } from "@/components/data/articles";

type SearchResult = {
  title: string;
  description: string;
  type: string;
  href: string;
  icon: string;
  score: number;
};

const filters = [
  "All",
  "Symptoms",
  "Foods",
  "Nutrients",
  "Recipes",
  "Articles",
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);
  const [activeFilter, setActiveFilter] = useState("All");

  /* =========================================================
     SEARCH
  ========================================================= */

  const performSearch = (value: string) => {
    const trimmedValue = value.trim();

    setQuery(value);

    if (!trimmedValue) {
      setActiveFilter("All");
      router.push("/search");
      return;
    }

    router.push(
      `/search?q=${encodeURIComponent(trimmedValue)}`
    );
  };

  /* =========================================================
     CLEAR SEARCH
  ========================================================= */

  const clearSearch = () => {
    setQuery("");
    setActiveFilter("All");
    router.push("/search");
  };

  /* =========================================================
     SEARCH RESULTS
  ========================================================= */

  const allResults = useMemo<SearchResult[]>(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return [];
    }

    /* =======================================================
       SYMPTOMS
    ======================================================= */

    const symptomResults: SearchResult[] = symptoms
      .map((item) => {
        let score = 0;

        if (item.title.toLowerCase() === searchTerm) {
          score += 100;
        } else if (
          item.title.toLowerCase().includes(searchTerm)
        ) {
          score += 80;
        }

        if (
          item.shortDescription
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 30;
        }

        if (
          item.overview
            ?.toLowerCase()
            .includes(searchTerm)
        ) {
          score += 20;
        }

        if (
          item.symptoms?.some((symptom) =>
            symptom.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.bestFoods?.some((food) =>
            food.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.nutrients?.some((nutrient) =>
            nutrient.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        return {
          title: item.title,
          description: item.shortDescription,
          type: "Symptoms",
          href: `/symptoms/${item.slug}`,
          icon: "🩺",
          score,
        };
      })
      .filter((item) => item.score > 0);

    /* =======================================================
       FOODS
    ======================================================= */

    const foodResults: SearchResult[] = foods
      .map((item) => {
        let score = 0;

        if (
          item.name.toLowerCase() === searchTerm
        ) {
          score += 100;
        } else if (
          item.name.toLowerCase().includes(searchTerm)
        ) {
          score += 80;
        }

        if (
          item.description
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 30;
        }

        if (
          item.nutrients.some((nutrient) =>
            nutrient.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.benefits.some((benefit) =>
            benefit.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.relatedSymptoms.some((symptom) =>
            symptom.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        return {
          title: item.name,
          description: item.description,
          type: "Foods",
          href: `/foods/${item.slug}`,
          icon: "🥗",
          score,
        };
      })
      .filter((item) => item.score > 0);

    /* =======================================================
       NUTRIENTS
    ======================================================= */

    const nutrientResults: SearchResult[] = nutrients
      .map((item) => {
        let score = 0;

        if (
          item.name.toLowerCase() === searchTerm
        ) {
          score += 100;
        } else if (
          item.name.toLowerCase().includes(searchTerm)
        ) {
          score += 80;
        }

        if (
          item.description
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 30;
        }

        if (
          item.benefits.some((benefit) =>
            benefit.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.foodSources.some((food) =>
            food.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.deficiencySymptoms.some((symptom) =>
            symptom.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.dailyRequirement
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 10;
        }

        return {
          title: item.name,
          description: item.description,
          type: "Nutrients",
          href: `/nutrients/${item.slug}`,
          icon: "💊",
          score,
        };
      })
      .filter((item) => item.score > 0);

    /* =======================================================
       RECIPES
    ======================================================= */

    const recipeResults: SearchResult[] = recipes
      .map((item) => {
        let score = 0;

        if (
          item.name.toLowerCase() === searchTerm
        ) {
          score += 100;
        } else if (
          item.name.toLowerCase().includes(searchTerm)
        ) {
          score += 80;
        }

        if (
          item.description
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 30;
        }

        if (
          item.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.nutrients.some((nutrient) =>
            nutrient.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.relatedFoods.some((food) =>
            food.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.relatedSymptoms.some((symptom) =>
            symptom.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        return {
          title: item.name,
          description: item.description,
          type: "Recipes",
          href: `/recipes/${item.slug}`,
          icon: "🍽️",
          score,
        };
      })
      .filter((item) => item.score > 0);

    /* =======================================================
       ARTICLES
    ======================================================= */

    const articleResults: SearchResult[] = articles
      .map((item) => {
        let score = 0;

        if (
          item.title.toLowerCase() === searchTerm
        ) {
          score += 100;
        } else if (
          item.title.toLowerCase().includes(searchTerm)
        ) {
          score += 80;
        }

        if (
          item.description
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 30;
        }

        if (
          item.content
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 20;
        }

        if (
          item.category
            .toLowerCase()
            .includes(searchTerm)
        ) {
          score += 15;
        }

        if (
          item.relatedSymptoms.some((symptom) =>
            symptom.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.relatedFoods.some((food) =>
            food.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        if (
          item.relatedNutrients.some((nutrient) =>
            nutrient.toLowerCase().includes(searchTerm)
          )
        ) {
          score += 15;
        }

        return {
          title: item.title,
          description: item.description,
          type: "Articles",
          href: `/articles/${item.slug}`,
          icon: "📖",
          score,
        };
      })
      .filter((item) => item.score > 0);

    /* =======================================================
       COMBINE + SORT
    ======================================================= */

    return [
      ...symptomResults,
      ...foodResults,
      ...nutrientResults,
      ...recipeResults,
      ...articleResults,
    ].sort((a, b) => b.score - a.score);
  }, [query]);

  /* =========================================================
     FILTER RESULTS
  ========================================================= */

  const filteredResults = useMemo(() => {
    if (activeFilter === "All") {
      return allResults;
    }

    return allResults.filter(
      (result) => result.type === activeFilter
    );
  }, [allResults, activeFilter]);

  /* =========================================================
     RESULT COUNTS
  ========================================================= */

  const getFilterCount = (filter: string) => {
    if (filter === "All") {
      return allResults.length;
    }

    return allResults.filter(
      (result) => result.type === filter
    ).length;
  };

  /* =========================================================
     SUGGESTIONS
  ========================================================= */

  const suggestions = [
    "Iron",
    "Spinach",
    "Fatigue",
    "Vitamin C",
    "Healthy Recipes",
  ];

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white">

        <div className="max-w-6xl mx-auto px-6 py-20 text-center">

          <div className="text-6xl mb-6">
            🔎
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Search NutriCompass
          </h1>

          <p className="mt-5 text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
            Discover foods, nutrients, symptoms, recipes, and nutrition
            articles in one place.
          </p>

        </div>

      </section>

      {/* =====================================================
          SEARCH BOX
      ===================================================== */}

      <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">

        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6">

          <form
            onSubmit={(event) => {
              event.preventDefault();
              performSearch(query);
            }}
          >

            <div className="relative">

              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">
                🔎
              </div>

              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);

                  if (!event.target.value.trim()) {
                    setActiveFilter("All");
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    clearSearch();
                  }
                }}
                placeholder="Search for iron, spinach, fatigue, vitamin C..."
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-14 pr-14 py-5 text-lg text-gray-800 placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                autoComplete="off"
                aria-label="Search NutriCompass"
              />

              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition"
                >
                  ×
                </button>
              )}

            </div>

          </form>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* EMPTY STATE */}

        {!query.trim() && (

          <div className="text-center py-16">

            <div className="text-7xl">
              🌱
            </div>

            <h2 className="mt-6 text-3xl font-bold text-gray-800">
              What Are You Looking For?
            </h2>

            <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
              Search for a symptom, food, nutrient, recipe, or article
              to explore NutriCompass.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {suggestions.map((suggestion) => (

                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    setQuery(suggestion);
                    setActiveFilter("All");

                    router.push(
                      `/search?q=${encodeURIComponent(suggestion)}`
                    );
                  }}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition shadow-sm"
                >
                  {suggestion}
                </button>

              ))}

            </div>

          </div>

        )}

        {/* ===================================================
            RESULTS
        =================================================== */}

        {query.trim() && (

          <>

            {/* Results Header */}

            <div className="mb-8">

              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">

                <div>

                  <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                    Search Results
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {filteredResults.length}{" "}
                    {filteredResults.length === 1
                      ? "Result"
                      : "Results"}{" "}
                    Found
                  </h2>

                </div>

                <p className="text-gray-500">
                  Searching for{" "}
                  <span className="font-semibold text-gray-800">
                    "{query}"
                  </span>
                </p>

              </div>

            </div>

            {/* =================================================
                FILTERS
            ================================================= */}

            <div className="mb-10">

              <div className="flex flex-wrap gap-3">

                {filters.map((filter) => {

                  const count = getFilterCount(filter);
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`px-5 py-2.5 rounded-full font-semibold transition border ${
                        isActive
                          ? "bg-green-600 text-white border-green-600 shadow-md"
                          : "bg-white text-gray-700 border-gray-200 hover:border-green-400 hover:text-green-700 hover:bg-green-50"
                      }`}
                    >

                      {filter}

                      <span
                        className={`ml-2 text-sm ${
                          isActive
                            ? "text-green-100"
                            : "text-gray-400"
                        }`}
                      >
                        {count}
                      </span>

                    </button>
                  );

                })}

              </div>

            </div>

            {/* =================================================
                NO RESULTS
            ================================================= */}

            {filteredResults.length === 0 && (

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 text-center py-20 px-6">

                <div className="text-7xl">
                  🤔
                </div>

                <h2 className="mt-6 text-3xl font-bold text-gray-800">
                  No {activeFilter} Found
                </h2>

                <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
                  We couldn't find any{" "}
                  {activeFilter.toLowerCase()} matching
                  {" "}
                  "{query}".
                </p>

                <button
                  type="button"
                  onClick={() => setActiveFilter("All")}
                  className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Show All Results
                </button>

              </div>

            )}

            {/* =================================================
                RESULT CARDS
            ================================================= */}

            {filteredResults.length > 0 && (

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredResults.map((result) => (

                  <Link
                    key={`${result.type}-${result.href}`}
                    href={result.href}
                    className="group"
                  >

                    <article className="h-full bg-white rounded-3xl border border-gray-100 shadow-md p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                      <div className="flex items-start justify-between gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
                          {result.icon}
                        </div>

                        <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold">
                          {result.type}
                        </span>

                      </div>

                      <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                        {result.title}
                      </h3>

                      <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
                        {result.description}
                      </p>

                      <div className="mt-6 flex items-center text-green-700 font-semibold">

                        Explore

                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                          →
                        </span>

                      </div>

                    </article>

                  </Link>

                ))}

              </div>

            )}

          </>

        )}

      </section>

    </main>
  );
}