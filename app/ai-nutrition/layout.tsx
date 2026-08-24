import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Nutrition Assistant | Food, Nutrient & Healthy Eating Guidance",

  description:
    "Ask NutriCompass AI Nutrition questions about foods, nutrients, healthy eating, meal ideas, and nutrition-related topics. Get simple, educational nutrition guidance.",

  alternates: {
    canonical: "/ai-nutrition",
  },

  openGraph: {
    type: "website",
    url: "https://nutricompass.in/ai-nutrition",
    siteName: "NutriCompass",
    title:
      "AI Nutrition Assistant | Food, Nutrient & Healthy Eating Guidance",
    description:
      "Ask NutriCompass AI Nutrition questions about foods, nutrients, healthy eating, meal ideas, and nutrition-related topics. Get simple, educational nutrition guidance.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AI Nutrition Assistant | Food, Nutrient & Healthy Eating Guidance",
    description:
      "Ask NutriCompass AI Nutrition questions about foods, nutrients, healthy eating, meal ideas, and nutrition-related topics. Get simple, educational nutrition guidance.",
  },
};

export default function AiNutritionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}