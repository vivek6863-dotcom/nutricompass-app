"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("NutriCompass application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <section className="max-w-2xl w-full text-center">

        <div className="bg-white rounded-3xl shadow-md p-10 md:p-14">

          {/* Icon */}

          <div className="text-7xl">
            🥗
          </div>

          {/* Error Label */}

          <p className="mt-6 text-green-600 font-bold text-lg tracking-wide">
            Something Went Wrong
          </p>

          {/* Heading */}

          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            We Couldn't Load This Page
          </h1>

          {/* Description */}

          <p className="mt-5 text-lg text-gray-600 leading-8 max-w-xl mx-auto">
            Something unexpected happened while loading this page.
            Please try again or return to NutriCompass.
          </p>

          {/* Actions */}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold shadow-md transition"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto bg-white border border-gray-200 hover:border-green-500 hover:text-green-700 text-gray-700 px-7 py-3 rounded-full font-semibold transition"
            >
              Go To Homepage
            </Link>

          </div>

          {/* Quick Links */}

          <div className="mt-10 pt-8 border-t border-gray-100">

            <p className="text-sm font-semibold text-gray-500 mb-4">
              Explore NutriCompass
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              <Link
                href="/foods"
                className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition"
              >
                Foods
              </Link>

              <Link
                href="/nutrients"
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
              >
                Nutrients
              </Link>

              <Link
                href="/symptoms"
                className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium hover:bg-red-100 transition"
              >
                Symptoms
              </Link>

              <Link
                href="/recipes"
                className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-100 transition"
              >
                Recipes
              </Link>

              <Link
                href="/articles"
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition"
              >
                Articles
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}