import Link from "next/link";

const foods = [
  {
    name: "Spinach",
    slug: "spinach",
    emoji: "🥬",
    benefit: "Source Of Iron",
    color: "bg-green-50",
  },
  {
    name: "Lean Red Meat",
    slug: "lean-red-meat",
    emoji: "🥩",
    benefit: "Highly Absorbable Iron",
    color: "bg-red-50",
  },
  {
    name: "Lentils",
    slug: "lentils",
    emoji: "🫘",
    benefit: "Iron & Protein",
    color: "bg-orange-50",
  },
  {
    name: "Pumpkin Seeds",
    slug: "pumpkin-seeds",
    emoji: "🎃",
    benefit: "Iron & Magnesium",
    color: "bg-yellow-50",
  },
  {
    name: "Beans",
    slug: "beans",
    emoji: "🫘",
    benefit: "Iron & Fiber",
    color: "bg-purple-50",
  },
  {
    name: "Broccoli",
    slug: "broccoli",
    emoji: "🥦",
    benefit: "Source Of Vitamin C",
    color: "bg-lime-50",
  },
];

export default function PopularFoods() {
  return (
    <section
      aria-labelledby="popular-foods"
      className="py-14 sm:py-18 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center mb-10 sm:mb-12">

          <h2
            id="popular-foods"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            🥗 Popular Healthy Foods
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
            Discover nutrient-rich foods and learn about their nutritional
            value, key nutrients, and role in a balanced eating pattern.
          </p>

        </div>

        {/* Food Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {foods.map((food) => (
            <Link
              key={food.slug}
              href={`/foods/${food.slug}`}
              aria-label={`Explore ${food.name} nutrition information`}
              className="group h-full"
            >
              <article
                className={`${food.color} h-full min-h-[250px] flex flex-col items-center text-center rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >

                {/* Food Icon */}

                <div
                  className="text-6xl group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {food.emoji}
                </div>

                {/* Food Name */}

                <h3 className="mt-5 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                  {food.name}
                </h3>

                {/* Nutritional Highlight */}

                <p className="mt-2 text-green-700 font-medium text-sm leading-5">
                  {food.benefit}
                </p>

                {/* CTA */}

                <div className="mt-auto pt-5 text-green-700 font-semibold text-sm group-hover:underline">
                  Explore {food.name} →
                </div>

              </article>
            </Link>
          ))}

        </div>

        {/* View All Foods */}

        <div className="text-center mt-10">

          <Link
            href="/foods"
            aria-label="Explore all foods on NutriCompass"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Foods →
          </Link>

        </div>

      </div>
    </section>
  );
}