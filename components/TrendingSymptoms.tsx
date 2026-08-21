import Link from "next/link";

const symptoms = [
  {
    title: "Iron Deficiency",
    slug: "iron-deficiency",
    icon: "🩸",
    description:
      "Low iron levels causing fatigue and weakness.",
  },

  {
    title: "Hair Loss",
    slug: "hair-loss",
    icon: "💇",
    description:
      "Discover nutrition linked to healthy hair growth.",
  },

  {
    title: "Vitamin D Deficiency",
    slug: "vitamin-d-deficiency",
    icon: "☀️",
    description:
      "Learn foods that support healthy vitamin D levels.",
  },

  {
    title: "Fatigue",
    slug: "fatigue",
    icon: "😴",
    description:
      "Explore nutritional factors that may contribute to tiredness.",
  },

  {
    title: "Weakness",
    slug: "weakness",
    icon: "💪",
    description:
      "Learn about nutritional factors that may contribute to weakness and low energy.",
  },

  {
    title: "Constipation",
    slug: "constipation",
    icon: "🥗",
    description:
      "Explore foods and nutrients that support healthy digestion.",
  },
];

export default function TrendingSymptoms() {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

      {/* Section Heading */}

      <div className="text-center mb-12">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          🔥 Trending Symptoms
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore common nutrition-related symptoms and learn about
          foods and nutrients that may support your nutritional needs.
        </p>

      </div>

      {/* Symptoms Grid */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {symptoms.map((item) => (
          <Link
            key={item.slug}
            href={`/symptoms/${item.slug}`}
            className="group"
          >
            <article className="h-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-7 hover:-translate-y-2">

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-4xl group-hover:bg-green-100 transition">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="mt-5 text-2xl font-bold text-gray-900 group-hover:text-green-700 transition">
                {item.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>

              {/* CTA */}

              <div className="mt-6 text-green-700 font-semibold group-hover:underline">
                Learn More →
              </div>

            </article>
          </Link>
        ))}

      </div>

      {/* View All */}

      <div className="text-center mt-10">

        <Link
          href="/symptoms"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-full shadow-md transition"
        >
          View All Symptoms →
        </Link>

      </div>

    </section>
  );
}