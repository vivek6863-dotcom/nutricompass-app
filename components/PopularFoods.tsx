import Link from "next/link";

const foods = [
  {
    name: "Spinach",
    slug: "spinach",
    emoji: "🥬",
    benefit: "Rich In Iron",
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
    benefit: "Rich In Iron & Protein",
    color: "bg-orange-50",
  },

  {
    name: "Pumpkin Seeds",
    slug: "pumpkin-seeds",
    emoji: "🎃",
    benefit: "Rich In Iron & Magnesium",
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
    benefit: "Rich In Vitamin C",
    color: "bg-lime-50",
  },
];

export default function PopularFoods() {
  return (
    <section className="py-16 sm:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            🥗 Popular Healthy Foods
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover nutrient-rich foods and learn how they can support
            a balanced and nutritious diet.
          </p>

        </div>

        {/* Food Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {foods.map((food) => (
            <Link
              key={food.slug}
              href={`/foods/${food.slug}`}
              className="group"
            >

              <article
                className={`${food.color} h-full rounded-3xl p-6 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >

                {/* Food Icon */}

                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {food.emoji}
                </div>

                {/* Food Name */}

                <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                  {food.name}
                </h3>

                {/* Benefit */}

                <p className="text-green-700 mt-2 font-medium text-sm">
                  {food.benefit}
                </p>

                {/* CTA */}

                <div className="mt-5 text-green-700 font-semibold text-sm group-hover:underline">
                  View Food →
                </div>

              </article>

            </Link>
          ))}

        </div>

        {/* View All Foods */}

        <div className="text-center mt-10">

          <Link
            href="/foods"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-full shadow-md transition"
          >
            View All Foods →
          </Link>

        </div>

      </div>

    </section>
  );
}