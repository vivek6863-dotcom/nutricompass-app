import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}

          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2026 NutriCompass. All rights reserved.
          </p>

          {/* Legal Links */}

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm"
          >

            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-green-700 transition-colors duration-200"
            >
              Privacy Policy
            </Link>

            <span
              className="text-gray-300"
              aria-hidden="true"
            >
              |
            </span>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-green-700 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>

            <span
              className="text-gray-300"
              aria-hidden="true"
            >
              |
            </span>

            <Link
              href="/ai-nutrition/terms"
              className="text-gray-500 hover:text-green-700 transition-colors duration-200"
            >
              AI Nutrition Terms & Disclaimer
            </Link>

          </nav>

        </div>

      </div>

    </footer>
  );
}