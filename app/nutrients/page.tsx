import Image from "next/image";
import Link from "next/link";
import { nutrients } from "@/components/data/nutrients";

export default function NutrientsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <div className="text-6xl">
            💊
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold">
            Essential Nutrients
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-green-50 leading-8">
            Learn about essential vitamins, minerals, protein, and fiber,
            including their benefits, food sources, and deficiency symptoms.
          </p>

        </div>

      </section>

      {/* =====================================================
          NUTRIENT GRID
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {nutrients.map((nutrient) => (

            <Link
              key={nutrient.id}
              href={`/nutrients/${nutrient.slug}`}
              className="group"
            >

              <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

                {/* =================================================
                    NUTRIENT IMAGE
                ================================================= */}

                <div className="relative w-full aspect-[3/2] bg-green-50 overflow-hidden">

                  <Image
                    src={nutrient.image}
                    alt={`${nutrient.name} Nutrition`}
                    fill
                    priority={nutrient.id <= 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition">
                    {nutrient.name}
                  </h2>

                  <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
                    {nutrient.description}
                  </p>

                  {/* =================================================
                      BENEFITS
                  ================================================= */}

                  <div className="mt-5">

                    <h3 className="font-semibold text-gray-800 mb-2">
                      Key Benefits
                    </h3>

                    <ul className="space-y-2">

                      {nutrient.benefits.slice(0, 3).map((benefit) => (

                        <li
                          key={benefit}
                          className="text-gray-600 text-sm"
                        >

                          <span className="text-green-600 mr-2">
                            ✓
                          </span>

                          {benefit}

                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <div className="mt-6 pt-5 border-t border-gray-100">

                    <span className="text-green-700 font-semibold group-hover:underline">
                      Learn More →
                    </span>

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}