import Image from "next/image";
import Link from "next/link";
import { Food } from "@/types/food";

type Props = {
  food: Food;
};

export default function FoodCard({ food }: Props) {
  return (
    <Link
      href={`/foods/${food.slug}`}
      className="group block"
    >
      <article className="h-full bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

        {/* Food Image */}

        <div className="relative h-52 bg-green-50 overflow-hidden">

          <Image
            src={food.image}
            alt={food.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

        </div>

        {/* Content */}

        <div className="p-6">

          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition">
            {food.name}
          </h3>

          <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
            {food.description}
          </p>

          {/* Nutrients */}

          <div className="flex flex-wrap gap-2 mt-5">

            {food.nutrients.map((nutrient) => (

              <span
                key={nutrient}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                💊 {nutrient}
              </span>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-6 text-green-700 font-semibold group-hover:underline">
            Learn More →
          </div>

        </div>

      </article>
    </Link>
  );
}