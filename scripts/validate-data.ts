import { foods } from "@/components/data/foods";
import { nutrients } from "@/components/data/nutrients";
import { recipes } from "@/components/data/recipes";
import { articles } from "@/components/data/articles";
import { symptoms } from "@/components/data/symptoms";

const createSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function validateReferences(
  sourceName: string,
  sourceItems: any[],
  field: string,
  targetName: string,
  targetItems: any[]
) {
  const targetSlugs = new Set(
    targetItems.map((item) =>
      createSlug(item.slug || item.name || item.title)
    )
  );

  const errors: string[] = [];

  sourceItems.forEach((item) => {
    const values = item[field] || [];

    if (!Array.isArray(values)) {
      return;
    }

    values.forEach((value: string) => {
      const slug = createSlug(value);

      if (!targetSlugs.has(slug)) {
        errors.push(
          `${sourceName}: "${item.name || item.title}" → ${targetName}: "${value}"`
        );
      }
    });
  });

  return errors;
}

const checks: Array<
  [
    string,
    any[],
    string,
    string,
    any[]
  ]
> = [
  [
    "Food",
    foods,
    "nutrients",
    "Nutrient",
    nutrients,
  ],

  [
    "Food",
    foods,
    "relatedSymptoms",
    "Symptom",
    symptoms,
  ],

  [
    "Recipe",
    recipes,
    "relatedFoods",
    "Food",
    foods,
  ],

  [
    "Recipe",
    recipes,
    "nutrients",
    "Nutrient",
    nutrients,
  ],

  [
    "Recipe",
    recipes,
    "relatedSymptoms",
    "Symptom",
    symptoms,
  ],

  [
    "Article",
    articles,
    "relatedFoods",
    "Food",
    foods,
  ],

  [
    "Article",
    articles,
    "relatedNutrients",
    "Nutrient",
    nutrients,
  ],

  [
    "Article",
    articles,
    "relatedSymptoms",
    "Symptom",
    symptoms,
  ],

  [
    "Nutrient",
    nutrients,
    "foodSources",
    "Food",
    foods,
  ],
];

let totalErrors = 0;

for (const [
  sourceName,
  sourceItems,
  field,
  targetName,
  targetItems,
] of checks) {
  const errors = validateReferences(
    sourceName,
    sourceItems,
    field,
    targetName,
    targetItems
  );

  if (errors.length > 0) {
    console.log(`\n❌ ${sourceName} → ${targetName}`);

    errors.forEach((error) => {
      console.log(`   ${error}`);
    });

    totalErrors += errors.length;
  } else {
    console.log(
      `✅ ${sourceName} → ${targetName}`
    );
  }
}

console.log("\n--------------------------------");

if (totalErrors === 0) {
  console.log("✅ NutriCompass data validation passed.");
} else {
  console.log(
    `❌ ${totalErrors} relationship errors found.`
  );
}

console.log("--------------------------------");

if (totalErrors > 0) {
  process.exit(1);
}