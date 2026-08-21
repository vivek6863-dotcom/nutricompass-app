import Link from "next/link";
import { articles } from "@/components/data/articles";

export default function LatestArticles() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            📖 Latest Nutrition Articles
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore helpful guides about nutrition, healthy foods,
            essential nutrients, and common health topics.
          </p>

        </div>

        {/* Article Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {latestArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group"
            >
              <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* Category */}

                <div className="inline-flex bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>

                {/* Title */}

                <h3 className="mt-5 text-2xl font-bold text-gray-900 group-hover:text-green-700 transition leading-tight">
                  {article.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7">
                  {article.description}
                </p>

                {/* Article Information */}

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span>
                    👤 {article.author}
                  </span>

                  <span>
                    ⏱️ {article.readTime}
                  </span>
                </div>

                {/* CTA */}

                <div className="mt-6 text-green-700 font-semibold group-hover:underline">
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
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-full shadow-md transition"
          >
            View All Articles →
          </Link>

        </div>

      </div>
    </section>
  );
}