import Image from "next/image";
import Link from "next/link";

import { foods } from "@/components/data/foods";

export default function FoodsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <div className="text-6xl">
            🥗
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Healthy Foods
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-green-50 leading-8">
            Explore nutrient-rich foods and discover their key nutrients,
            health benefits, and related nutrition topics.
          </p>

        </div>

      </section>

      {/* =====================================================
          FOODS
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Explore Our Food Library
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Discover Healthy Foods
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Learn how different foods can contribute to a balanced diet.
          </p>

        </div>

        {/* Food Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {foods.map((food) => (

            <Link
              key={food.id}
              href={`/foods/${food.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* =================================================
                  FOOD IMAGE
              ================================================= */}

              <div className="relative h-64 bg-green-50 overflow-hidden">

                <Image
                  src={food.image}
                  alt={`${food.name} - Healthy Food`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="p-7">

                <div className="flex items-center justify-between gap-3">

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition">
                    {food.name}
                  </h3>

                  <span className="shrink-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Healthy Food
                  </span>

                </div>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
                  {food.description}
                </p>

                {/* Nutrients */}

                <div className="mt-5">

                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    Key Nutrients
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {food.nutrients.map((nutrient) => (

                      <span
                        key={nutrient}
                        className="bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm"
                      >
                        💊 {nutrient}
                      </span>

                    ))}

                  </div>

                </div>

                {/* Benefits */}

                <div className="mt-6">

                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Benefits
                  </p>

                  <ul className="space-y-1">

                    {food.benefits.slice(0, 2).map((benefit) => (

                      <li
                        key={benefit}
                        className="text-sm text-gray-600"
                      >
                        <span className="text-green-600 mr-2">
                          ✓
                        </span>

                        {benefit}

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Explore */}

                <div className="mt-7 pt-5 border-t border-gray-100">

                  <span className="text-green-700 font-semibold group-hover:underline">
                    Explore {food.name} →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-green-700 rounded-3xl p-10 md:p-14 text-center text-white">

          <div className="text-5xl">
            🥗
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold">
            Build A Healthier Plate
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-green-50 text-lg leading-8">
            Explore our food library to discover nutritious ingredients,
            their key nutrients, and how they may support your nutritional
            goals.
          </p>

          <Link
            href="/recipes"
            className="inline-block mt-8 bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Explore Healthy Recipes →
          </Link>

        </div>

      </section>

    </main>
  );
}