import Link from "next/link";

const categories = [
  {
    title: "Symptoms",
    description:
      "Explore common symptoms and learn about nutrition-related factors, foods, and nutrients.",
    href: "/symptoms",
    icon: "🩺",
  },
  {
    title: "Foods",
    description:
      "Discover healthy foods, key nutrients, nutritional benefits, and ways to include them in your diet.",
    href: "/foods",
    icon: "🥗",
  },
  {
    title: "Nutrients",
    description:
      "Learn about essential vitamins, minerals, protein, fiber, and other important nutrients.",
    href: "/nutrients",
    icon: "💊",
  },
  {
    title: "Recipes",
    description:
      "Discover nutritious recipes made with wholesome ingredients and learn about their key nutrients.",
    href: "/recipes",
    icon: "🍽️",
  },
  {
    title: "Articles",
    description:
      "Read helpful nutrition guides covering healthy foods, nutrients, symptoms, and healthy eating.",
    href: "/articles",
    icon: "📖",
  },
];

export default function CategorySection() {
  return (
    <section
      aria-labelledby="explore-nutricompass"
      className="max-w-7xl mx-auto py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}

      <div className="text-center mb-10 sm:mb-12">

        <h2
          id="explore-nutricompass"
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Explore NutriCompass
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
          Explore nutrition information about symptoms, healthy foods,
          essential nutrients, nutritious recipes, and helpful articles
          in one place.
        </p>

      </div>

      {/* Category Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            aria-label={`Explore ${category.title}`}
            className="group h-full"
          >
            <article className="h-full min-h-[260px] flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              {/* Icon */}

              <div
                className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-4xl group-hover:bg-green-100 transition"
                aria-hidden="true"
              >
                {category.icon}
              </div>

              {/* Title */}

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-green-700 transition">
                {category.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-gray-600 text-sm leading-6">
                {category.description}
              </p>

              {/* CTA */}

              <div className="mt-auto pt-5 text-green-700 font-semibold text-sm">
                Explore {category.title} →
              </div>

            </article>
          </Link>
        ))}

      </div>
    </section>
  );
}