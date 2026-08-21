import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Iron Rich Spinach Omelette",
    slug: "iron-rich-spinach-omelette",
    description:
      "A simple protein-rich omelette made with spinach and eggs, providing iron, protein, vitamin B12, and folate.",
    image: "/images/recipes/iron-rich-spinach-omelette.jpg",

    prepTime: "10 Minutes",
    cookTime: "10 Minutes",
    servings: 2,

    ingredients: [
      "2 Eggs",
      "1 Cup Spinach",
      "1 Small Onion",
      "1 Teaspoon Olive Oil",
      "Salt To Taste",
      "Black Pepper To Taste",
    ],

    instructions: [
      "Wash And Chop The Spinach And Onion.",
      "Beat The Eggs In A Bowl And Season With Salt And Black Pepper.",
      "Heat Olive Oil In A Pan Over Medium Heat.",
      "Add The Onion And Spinach And Cook Until Soft.",
      "Pour The Beaten Eggs Over The Vegetables.",
      "Cook Until The Eggs Are Set, Then Fold The Omelette.",
      "Serve Warm.",
    ],

    nutrients: [
      "Iron",
      "Protein",
      "Vitamin B12",
      "Folate",
    ],

    relatedFoods: [
      "Spinach",
      "Eggs",
    ],

    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 2,
    name: "Lentil Spinach Curry",
    slug: "lentil-spinach-curry",
    description:
      "A nutritious combination of lentils and spinach providing plant-based iron, protein, fiber, and folate.",
    image: "/images/recipes/lentil-spinach-curry.jpg",

    prepTime: "15 Minutes",
    cookTime: "25 Minutes",
    servings: 4,

    ingredients: [
      "1 Cup Lentils",
      "2 Cups Spinach",
      "1 Small Onion",
      "2 Tomatoes",
      "2 Cloves Garlic",
      "1 Teaspoon Olive Oil",
      "1 Teaspoon Cumin",
      "Salt To Taste",
    ],

    instructions: [
      "Rinse The Lentils Thoroughly.",
      "Cook The Lentils In Water Until Tender.",
      "Heat Olive Oil In A Pan And Sauté The Onion And Garlic.",
      "Add The Tomatoes And Cumin And Cook Until Soft.",
      "Add The Cooked Lentils And Mix Well.",
      "Add Spinach And Cook Until It Wilts.",
      "Season With Salt And Simmer For A Few Minutes.",
      "Serve Warm.",
    ],

    nutrients: [
      "Iron",
      "Protein",
      "Fiber",
      "Folate",
    ],

    relatedFoods: [
      "Lentils",
      "Spinach",
    ],

    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 3,
    name: "Iron Rich Bean Salad",
    slug: "iron-rich-bean-salad",
    description:
      "A fresh bean salad combining beans and vegetables for iron, fiber, folate, and vitamin C.",
    image: "/images/recipes/iron-rich-bean-salad.jpg",

    prepTime: "15 Minutes",
    cookTime: "5 Minutes",
    servings: 2,

    ingredients: [
      "1 Cup Cooked Beans",
      "1 Cup Broccoli",
      "1 Tomato",
      "1 Small Cucumber",
      "1 Tablespoon Lemon Juice",
      "1 Teaspoon Olive Oil",
      "Salt To Taste",
    ],

    instructions: [
      "Wash And Chop The Broccoli, Tomato, And Cucumber.",
      "Steam Or Lightly Cook The Broccoli Until Tender.",
      "Place The Cooked Beans And Vegetables In A Bowl.",
      "Add Lemon Juice And Olive Oil.",
      "Season With Salt And Mix Gently.",
      "Serve Fresh.",
    ],

    nutrients: [
      "Iron",
      "Fiber",
      "Vitamin C",
      "Folate",
    ],

    relatedFoods: [
      "Beans",
      "Broccoli",
    ],

    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 4,
    name: "Pumpkin Seed Energy Bowl",
    slug: "pumpkin-seed-energy-bowl",
    description:
      "A nutrient-dense bowl featuring pumpkin seeds, yogurt, and fruit for protein, iron, magnesium, and sustained energy.",
    image: "/images/recipes/pumpkin-seed-energy-bowl.jpg",

    prepTime: "10 Minutes",
    cookTime: "0 Minutes",
    servings: 1,

    ingredients: [
      "2 Tablespoons Pumpkin Seeds",
      "1 Cup Plain Yogurt",
      "1 Banana",
      "1/2 Cup Berries",
      "1 Teaspoon Honey",
    ],

    instructions: [
      "Add Plain Yogurt To A Serving Bowl.",
      "Slice The Banana And Add It To The Bowl.",
      "Add The Berries And Pumpkin Seeds.",
      "Drizzle With Honey.",
      "Mix Gently And Serve Immediately.",
    ],

    nutrients: [
      "Iron",
      "Magnesium",
      "Zinc",
      "Protein",
    ],

    relatedFoods: [
      "Pumpkin Seeds",
      "Yogurt",
      "Berries",
    ],

    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 5,
    name: "Salmon Avocado Bowl",
    slug: "salmon-avocado-bowl",
    description:
      "A balanced bowl combining salmon, avocado, vegetables, and whole grains for protein, vitamin D, omega-3 fatty acids, and fiber.",
    image: "/images/recipes/salmon-avocado-bowl.jpg",

    prepTime: "15 Minutes",
    cookTime: "15 Minutes",
    servings: 2,

    ingredients: [
      "200 g Salmon",
      "1 Avocado",
      "1 Cup Cooked Brown Rice",
      "1/2 Cup Broccoli",
      "1 Small Cucumber",
      "1 Tablespoon Lemon Juice",
      "1 Teaspoon Olive Oil",
      "Black Pepper To Taste",
    ],

    instructions: [
      "Season The Salmon With Black Pepper And A Little Salt.",
      "Cook The Salmon In A Pan With Olive Oil Until Fully Cooked.",
      "Cook Or Steam The Broccoli Until Tender.",
      "Slice The Avocado And Cucumber.",
      "Add Brown Rice To A Serving Bowl.",
      "Arrange The Salmon, Broccoli, Avocado, And Cucumber Over The Rice.",
      "Add Lemon Juice And Serve.",
    ],

    nutrients: [
      "Protein",
      "Vitamin D",
      "Omega-3 Fatty Acids",
      "Fiber",
    ],

    relatedFoods: [
      "Salmon",
      "Avocado",
      "Brown Rice",
      "Broccoli",
    ],

    relatedSymptoms: [
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 6,
    name: "Greek Yogurt Berry Bowl",
    slug: "greek-yogurt-berry-bowl",
    description:
      "A simple breakfast bowl made with Greek yogurt, berries, oats, and nuts for protein, fiber, calcium, and antioxidants.",
    image: "/images/recipes/greek-yogurt-berry-bowl.jpg",

    prepTime: "5 Minutes",
    cookTime: "0 Minutes",
    servings: 1,

    ingredients: [
      "1 Cup Greek Yogurt",
      "1/2 Cup Berries",
      "1/4 Cup Oats",
      "1 Tablespoon Almonds",
      "1 Teaspoon Honey",
    ],

    instructions: [
      "Add Greek Yogurt To A Bowl.",
      "Add The Berries And Oats.",
      "Sprinkle Almonds Over The Yogurt.",
      "Drizzle With Honey.",
      "Serve Immediately.",
    ],

    nutrients: [
      "Protein",
      "Calcium",
      "Fiber",
      "Antioxidants",
    ],

    relatedFoods: [
      "Greek Yogurt",
      "Berries",
      "Oats",
      "Almonds",
    ],

    relatedSymptoms: [
      "Fatigue",
      "Weakness",
      "Constipation",
    ],
  },

  {
    id: 7,
    name: "Chickpea Vegetable Salad",
    slug: "chickpea-vegetable-salad",
    description:
      "A refreshing chickpea and vegetable salad providing plant protein, fiber, folate, and vitamin C.",
    image: "/images/recipes/chickpea-vegetable-salad.jpg",

    prepTime: "15 Minutes",
    cookTime: "5 Minutes",
    servings: 2,

    ingredients: [
      "1 Cup Cooked Chickpeas",
      "1/2 Cup Bell Peppers",
      "1/2 Cup Cucumber",
      "1 Tomato",
      "1/4 Cup Spinach",
      "1 Tablespoon Lemon Juice",
      "1 Teaspoon Olive Oil",
      "Salt To Taste",
    ],

    instructions: [
      "Wash And Chop The Bell Peppers, Cucumber, Tomato, And Spinach.",
      "Add The Cooked Chickpeas To A Large Bowl.",
      "Add All The Chopped Vegetables.",
      "Add Lemon Juice And Olive Oil.",
      "Season With Salt.",
      "Mix Everything Gently.",
      "Serve Fresh.",
    ],

    nutrients: [
      "Protein",
      "Fiber",
      "Folate",
      "Vitamin C",
    ],

    relatedFoods: [
      "Bell Peppers",
      "Spinach",
    ],

    relatedSymptoms: [
      "Constipation",
      "Fatigue",
    ],
  },

  {
    id: 8,
    name: "Oat Banana Breakfast Bowl",
    slug: "oat-banana-breakfast-bowl",
    description:
      "A filling breakfast made with oats, banana, milk, and nuts providing fiber, magnesium, protein, and B vitamins.",
    image: "/images/recipes/oat-banana-breakfast-bowl.jpg",

    prepTime: "5 Minutes",
    cookTime: "10 Minutes",
    servings: 1,

    ingredients: [
      "1/2 Cup Oats",
      "1 Cup Milk",
      "1 Banana",
      "1 Tablespoon Almonds",
      "1 Teaspoon Honey",
      "Cinnamon To Taste",
    ],

    instructions: [
      "Add Oats And Milk To A Saucepan.",
      "Cook Over Medium Heat Until The Oats Become Soft And Creamy.",
      "Slice The Banana.",
      "Pour The Oats Into A Bowl.",
      "Top With Banana And Almonds.",
      "Add Honey And Cinnamon.",
      "Serve Warm.",
    ],

    nutrients: [
      "Fiber",
      "Magnesium",
      "Protein",
      "B Vitamins",
    ],

    relatedFoods: [
      "Oats",
      "Milk",
      "Almonds",
    ],

    relatedSymptoms: [
      "Constipation",
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 9,
    name: "Quinoa Vegetable Bowl",
    slug: "quinoa-vegetable-bowl",
    description:
      "A balanced quinoa bowl with vegetables providing plant protein, iron, magnesium, fiber, and vitamin C.",
    image: "/images/recipes/quinoa-vegetable-bowl.jpg",

    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 2,

    ingredients: [
      "1 Cup Cooked Quinoa",
      "1/2 Cup Broccoli",
      "1/2 Cup Bell Peppers",
      "1/2 Cup Spinach",
      "1 Tomato",
      "1 Tablespoon Lemon Juice",
      "1 Teaspoon Olive Oil",
    ],

    instructions: [
      "Cook The Quinoa According To The Package Instructions.",
      "Wash And Chop The Vegetables.",
      "Steam Or Lightly Cook The Broccoli.",
      "Heat Olive Oil In A Pan.",
      "Add The Bell Peppers, Spinach, And Tomato.",
      "Cook The Vegetables Until Tender.",
      "Add Cooked Quinoa And Mix Well.",
      "Finish With Lemon Juice And Serve.",
    ],

    nutrients: [
      "Protein",
      "Iron",
      "Magnesium",
      "Fiber",
    ],

    relatedFoods: [
      "Quinoa",
      "Broccoli",
      "Bell Peppers",
      "Spinach",
    ],

    relatedSymptoms: [
      "Iron Deficiency",
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 10,
    name: "Egg And Avocado Toast",
    slug: "egg-and-avocado-toast",
    description:
      "Whole wheat toast topped with eggs and avocado for protein, healthy fats, fiber, and B vitamins.",
    image: "/images/recipes/egg-and-avocado-toast.jpg",

    prepTime: "5 Minutes",
    cookTime: "10 Minutes",
    servings: 1,

    ingredients: [
      "2 Eggs",
      "2 Slices Whole Wheat Bread",
      "1/2 Avocado",
      "1 Teaspoon Lemon Juice",
      "Black Pepper To Taste",
      "Salt To Taste",
    ],

    instructions: [
      "Toast The Whole Wheat Bread Until Lightly Crisp.",
      "Cook The Eggs According To Your Preference.",
      "Mash The Avocado With Lemon Juice.",
      "Season The Avocado With Salt And Black Pepper.",
      "Spread The Avocado Over The Toast.",
      "Top With The Cooked Eggs.",
      "Serve Immediately.",
    ],

    nutrients: [
      "Protein",
      "Fiber",
      "B Vitamins",
      "Vitamin E",
    ],

    relatedFoods: [
      "Eggs",
      "Avocado",
      "Whole Wheat Bread",
    ],

    relatedSymptoms: [
      "Fatigue",
      "Weakness",
    ],
  },

  {
    id: 11,
    name: "Berry Oat Smoothie",
    slug: "berry-oat-smoothie",
    description:
      "A refreshing smoothie made with berries, oats, yogurt, and milk providing fiber, calcium, protein, and vitamin C.",
    image: "/images/recipes/berry-oat-smoothie.jpg",

    prepTime: "5 Minutes",
    cookTime: "0 Minutes",
    servings: 1,

    ingredients: [
      "1/2 Cup Berries",
      "1/4 Cup Oats",
      "1/2 Cup Yogurt",
      "1/2 Cup Milk",
      "1/2 Banana",
    ],

    instructions: [
      "Add Berries, Oats, Yogurt, Milk, And Banana To A Blender.",
      "Blend Until Smooth And Creamy.",
      "Add A Little More Milk If Needed For Desired Consistency.",
      "Pour Into A Glass.",
      "Serve Immediately.",
    ],

    nutrients: [
      "Fiber",
      "Calcium",
      "Protein",
      "Vitamin C",
    ],

    relatedFoods: [
      "Berries",
      "Oats",
      "Yogurt",
      "Milk",
    ],

    relatedSymptoms: [
      "Fatigue",
      "Constipation",
    ],
  },

  {
    id: 12,
    name: "Broccoli Cheese Omelette",
    slug: "broccoli-cheese-omelette",
    description:
      "A protein-rich omelette with broccoli and cheese providing protein, calcium, vitamin C, and vitamin B12.",
    image: "/images/recipes/broccoli-cheese-omelette.jpg",

    prepTime: "10 Minutes",
    cookTime: "10 Minutes",
    servings: 2,

    ingredients: [
      "3 Eggs",
      "1 Cup Broccoli",
      "1/4 Cup Grated Cheese",
      "1 Small Onion",
      "1 Teaspoon Olive Oil",
      "Black Pepper To Taste",
      "Salt To Taste",
    ],

    instructions: [
      "Wash And Chop The Broccoli And Onion.",
      "Steam Or Lightly Cook The Broccoli Until Tender.",
      "Beat The Eggs In A Bowl And Season With Salt And Black Pepper.",
      "Heat Olive Oil In A Pan.",
      "Sauté The Onion And Broccoli.",
      "Pour The Beaten Eggs Over The Vegetables.",
      "Sprinkle Grated Cheese Over The Eggs.",
      "Cook Until The Eggs Are Set And The Cheese Melts.",
      "Fold The Omelette And Serve Warm.",
    ],

    nutrients: [
      "Protein",
      "Calcium",
      "Vitamin C",
      "Vitamin B12",
    ],

    relatedFoods: [
      "Broccoli",
      "Cheese",
      "Eggs",
    ],

    relatedSymptoms: [
      "Fatigue",
      "Weakness",
    ],
  },
];