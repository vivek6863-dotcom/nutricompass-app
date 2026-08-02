export default function Hero() {
  const symptoms = [
    "Iron Deficiency",
    "Hair Loss",
    "Fatigue",
    "Vitamin D Deficiency",
    "Constipation",
    "Acne",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-green-700">
          NutriCompass
        </h1>

        <p className="mt-5 text-xl text-gray-600">
          Your Trusted Guide To Evidence-Based Nutrition
        </p>
      </div>

      <div className="mt-12">
        <input
          type="text"
          placeholder="Search Symptoms, Foods, Nutrients..."
          className="w-full rounded-xl border p-5 text-lg shadow"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <div className="bg-white rounded-xl shadow p-8 text-center">
          🩺
          <h3 className="font-semibold mt-3">Symptoms</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-8 text-center">
          🥦
          <h3 className="font-semibold mt-3">Foods</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-8 text-center">
          💊
          <h3 className="font-semibold mt-3">Nutrients</h3>
        </div>

        <div className="bg-white rounded-xl shadow p-8 text-center">
          🍽️
          <h3 className="font-semibold mt-3">Recipes</h3>
        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Popular Symptoms
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {symptoms.map((item) => (

            <div
              key={item}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">
                {item}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}