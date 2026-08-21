import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/components/data/recipes";
export default function RecipesPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-4">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-700">
          Healthy Recipes
        </h1>

        <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover nutritious recipes designed to support your health and
          provide essential nutrients through wholesome foods.
        </p>
      </div>

      {/* Recipe Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.slug}`}
            className="group"
          >
            <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
             {/* Recipe Image */}

<div className="relative h-52 bg-green-50 overflow-hidden">
  <Image
    src={recipe.image}
    alt={`${recipe.name} - Healthy Recipe`}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="object-cover group-hover:scale-105 transition duration-500"
  />
</div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition">
                  {recipe.name}
                </h2>

                <p className="mt-3 text-gray-600 leading-7">
                  {recipe.description}
                </p>

                {/* Recipe Details */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    ⏱️ {recipe.prepTime}
                  </span>

                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    🔥 {recipe.cookTime}
                  </span>

                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    👥 {recipe.servings} Servings
                  </span>
                </div>

                {/* Nutrients */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {recipe.nutrients.map((nutrient) => (
                    <span
                      key={nutrient}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {nutrient}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 text-green-700 font-semibold">
                  View Recipe →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}