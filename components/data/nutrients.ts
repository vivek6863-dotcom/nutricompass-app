import { Nutrient } from "@/types/nutrient";

export const nutrients: Nutrient[] = [
  {
    id: 1,
    name: "Iron",
    slug: "iron",
    description:
      "Iron is an essential mineral that helps produce hemoglobin, which carries oxygen throughout the body.",
    image: "/images/nutrients/iron.jpg",

    benefits: [
      "Supports Healthy Red Blood Cells",
      "Supports Normal Energy Metabolism",
      "Supports Normal Cognitive Function",
      "Helps Transport Oxygen",
    ],

    foodSources: [
      "Spinach",
      "Lean Red Meat",
      "Lentils",
      "Pumpkin Seeds",
      "Beans",
      "Broccoli",
      "Oats",
      "Quinoa",
    ],

    deficiencySymptoms: [
      "Fatigue",
      "Weakness",
      "Pale Skin",
      "Dizziness",
      "Shortness Of Breath",
    ],

    dailyRequirement:
      "8 mg (Adult Men), 18 mg (Adult Women)",
  },

  {
    id: 2,
    name: "Vitamin C",
    slug: "vitamin-c",
    description:
      "Vitamin C is an essential vitamin and antioxidant that supports immune function, collagen formation, and iron absorption.",
    image: "/images/nutrients/vitamin-c.jpg",

    benefits: [
      "Supports Normal Immune Function",
      "Supports Collagen Formation",
      "Improves Absorption Of Plant-Based Iron",
      "Provides Antioxidant Protection",
    ],

    foodSources: [
      "Broccoli",
      "Bell Peppers",
      "Oranges",
      "Kiwi",
      "Strawberries",
      "Berries",
    ],

    deficiencySymptoms: [
      "Low Immunity",
      "Bleeding Gums",
      "Slow Wound Healing",
      "Fatigue",
    ],

    dailyRequirement:
      "90 mg (Adult Men), 75 mg (Adult Women)",
  },

  {
    id: 3,
    name: "Vitamin B12",
    slug: "vitamin-b12",
    description:
      "Vitamin B12 is an essential vitamin that supports normal nerve function and red blood cell formation.",
    image: "/images/nutrients/vitamin-b12.jpg",

    benefits: [
      "Supports Normal Nerve Function",
      "Supports Red Blood Cell Formation",
      "Supports Normal Energy Metabolism",
      "Supports Normal DNA Formation",
    ],

    foodSources: [
      "Eggs",
      "Milk",
      "Yogurt",
      "Greek Yogurt",
      "Cheese",
      "Fish",
      "Salmon",
      "Lean Red Meat",
    ],

    deficiencySymptoms: [
      "Fatigue",
      "Weakness",
      "Numbness",
      "Tingling",
      "Memory Problems",
    ],

    dailyRequirement:
      "2.4 mcg For Adults",
  },

  {
    id: 4,
    name: "Folate",
    slug: "folate",
    description:
      "Folate is a B vitamin that supports DNA formation, cell division, and normal red blood cell production.",
    image: "/images/nutrients/folate.jpg",

    benefits: [
      "Supports Cell Division",
      "Supports DNA Formation",
      "Supports Red Blood Cell Formation",
      "Supports Normal Tissue Growth",
    ],

    foodSources: [
      "Spinach",
      "Beans",
      "Lentils",
      "Broccoli",
      "Avocado",
      "Oranges",
      "Strawberries",
    ],

    deficiencySymptoms: [
      "Fatigue",
      "Weakness",
      "Pale Skin",
      "Mouth Sores",
    ],

    dailyRequirement:
      "400 mcg DFE For Adults",
  },

  {
    id: 5,
    name: "Vitamin D",
    slug: "vitamin-d",
    description:
      "Vitamin D helps the body absorb calcium and supports normal bones, muscles, and immune function.",
    image: "/images/nutrients/vitamin-d.jpg",

    benefits: [
      "Supports Bone Health",
      "Supports Calcium Absorption",
      "Supports Normal Muscle Function",
      "Supports Normal Immune Function",
    ],

    foodSources: [
      "Salmon",
      "Fatty Fish",
      "Eggs",
      "Fortified Milk",
      "Milk",
      "Mushrooms",
      "Yogurt",
    ],

    deficiencySymptoms: [
      "Fatigue",
      "Muscle Weakness",
      "Bone Pain",
      "Frequent Illness",
    ],

    dailyRequirement:
      "15 mcg (600 IU) For Adults",
  },

  {
    id: 6,
    name: "Calcium",
    slug: "calcium",
    description:
      "Calcium is an essential mineral needed for strong bones and teeth, muscle function, and normal nerve signaling.",
    image: "/images/nutrients/calcium.jpg",

    benefits: [
      "Supports Strong Bones",
      "Supports Healthy Teeth",
      "Supports Normal Muscle Function",
      "Supports Normal Nerve Function",
    ],

    foodSources: [
      "Milk",
      "Fortified Milk",
      "Yogurt",
      "Greek Yogurt",
      "Cheese",
      "Broccoli",
    ],

    deficiencySymptoms: [
      "Muscle Cramps",
      "Weak Bones",
      "Tingling",
      "Muscle Weakness",
    ],

    dailyRequirement:
      "1,000 mg For Most Adults",
  },

  {
    id: 7,
    name: "Magnesium",
    slug: "magnesium",
    description:
      "Magnesium is an essential mineral involved in muscle function, nerve function, energy metabolism, and many biochemical reactions.",
    image: "/images/nutrients/magnesium.jpg",

    benefits: [
      "Supports Normal Muscle Function",
      "Supports Normal Nerve Function",
      "Supports Energy Metabolism",
      "Supports Bone Health",
    ],

    foodSources: [
      "Pumpkin Seeds",
      "Almonds",
      "Nuts",
      "Spinach",
      "Whole Grains",
      "Oats",
      "Quinoa",
      "Brown Rice",
    ],

    deficiencySymptoms: [
      "Muscle Cramps",
      "Weakness",
      "Fatigue",
      "Loss Of Appetite",
    ],

    dailyRequirement:
      "400–420 mg (Adult Men), 310–320 mg (Adult Women)",
  },

  {
    id: 8,
    name: "Zinc",
    slug: "zinc",
    description:
      "Zinc is an essential mineral that supports immune function, wound healing, and normal growth and development.",
    image: "/images/nutrients/zinc.jpg",

    benefits: [
      "Supports Normal Immune Function",
      "Supports Wound Healing",
      "Supports Normal Cell Growth",
      "Supports Normal Metabolism",
    ],

    foodSources: [
      "Pumpkin Seeds",
      "Nuts",
      "Lean Red Meat",
      "Beans",
      "Lentils",
      "Cheese",
    ],

    deficiencySymptoms: [
      "Weak Immunity",
      "Slow Wound Healing",
      "Hair Loss",
      "Loss Of Appetite",
    ],

    dailyRequirement:
      "11 mg (Adult Men), 8 mg (Adult Women)",
  },

  {
    id: 9,
    name: "Vitamin A",
    slug: "vitamin-a",
    description:
      "Vitamin A supports normal vision, immune function, skin health, and cell growth.",
    image: "/images/nutrients/vitamin-a.jpg",

    benefits: [
      "Supports Normal Vision",
      "Supports Normal Immune Function",
      "Supports Healthy Skin",
      "Supports Normal Cell Growth",
    ],

    foodSources: [
      "Carrots",
      "Sweet Potatoes",
      "Spinach",
      "Broccoli",
      "Eggs",
      "Milk",
    ],

    deficiencySymptoms: [
      "Poor Night Vision",
      "Dry Eyes",
      "Dry Skin",
      "Weak Immunity",
    ],

    dailyRequirement:
      "900 mcg RAE (Adult Men), 700 mcg RAE (Adult Women)",
  },

  {
    id: 10,
    name: "Vitamin E",
    slug: "vitamin-e",
    description:
      "Vitamin E is an antioxidant that helps protect cells from oxidative damage and supports immune function.",
    image: "/images/nutrients/vitamin-e.jpg",

    benefits: [
      "Provides Antioxidant Protection",
      "Supports Normal Immune Function",
      "Supports Cell Protection",
      "Supports Healthy Skin",
    ],

    foodSources: [
      "Almonds",
      "Nuts",
      "Avocado",
      "Spinach",
      "Broccoli",
    ],

    deficiencySymptoms: [
      "Muscle Weakness",
      "Vision Problems",
      "Numbness",
      "Tingling",
    ],

    dailyRequirement:
      "15 mg For Adults",
  },

  {
    id: 11,
    name: "Potassium",
    slug: "potassium",
    description:
      "Potassium is an essential mineral and electrolyte that supports normal muscle, nerve, and heart function.",
    image: "/images/nutrients/potassium.jpg",

    benefits: [
      "Supports Normal Muscle Function",
      "Supports Normal Nerve Function",
      "Supports Normal Fluid Balance",
      "Supports Heart Function",
    ],

    foodSources: [
      "Avocado",
      "Sweet Potatoes",
      "Spinach",
      "Beans",
      "Lentils",
      "Milk",
      "Yogurt",
    ],

    deficiencySymptoms: [
      "Muscle Weakness",
      "Muscle Cramps",
      "Fatigue",
      "Irregular Heartbeat",
    ],

    dailyRequirement:
      "3,400 mg (Adult Men), 2,600 mg (Adult Women)",
  },

  {
    id: 12,
    name: "Fiber",
    slug: "fiber",
    description:
      "Dietary fiber is found mainly in plant foods and supports healthy digestion and regular bowel movements.",
    image: "/images/nutrients/fiber.jpg",

    benefits: [
      "Supports Healthy Digestion",
      "Supports Regular Bowel Movements",
      "Helps Increase Satiety",
      "Supports A Balanced Diet",
    ],

    foodSources: [
      "Beans",
      "Lentils",
      "Broccoli",
      "Spinach",
      "Oats",
      "Whole Grains",
      "Brown Rice",
      "Fruits",
      "Berries",
      "Avocado",
    ],

    deficiencySymptoms: [
      "Constipation",
      "Bloating",
      "Irregular Bowel Movements",
    ],

    dailyRequirement:
      "About 25–38 g For Adults",
  },

  {
    id: 13,
    name: "Protein",
    slug: "protein",
    description:
      "Protein is an essential macronutrient needed for muscle, tissue repair, enzymes, hormones, and many other functions.",
    image: "/images/nutrients/protein.jpg",

    benefits: [
      "Supports Muscle Health",
      "Supports Tissue Repair",
      "Supports Normal Growth",
      "Helps Maintain Muscle Mass",
    ],

    foodSources: [
      "Eggs",
      "Lean Red Meat",
      "Salmon",
      "Fish",
      "Lentils",
      "Beans",
      "Greek Yogurt",
      "Yogurt",
      "Milk",
      "Nuts",
      "Quinoa",
    ],

    deficiencySymptoms: [
      "Muscle Weakness",
      "Reduced Muscle Mass",
      "Fatigue",
      "Poor Recovery",
    ],

    dailyRequirement:
      "General Adult Reference: About 0.8 g Per Kg Body Weight Per Day",
  },

  {
    id: 14,
    name: "Omega-3 Fatty Acids",
    slug: "omega-3-fatty-acids",
    description:
      "Omega-3 fatty acids are essential fats found in foods such as fatty fish, nuts, and seeds.",
    image: "/images/nutrients/omega-3-fatty-acids.jpg",

    benefits: [
      "Supports Heart Health",
      "Supports Brain Health",
      "Supports Normal Cell Function",
      "Provides Essential Fatty Acids",
    ],

    foodSources: [
      "Salmon",
      "Fatty Fish",
      "Fish",
      "Nuts",
    ],

    deficiencySymptoms: [
      "Dry Skin",
      "Fatigue",
      "Poor Concentration",
    ],

    dailyRequirement:
      "No Established Daily Value For Total Omega-3; Needs Vary By Fatty Acid",
  },

  {
    id: 15,
    name: "Choline",
    slug: "choline",
    description:
      "Choline is an essential nutrient involved in normal cell structure, neurotransmitter production, and fat metabolism.",
    image: "/images/nutrients/choline.jpg",

    benefits: [
      "Supports Normal Cell Structure",
      "Supports Normal Brain Function",
      "Supports Neurotransmitter Production",
      "Supports Normal Fat Metabolism",
    ],

    foodSources: [
      "Eggs",
      "Fish",
      "Lean Red Meat",
      "Milk",
      "Cheese",
    ],

    deficiencySymptoms: [
      "Muscle Damage",
      "Fatty Liver",
      "Fatigue",
    ],

    dailyRequirement:
      "550 mg (Adult Men), 425 mg (Adult Women)",
  },

  {
    id: 16,
    name: "Selenium",
    slug: "selenium",
    description:
      "Selenium is an essential trace mineral that supports thyroid function, antioxidant protection, and immune function.",
    image: "/images/nutrients/selenium.jpg",

    benefits: [
      "Supports Thyroid Function",
      "Supports Antioxidant Protection",
      "Supports Normal Immune Function",
      "Supports Normal Metabolism",
    ],

    foodSources: [
      "Fish",
      "Salmon",
      "Eggs",
      "Milk",
      "Nuts",
      "Mushrooms",
    ],

    deficiencySymptoms: [
      "Muscle Weakness",
      "Fatigue",
      "Hair Changes",
      "Weak Immunity",
    ],

    dailyRequirement:
      "55 mcg For Adults",
  },

  {
    id: 17,
    name: "B Vitamins",
    slug: "b-vitamins",
    description:
      "B vitamins are a group of essential vitamins that help support energy metabolism, nervous system function, and normal cell processes.",
    image: "/images/nutrients/b-vitamins.jpg",

    benefits: [
      "Supports Energy Metabolism",
      "Supports Normal Nervous System Function",
      "Supports Red Blood Cell Formation",
      "Supports Normal Cell Function",
    ],

    foodSources: [
      "Whole Grains",
      "Oats",
      "Brown Rice",
      "Eggs",
      "Milk",
      "Fish",
      "Lean Red Meat",
      "Lentils",
    ],

    deficiencySymptoms: [
      "Fatigue",
      "Weakness",
      "Poor Concentration",
      "Tingling",
    ],

    dailyRequirement:
      "Requirements Vary By Individual B Vitamin",
  },

  {
    id: 18,
    name: "Antioxidants",
    slug: "antioxidants",
    description:
      "Antioxidants are compounds found in many plant foods that help protect cells from oxidative stress.",
    image: "/images/nutrients/antioxidants.jpg",

    benefits: [
      "Supports Cellular Protection",
      "Supports A Varied Diet",
      "Provides Plant Compounds",
      "Supports Overall Nutritional Health",
    ],

    foodSources: [
      "Blueberries",
      "Berries",
      "Strawberries",
      "Broccoli",
      "Spinach",
      "Oranges",
      "Kiwi",
    ],

    deficiencySymptoms: [
      "No Single Deficiency Syndrome",
      "Poor Diet Quality",
    ],

    dailyRequirement:
      "No Established Daily Requirement For Antioxidants As A Group",
  },
];