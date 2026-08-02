export default function CategorySection() {
  const categories = [
    { icon: "🩺", title: "Symptoms" },
    { icon: "🥦", title: "Foods" },
    { icon: "💊", title: "Nutrients" },
    { icon: "🍽️", title: "Recipes" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <div className="text-5xl">{category.icon}</div>

            <h3 className="mt-5 text-xl font-semibold">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}