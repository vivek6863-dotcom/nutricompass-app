import Link from "next/link";

const symptoms = [
  {
    title: "Iron Deficiency",
    slug: "iron-deficiency",
    icon: "🩸",
    description:
      "Explore nutrition information about iron, iron-rich foods, and nutrients associated with maintaining adequate iron intake.",
  },
  {
    title: "Hair Loss",
    slug: "hair-loss",
    icon: "💇",
    description:
      "Learn about nutrition and nutrients commonly associated with normal hair health and healthy hair growth.",
  },
  {
    title: "Vitamin D Deficiency",
    slug: "vitamin-d-deficiency",
    icon: "☀️",
    description:
      "Explore vitamin D, food sources, and general nutrition information related to maintaining vitamin D intake.",
  },
  {
    title: "Fatigue",
    slug: "fatigue",
    icon: "😴",
    description:
      "Learn about nutrition-related factors and nutrients that may be relevant to energy levels and tiredness.",
  },
  {
    title: "Weakness",
    slug: "weakness",
    icon: "💪",
    description:
      "Explore general nutrition information about protein, nutrients, and dietary factors related to energy and strength.",
  },
  {
    title: "Constipation",
    slug: "constipation",
    icon: "🥗",
    description:
      "Learn about fiber, fluids, foods, and general nutrition factors that support healthy digestive function.",
  },
];

export default function TrendingSymptoms() {
  return (
    <section
      aria-labelledby="trending-symptoms"
      className="max-w-7xl mx-auto py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Heading */}

      <div className="text-center mb-10 sm:mb-12">

        <h2
          id="trending-symptoms"
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          🔥 Trending Symptoms
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
          Explore common symptoms and learn about nutrition-related
          information, foods, and nutrients that may support your
          nutritional needs.
        </p>

      </div>

      {/* Symptoms Grid */}

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

        {symptoms.map((item) => (
          <Link
            key={item.slug}
            href={`/symptoms/${item.slug}`}
            aria-label={`Learn more about ${item.title}`}
            className="group h-full"
          >
            <article className="h-full min-h-[320px] flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-7 hover:-translate-y-2">

              {/* Icon */}

              <div
                className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-4xl group-hover:bg-green-100 transition"
                aria-hidden="true"
              >
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

              <div className="mt-auto pt-6 text-green-700 font-semibold group-hover:underline">
                Learn More About {item.title} →
              </div>

            </article>
          </Link>
        ))}

      </div>

      {/* View All */}

      <div className="text-center mt-10">

        <Link
          href="/symptoms"
          aria-label="View all nutrition-related symptoms"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        >
          View All Symptoms →
        </Link>

      </div>
    </section>
  );
}