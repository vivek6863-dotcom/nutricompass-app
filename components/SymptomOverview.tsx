type Props = {
  overview: string;
};

export default function SymptomOverview({ overview }: Props) {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Overview
      </h2>

      <p className="text-gray-600 leading-8 text-lg">
        {overview}
      </p>
    </div>
  );
}