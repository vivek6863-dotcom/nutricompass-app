export default function Loading() {
  return (
    <main
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="text-center">

        {/* Loading Icon */}

        <div className="w-20 h-20 mx-auto rounded-3xl bg-green-100 flex items-center justify-center animate-pulse">
          <span className="text-4xl">
            🥗
          </span>
        </div>

        {/* Loading Text */}

        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          Loading NutriCompass
        </h1>

        <p className="mt-2 text-gray-500">
          Preparing your nutrition information...
        </p>

        {/* Loading Indicator */}

        <div className="mt-6 flex justify-center gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full animate-bounce" />
          <span
            className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>

      </div>
    </main>
  );
}