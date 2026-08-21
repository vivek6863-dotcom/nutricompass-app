type Props = {
  foods: string[];
};

export default function BestFoods({ foods }: Props) {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Best Foods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food}
            className="bg-green-100 border border-green-200 rounded-xl px-4 py-3 font-medium text-green-800"
          >
            🥗 {food}
          </div>
        ))}
      </div>
    </div>
  );
}