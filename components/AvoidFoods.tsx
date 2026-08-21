type Props = {
  foods: string[];
};

export default function AvoidFoods({ foods }: Props) {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Foods To Avoid
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food}
            className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-medium text-red-700"
          >
            🚫 {food}
          </div>
        ))}
      </div>
    </div>
  );
}