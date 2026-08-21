import FoodCard from "./FoodCard";
import { foods } from "./data/foods";

type Props = {
  names: string[];
};

export default function FoodGrid({ names }: Props) {
  const matchedFoods = foods.filter((food) =>
    names.includes(food.name)
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {matchedFoods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}
    </div>
  );
}