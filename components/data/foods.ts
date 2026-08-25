import { Food } from "@/types/food";

export const foods: Food[] = [
  {
    id: 1,
    name: "Spinach",
    slug: "spinach",
    image: "/images/foods/spinach.jpg",
    nutrients: ["Iron", "Vitamin C", "Folate"],
    benefits: [
      "Provides Plant-Based Iron",
      "Supports Healthy Blood Cells",
      "Provides Folate",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
    description:
      "Spinach is a nutrient-rich leafy green vegetable that provides iron, vitamin C, folate, and other nutrients.",
  },

  {
    id: 2,
    name: "Lean Red Meat",
    slug: "lean-red-meat",
    image: "/images/foods/red-meat.jpg",
    nutrients: ["Iron", "Protein", "Vitamin B12"],
    benefits: [
      "Provides Highly Absorbable Iron",
      "Supports Muscle Health",
      "Provides Vitamin B12",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
    description:
      "Lean red meat provides heme iron, protein, and vitamin B12 as part of a balanced diet.",
  },

  {
    id: 3,
    name: "Lentils",
    slug: "lentils",
    image: "/images/foods/lentils.jpg",
    nutrients: ["Iron", "Protein", "Fiber"],
    benefits: [
      "Provides Plant-Based Protein",
      "Supports Healthy Digestion",
      "Provides Iron",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
    description:
      "Lentils are nutritious legumes that provide plant-based protein, iron, fiber, and other essential nutrients.",
  },

  {
    id: 4,
    name: "Pumpkin Seeds",
    slug: "pumpkin-seeds",
    image: "/images/foods/pumpkin-seeds.jpg",
    nutrients: ["Iron", "Magnesium", "Zinc"],
    benefits: [
      "Provides Iron",
      "Provides Magnesium",
      "Supports Normal Immune Function",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
    description:
      "Pumpkin seeds are nutrient-dense seeds containing iron, magnesium, zinc, protein, and healthy fats.",
  },

  {
    id: 5,
    name: "Beans",
    slug: "beans",
    image: "/images/foods/beans.jpg",
    nutrients: ["Iron", "Fiber", "Folate"],
    benefits: [
      "Provides Plant-Based Iron",
      "Supports Digestion",
      "Provides Folate",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Constipation",
    ],
    description:
      "Beans provide plant-based iron, fiber, folate, protein, and other nutrients that can contribute to a balanced diet.",
  },

  {
    id: 6,
    name: "Broccoli",
    slug: "broccoli",
    image: "/images/foods/broccoli.jpg",
    nutrients: ["Vitamin C", "Iron", "Fiber"],
    benefits: [
      "Provides Vitamin C",
      "Supports Iron Absorption",
      "Supports Healthy Digestion",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Constipation",
    ],
    description:
      "Broccoli provides vitamin C, fiber, folate, and other nutrients that support a varied and balanced diet.",
  },

  {
    id: 7,
    name: "Eggs",
    slug: "eggs",
    image: "/images/foods/eggs.jpg",
    nutrients: ["Protein", "Vitamin B12", "Vitamin D", "Choline"],
    benefits: [
      "Provides High-Quality Protein",
      "Provides Vitamin B12",
      "Supports Normal Muscle Function",
    ],
    relatedSymptoms: [
      "Fatigue",
      "Weakness",
      "Hair Loss",
    ],
    description:
      "Eggs are a versatile source of high-quality protein and provide vitamin B12, vitamin D, choline, and other nutrients.",
  },

  {
    id: 8,
    name: "Salmon",
    slug: "salmon",
    image: "/images/foods/salmon.jpg",
    nutrients: ["Protein", "Vitamin D", "Omega-3 Fatty Acids"],
    benefits: [
      "Provides High-Quality Protein",
      "Provides Vitamin D",
      "Provides Omega-3 Fatty Acids",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Salmon is a nutrient-rich fish that provides protein, vitamin D, and omega-3 fatty acids.",
  },

  {
    id: 9,
    name: "Almonds",
    slug: "almonds",
    image: "/images/foods/almonds.jpg",
    nutrients: ["Magnesium", "Protein", "Vitamin E"],
    benefits: [
      "Provides Magnesium",
      "Provides Vitamin E",
      "Provides Healthy Fats",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Almonds provide protein, magnesium, vitamin E, fiber, and unsaturated fats.",
  },

  {
    id: 10,
    name: "Blueberries",
    slug: "blueberries",
    image: "/images/foods/blueberries.jpg",
    nutrients: ["Vitamin C", "Fiber", "Antioxidants"],
    benefits: [
      "Provides Vitamin C",
      "Provides Fiber",
      "Contains Antioxidant Compounds",
    ],
    relatedSymptoms: [
      "Fatigue",
    ],
    description:
      "Blueberries are nutrient-rich fruits that provide vitamin C, fiber, and naturally occurring antioxidant compounds.",
  },

  {
    id: 11,
    name: "Avocado",
    slug: "avocado",
    image: "/images/foods/avocado.jpg",
    nutrients: ["Fiber", "Folate", "Potassium", "Vitamin E"],
    benefits: [
      "Provides Healthy Fats",
      "Provides Fiber",
      "Provides Folate",
    ],
    relatedSymptoms: [
      "Constipation",
      "Weakness",
    ],
    description:
      "Avocado provides fiber, folate, potassium, vitamin E, and mostly unsaturated fats.",
  },

  {
  id: 12,
  name: "Nuts",
  slug: "nuts",
  image: "/images/foods/nuts.jpg",
  nutrients: ["Protein", "Magnesium", "Zinc"],
  benefits: [
    "Provides Plant Protein",
    "Provides Magnesium",
    "Provides Healthy Fats",
  ],
  relatedSymptoms: [
    "Weakness",
    "Fatigue",
  ],
  description:
    "Nuts are nutrient-dense foods that provide protein, magnesium, zinc, fiber, and unsaturated fats.",
},

  {
    id: 13,
    name: "Strawberries",
    slug: "strawberries",
    image: "/images/foods/strawberries.jpg",
    nutrients: ["Vitamin C", "Fiber", "Folate"],
    benefits: [
      "Provides Vitamin C",
      "Provides Fiber",
      "Supports A Balanced Diet",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
    ],
    description:
      "Strawberries provide vitamin C, fiber, folate, and other nutrients while adding variety to a balanced diet.",
  },

  {
    id: 14,
    name: "Mushrooms",
    slug: "mushrooms",
    image: "/images/foods/mushrooms.jpg",
    nutrients: ["Vitamin D", "B Vitamins", "Selenium"],
    benefits: [
      "Provides B Vitamins",
      "Provides Selenium",
      "Some Varieties Provide Vitamin D",
    ],
    relatedSymptoms: [
      "Fatigue",
      "Weakness",
    ],
    description:
      "Mushrooms provide B vitamins, selenium, and other nutrients. Some varieties can also provide vitamin D when appropriately exposed to UV light.",
  },

  {
    id: 15,
    name: "Fortified Milk",
    slug: "fortified-milk",
    image: "/images/foods/fortified-milk.jpg",
    nutrients: ["Calcium", "Vitamin D", "Protein", "Vitamin B12"],
    benefits: [
      "Provides Calcium",
      "Provides Vitamin D",
      "Provides Protein",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Fortified milk can provide protein, calcium, vitamin D, vitamin B12, and other nutrients.",
  },

  {
    id: 16,
    name: "Bell Peppers",
    slug: "bell-peppers",
    image: "/images/foods/bell-peppers.jpg",
    nutrients: ["Vitamin C", "Vitamin A", "Folate"],
    benefits: [
      "Provides Vitamin C",
      "Provides Folate",
      "Supports A Varied Diet",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
    ],
    description:
      "Bell peppers are rich in vitamin C and also provide vitamin A, folate, and other nutrients.",
  },

  {
    id: 17,
    name: "Oranges",
    slug: "oranges",
    image: "/images/foods/oranges.jpg",
    nutrients: ["Vitamin C", "Folate", "Fiber"],
    benefits: [
      "Provides Vitamin C",
      "Provides Fiber",
      "Provides Folate",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
    ],
    description:
      "Oranges provide vitamin C, fiber, folate, and other nutrients and can be part of a balanced diet.",
  },

  {
    id: 18,
    name: "Kiwi",
    slug: "kiwi",
    image: "/images/foods/kiwi.jpg",
    nutrients: ["Vitamin C", "Fiber", "Folate"],
    benefits: [
      "Provides Vitamin C",
      "Provides Fiber",
      "Provides Folate",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Constipation",
      "Fatigue",
    ],
    description:
      "Kiwi is a nutrient-rich fruit that provides vitamin C, fiber, folate, and other nutrients.",
  },

  {
    id: 19,
    name: "Carrots",
    slug: "carrots",
    image: "/images/foods/carrots.jpg",
    nutrients: ["Vitamin A", "Fiber", "Vitamin C"],
    benefits: [
      "Provides Vitamin A",
      "Provides Fiber",
      "Supports A Balanced Diet",
    ],
    relatedSymptoms: [
      "Acne",
      "Constipation",
    ],
    description:
      "Carrots are rich in carotenoids and provide fiber and vitamin C as part of a balanced diet.",
  },

  {
    id: 20,
    name: "Sweet Potatoes",
    slug: "sweet-potatoes",
    image: "/images/foods/sweet-potatoes.jpg",
    nutrients: ["Vitamin A", "Fiber", "Potassium", "Vitamin C"],
    benefits: [
      "Provides Vitamin A",
      "Provides Fiber",
      "Provides Potassium",
    ],
    relatedSymptoms: [
      "Constipation",
      "Weakness",
    ],
    description:
      "Sweet potatoes provide fiber, potassium, vitamin C, and carotenoids that the body can convert to vitamin A.",
  },

  {
    id: 21,
    name: "Greek Yogurt",
    slug: "greek-yogurt",
    image: "/images/foods/greek-yogurt.jpg",
    nutrients: ["Protein", "Calcium", "Vitamin B12"],
    benefits: [
      "Provides Protein",
      "Provides Calcium",
      "Supports A Balanced Diet",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Greek yogurt is a protein-rich dairy food that also provides calcium and vitamin B12.",
  },

  {
    id: 22,
    name: "Milk",
    slug: "milk",
    image: "/images/foods/milk.jpg",
    nutrients: ["Calcium", "Protein", "Vitamin D", "Vitamin B12"],
    benefits: [
      "Provides Calcium",
      "Provides Protein",
      "Provides Vitamin B12",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Milk provides protein, calcium, vitamin B12, and, when fortified, vitamin D.",
  },

  {
    id: 23,
    name: "Fatty Fish",
    slug: "fatty-fish",
    image: "/images/foods/fatty-fish.jpg",
    nutrients: ["Omega-3 Fatty Acids", "Vitamin D", "Protein"],
    benefits: [
      "Provides Omega-3 Fatty Acids",
      "Provides Vitamin D",
      "Provides High-Quality Protein",
    ],
    relatedSymptoms: [
      "Fatigue",
      "Weakness",
    ],
    description:
      "Fatty fish such as salmon, sardines, and mackerel provide protein, omega-3 fatty acids, and vitamin D.",
  },

  {
    id: 24,
    name: "Fish",
    slug: "fish",
    image: "/images/foods/fish.jpg",
    nutrients: ["Protein", "Vitamin B12", "Vitamin D"],
    benefits: [
      "Provides High-Quality Protein",
      "Provides Vitamin B12",
      "Provides Vitamin D",
    ],
    relatedSymptoms: [
      "Fatigue",
      "Weakness",
    ],
    description:
      "Fish provides high-quality protein and can be an important source of vitamin B12, vitamin D, and other nutrients.",
  },

  {
    id: 25,
    name: "Yogurt",
    slug: "yogurt",
    image: "/images/foods/yogurt.jpg",
    nutrients: ["Protein", "Calcium", "Vitamin B12"],
    benefits: [
      "Provides Protein",
      "Provides Calcium",
      "Supports A Balanced Diet",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Yogurt provides protein, calcium, vitamin B12, and other nutrients. Some varieties also contain live cultures.",
  },

  {
    id: 26,
    name: "Cheese",
    slug: "cheese",
    image: "/images/foods/cheese.jpg",
    nutrients: ["Calcium", "Protein", "Vitamin B12"],
    benefits: [
      "Provides Calcium",
      "Provides Protein",
      "Provides Vitamin B12",
    ],
    relatedSymptoms: [
      "Weakness",
      "Fatigue",
    ],
    description:
      "Cheese provides protein, calcium, vitamin B12, and other nutrients, although nutritional content varies by type.",
  },

  {
    id: 27,
    name: "Berries",
    slug: "berries",
    image: "/images/foods/berries.jpg",
    nutrients: ["Vitamin C", "Fiber", "Antioxidants"],
    benefits: [
      "Provides Vitamin C",
      "Provides Fiber",
      "Contains Antioxidant Compounds",
    ],
    relatedSymptoms: [
      "Fatigue",
      "Acne",
    ],
    description:
      "Berries such as strawberries, blueberries, raspberries, and blackberries provide fiber, vitamin C, and naturally occurring antioxidant compounds.",
  },

  {
    id: 28,
    name: "Fruits",
    slug: "fruits",
    image: "/images/foods/fruits.jpg",
    nutrients: ["Vitamin C", "Fiber", "Folate"],
    benefits: [
      "Provides Fiber",
      "Provides Vitamins",
      "Adds Variety To The Diet",
    ],
    relatedSymptoms: [
      "Constipation",
      "Fatigue",
    ],
    description:
      "A variety of fruits can provide fiber, vitamins, minerals, and naturally occurring plant compounds.",
  },

  {
    id: 29,
    name: "Whole Grains",
    slug: "whole-grains",
    image: "/images/foods/whole-grains.jpg",
    nutrients: ["Fiber", "Magnesium", "Iron", "B Vitamins"],
    benefits: [
      "Provides Dietary Fiber",
      "Provides Magnesium",
      "Provides B Vitamins",
    ],
    relatedSymptoms: [
      "Constipation",
      "Fatigue",
    ],
    description:
      "Whole grains contain the grain kernel and provide fiber, magnesium, B vitamins, and other nutrients.",
  },

  {
    id: 30,
    name: "Oats",
    slug: "oats",
    image: "/images/foods/oats.jpg",
    nutrients: ["Fiber", "Iron", "Magnesium", "Protein"],
    benefits: [
      "Provides Dietary Fiber",
      "Provides Magnesium",
      "Provides Plant-Based Protein",
    ],
    relatedSymptoms: [
      "Constipation",
      "Fatigue",
    ],
    description:
      "Oats are whole grains that provide fiber, magnesium, iron, protein, and other nutrients.",
  },

  {
    id: 31,
    name: "Brown Rice",
    slug: "brown-rice",
    image: "/images/foods/brown-rice.jpg",
    nutrients: ["Fiber", "Magnesium", "B Vitamins"],
    benefits: [
      "Provides Dietary Fiber",
      "Provides Magnesium",
      "Provides B Vitamins",
    ],
    relatedSymptoms: [
      "Constipation",
      "Weakness",
    ],
    description:
      "Brown rice is a whole grain that provides fiber, magnesium, B vitamins, and other nutrients.",
  },

  {
    id: 32,
    name: "Quinoa",
    slug: "quinoa",
    image: "/images/foods/quinoa.jpg",
    nutrients: ["Protein", "Iron", "Magnesium", "Fiber"],
    benefits: [
      "Provides Plant-Based Protein",
      "Provides Iron",
      "Provides Fiber",
    ],
    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
    description:
      "Quinoa is a nutrient-rich seed commonly used as a grain and provides protein, fiber, iron, magnesium, and other nutrients.",
  },

  {
    id: 33,
    name: "Whole Wheat Pasta",
    slug: "whole-wheat-pasta",
    image: "/images/foods/whole-wheat-pasta.jpg",
    nutrients: ["Fiber", "Iron", "B Vitamins"],
    benefits: [
      "Provides Dietary Fiber",
      "Provides B Vitamins",
      "Provides Plant-Based Iron",
    ],
    relatedSymptoms: [
      "Constipation",
      "Fatigue",
    ],
    description:
      "Whole wheat pasta is made from whole-grain wheat and provides fiber, B vitamins, iron, and other nutrients.",
  },
    {
    id: 34,
    name: "Whole Wheat Bread",
    slug: "whole-wheat-bread",
    image: "/images/foods/whole-wheat-bread.jpg",
    nutrients: ["Fiber", "B Vitamins", "Protein"],
    benefits: [
      "Provides Dietary Fiber",
      "Provides B Vitamins",
      "Provides Plant Protein",
    ],
    relatedSymptoms: [
      "Fatigue",
      "Weakness",
      "Constipation",
    ],
    description:
      "Whole wheat bread is made from whole grains and provides dietary fiber, B vitamins, and other nutrients that can contribute to a balanced diet.",
  },
];