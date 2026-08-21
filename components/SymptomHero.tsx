import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function SymptomHero({
  title,
  description,
  image,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 via-white to-emerald-50 border border-green-100 shadow-lg p-6 sm:p-8 md:p-12 lg:p-14">

      {/* Background Blur */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10">

        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center text-sm text-gray-500 mb-8"
        >
          <Link
            href="/"
            className="hover:text-green-600 transition"
          >
            Home
          </Link>

          <span
            className="mx-2"
            aria-hidden="true"
          >
            ›
          </span>

          <Link
            href="/symptoms"
            className="hover:text-green-600 transition"
          >
            Symptoms
          </Link>

          <span
            className="mx-2"
            aria-hidden="true"
          >
            ›
          </span>

          <span
            className="text-green-700 font-medium"
            aria-current="page"
          >
            {title}
          </span>
        </nav>

        {/* Hero Content */}

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-semibold mb-6">
              ⭐ Nutrition Guide
            </div>

            {/* Title */}

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h1>

            {/* Description */}

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-8">
              {description}
            </p>

            {/* Information */}

            <div className="flex flex-wrap gap-x-5 gap-y-3 mt-8 text-sm text-gray-500">
              <span>
                📅 Updated Today
              </span>

              <span>
                ⏱️ 5 Min Read
              </span>

              <span>
                🥗 Nutrition Based
              </span>
            </div>

            {/* Actions */}

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="/foods"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-sm"
              >
                Explore Foods
              </Link>

              <Link
                href="/symptoms"
                className="inline-flex items-center justify-center border border-gray-300 bg-white hover:border-green-600 hover:text-green-700 px-6 py-3 rounded-xl font-semibold transition"
              >
                Browse Symptoms
              </Link>

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center">

            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-xl bg-green-50">

              <Image
                src={image}
                alt={`${title} nutrition guide`}
                width={1200}
                height={800}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}