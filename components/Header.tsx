"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER ROW
        ===================================================== */}

        <div className="h-20 flex items-center justify-between">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center"
            aria-label="NutriCompass Home"
          >
            <Image
              src="/images/branding/logo.png"
              alt="NutriCompass"
              width={200}
              height={55}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav
            className="hidden md:flex items-center gap-7 text-gray-700 font-medium"
            aria-label="Main navigation"
          >
            {/* Symptoms */}

            <Link
              href="/symptoms"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Symptoms
            </Link>

            {/* Foods */}

            <Link
              href="/foods"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Foods
            </Link>

            {/* Nutrients */}

            <Link
              href="/nutrients"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Nutrients
            </Link>

            {/* Recipes */}

            <Link
              href="/recipes"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Recipes
            </Link>

            {/* Articles */}

            <Link
              href="/articles"
              className="hover:text-green-700 transition-colors duration-300"
            >
              Articles
            </Link>

            {/* =================================================
                SEARCH
            ================================================= */}

            <Link
              href="/search"
              aria-label="Search NutriCompass"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-50 hover:text-green-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </Link>

            {/* =================================================
                AI NUTRITION
            ================================================= */}

            <Link
              href="/ai-nutrition"
              aria-label="Open AI Nutrition"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
            >
              AI Nutrition
            </Link>
          </nav>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden border-t border-gray-100 py-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">

              {/* Search */}

              <Link
                href="/search"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition flex items-center gap-3"
              >
                <span
                  className="text-xl"
                  aria-hidden="true"
                >
                  🔎
                </span>

                Search
              </Link>

              {/* Symptoms */}

              <Link
                href="/symptoms"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition"
              >
                Symptoms
              </Link>

              {/* Foods */}

              <Link
                href="/foods"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition"
              >
                Foods
              </Link>

              {/* Nutrients */}

              <Link
                href="/nutrients"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition"
              >
                Nutrients
              </Link>

              {/* Recipes */}

              <Link
                href="/recipes"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition"
              >
                Recipes
              </Link>

              {/* Articles */}

              <Link
                href="/articles"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition"
              >
                Articles
              </Link>

              {/* =================================================
                  AI NUTRITION
              ================================================= */}

              <Link
                href="/ai-nutrition"
                onClick={closeMenu}
                aria-label="Open AI Nutrition"
                className="mt-2 text-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
              >
                AI Nutrition
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}