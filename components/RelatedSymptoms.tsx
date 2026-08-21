import { symptoms } from "@/components/data/symptoms";
export default async function SymptomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const symptom = symptoms.find((item) => item.slug === slug);

  if (!symptom) {
    return (
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-4xl font-bold">Symptom Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h1 className="text-5xl font-bold text-green-700">
        {symptom.title}
      </h1>

      <p className="mt-5 text-xl text-gray-600">
        {symptom.shortDescription}
      </p>
    </div>
  );
}