import Link from "next/link";
import { articles } from "@/components/data/articles";

export default function LatestArticles() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section
      aria-labelledby="latest-nutrition-articles"
      className="py-14 sm:py-18 lg:py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center mb-10 sm:mb-12">

          <h2
            id="latest-nutrition-articles"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            📖 Latest Nutrition Articles
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
            Explore helpful nutrition guides about healthy foods,
            essential nutrients, common symptoms, healthy eating,
            and everyday nutrition.
          </p>

        </div>

        {/* Article Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

          {latestArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              aria-label={`Read ${article.title}`}
              className="group h-full"
            >
              <article className="h-full min-h-[360px] flex flex-col bg-white rounded-3xl border border-gray-200 shadow-md p-6 sm:p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* Category */}

                <div className="self-start inline-flex bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>

                {/* Title */}

                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition leading-tight">
                  {article.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7">
                  {article.description}
                </p>

                {/* Article Information */}

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">

                  <span>
                    👤 {article.author}
                  </span>

                  <span>
                    ⏱️ {article.readTime}
                  </span>

                </div>

                {/* CTA */}

                <div className="mt-auto pt-6 text-green-700 font-semibold group-hover:underline">
                  Read Article →
                </div>

              </article>
            </Link>
          ))}

        </div>

        {/* View All Articles */}

        <div className="text-center mt-10">

          <Link
            href="/articles"
            aria-label="Explore all NutriCompass nutrition articles"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Articles →
          </Link>

        </div>

      </div>
    </section>
  );
}