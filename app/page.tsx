import type { Metadata } from "next";

import HeroCarousel from "../components/HeroCarousel";
import CategorySection from "../components/CategorySection";
import TrendingSymptoms from "../components/TrendingSymptoms";
import PopularFoods from "../components/PopularFoods";
import LatestArticles from "../components/LatestArticles";

export const metadata: Metadata = {
  title: "Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",

  description:
    "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes with NutriCompass.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://nutricompass.in/",
    siteName: "NutriCompass",
    title: "Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    description:
      "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes with NutriCompass.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nutrition, Foods, Nutrients, Symptoms & Healthy Recipes",
    description:
      "Explore nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes with NutriCompass.",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NutriCompass",
  url: "https://nutricompass.in/",
  description:
    "Nutrition information, healthy foods, essential nutrients, common symptoms, and healthy recipes.",
};

export default function Home() {
  return (
    <>
      {/* Website Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <HeroCarousel />

        <CategorySection />

        <TrendingSymptoms />

        <PopularFoods />

        <LatestArticles />
      </div>
    </>
  );
}