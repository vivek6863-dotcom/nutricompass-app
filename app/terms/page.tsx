import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | NutriCompass",
  description:
    "Read the Terms & Conditions for using the NutriCompass website, nutrition information, recipes, articles, and related services.",
  alternates: {
    canonical: "https://nutricompass.in/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

          <h1 className="text-4xl sm:text-5xl font-bold">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-green-50 text-lg">
            Terms governing your use of the NutriCompass website.
          </p>

        </div>
      </section>

      {/* Content */}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">

          {/* Introduction */}

          <section>

            <h2 className="text-2xl font-bold text-gray-900">
              1. Acceptance of These Terms
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              By accessing or using NutriCompass, you agree to these
              Terms & Conditions. If you do not agree with these terms,
              please do not use the website.
            </p>

          </section>

          {/* Website Purpose */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              2. About NutriCompass
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              NutriCompass is an informational website providing
              general nutrition information, food information, nutrient
              education, recipes, articles, and related educational
              resources.
            </p>

          </section>

          {/* Information Only */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              3. Informational Purpose Only
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Content provided on NutriCompass is intended for general
              educational and informational purposes only.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Information on the website should not be considered
              medical advice, diagnosis, treatment, or a substitute for
              advice from a qualified healthcare professional.
            </p>

          </section>

          {/* Medical Disclaimer */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              4. Health & Medical Disclaimer
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Nutrition and health information can vary between
              individuals. NutriCompass does not diagnose medical
              conditions or provide individualized medical treatment.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              If you have a medical condition, persistent symptoms,
              allergies, dietary restrictions, or other health concerns,
              consult an appropriately qualified healthcare professional.
            </p>

          </section>

          {/* AI */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              5. AI Nutrition Feature
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              NutriCompass may provide an AI Nutrition feature that
              offers general nutrition information for educational
              purposes.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              The AI Nutrition feature is not a doctor, dietitian,
              healthcare professional, or emergency service. It does
              not diagnose medical conditions, prescribe medication,
              determine medication dosages, or provide medical
              treatment.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Additional terms and information specifically applicable
              to the AI Nutrition feature are available on our
              <a
                href="/ai-nutrition/terms"
                className="ml-1 text-green-700 font-semibold hover:underline"
              >
                AI Nutrition Terms & Disclaimer
              </a>
              .
            </p>

          </section>

          {/* User Responsibility */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              6. User Responsibility
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              You are responsible for how you use information obtained
              from NutriCompass.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              You should independently evaluate information and seek
              professional advice when appropriate before making
              significant health, dietary, medication, or treatment
              decisions.
            </p>

          </section>

          {/* Accuracy */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              7. Accuracy of Information
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              We aim to provide useful and accurate information.
              However, nutrition information may change over time and
              errors or omissions may occur.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              NutriCompass does not guarantee that all information on
              the website is complete, current, or error-free.
            </p>

          </section>

          {/* Website Use */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              8. Acceptable Use
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              You agree to use NutriCompass only for lawful purposes
              and in a manner that does not interfere with the operation
              or security of the website.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              You must not attempt to gain unauthorized access to the
              website, its systems, APIs, databases, or other
              infrastructure.
            </p>

          </section>

          {/* Intellectual Property */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              9. Intellectual Property
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Unless otherwise stated, content published on NutriCompass,
              including original text, branding, graphics, design
              elements, and website materials, may be protected by
              applicable intellectual property laws.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              You may not reproduce, republish, distribute, or
              commercially exploit website content without appropriate
              permission, except where permitted by applicable law.
            </p>

          </section>

          {/* External Links */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              10. Third-Party Websites
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              NutriCompass may contain links to third-party websites
              or services. These websites are operated independently
              and may have their own terms and privacy policies.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              NutriCompass is not responsible for the content,
              availability, or practices of third-party websites.
            </p>

          </section>

          {/* Availability */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              11. Website Availability
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              We may modify, update, suspend, or discontinue parts of
              the website or its features at any time.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              We do not guarantee that the website or every feature
              will always be available or operate without interruption.
            </p>

          </section>

          {/* Limitation */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              12. Limitation of Liability
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              To the extent permitted by applicable law, NutriCompass
              and its operators are not responsible for losses or
              damages resulting from reliance on general information
              provided through the website.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Nothing in these Terms is intended to exclude or limit
              any liability that cannot lawfully be excluded or limited
              under applicable law.
            </p>

          </section>

          {/* Changes */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              13. Changes to These Terms
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              We may update these Terms & Conditions from time to time.
              Updated terms will be published on this page with a
              revised date where appropriate.
            </p>

          </section>

          {/* Privacy */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              14. Privacy
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Your use of NutriCompass may also be subject to our
              Privacy Policy, which explains how information may be
              handled when you use the website.
            </p>

            <p className="mt-4">
              <a
                href="/privacy-policy"
                className="text-green-700 font-semibold hover:underline"
              >
                View Privacy Policy →
              </a>
            </p>

          </section>

          {/* Contact */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              15. Contact
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              If you have questions about these Terms & Conditions,
              please contact the NutriCompass website team through the
              contact method provided on the website.
            </p>

          </section>

          {/* Last Updated */}

          <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
            Last Updated: August 2026
          </div>

        </div>

      </section>

    </main>
  );
}