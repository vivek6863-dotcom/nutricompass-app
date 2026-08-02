export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="text-3xl font-bold text-green-700">
          NutriCompass
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#" className="hover:text-green-700 transition">
            Symptoms
          </a>

          <a href="#" className="hover:text-green-700 transition">
            Foods
          </a>

          <a href="#" className="hover:text-green-700 transition">
            Nutrients
          </a>

          <a href="#" className="hover:text-green-700 transition">
            Recipes
          </a>

          <a href="#" className="hover:text-green-700 transition">
            Articles
          </a>

        </nav>

      </div>
    </header>
  );
}