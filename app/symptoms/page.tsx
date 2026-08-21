import Link from "next/link";
import { symptoms } from "@/components/data/symptoms";

export default function SymptomsPage() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-5xl font-bold text-green-700 mb-4">
        Symptoms
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        Explore common nutrition-related symptoms and learn which foods and nutrients can help.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {symptoms.map((symptom) => (
          <Link
            key={symptom.slug}
            href={`/symptoms/${symptom.slug}`}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-green-700">
              {symptom.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {symptom.shortDescription}
            </p>

            <div className="mt-5 text-green-600 font-semibold">
              Read More →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}