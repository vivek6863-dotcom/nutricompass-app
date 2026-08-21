import type { MetadataRoute } from "next";
import { foods } from "@/components/data/foods";
import { nutrients } from "@/components/data/nutrients";
import { recipes } from "@/components/data/recipes";
import { symptoms } from "@/components/data/symptoms";
import { articles } from "@/components/data/articles";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* =========================================================
     STATIC PAGES
  ========================================================= */

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/foods`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/nutrients`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/recipes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/symptoms`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /* =========================================================
     FOOD PAGES
  ========================================================= */

  const foodPages: MetadataRoute.Sitemap =
    foods.map((food) => ({
      url: `${SITE_URL}/foods/${food.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  /* =========================================================
     NUTRIENT PAGES
  ========================================================= */

  const nutrientPages: MetadataRoute.Sitemap =
    nutrients.map((nutrient) => ({
      url: `${SITE_URL}/nutrients/${nutrient.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  /* =========================================================
     RECIPE PAGES
  ========================================================= */

  const recipePages: MetadataRoute.Sitemap =
    recipes.map((recipe) => ({
      url: `${SITE_URL}/recipes/${recipe.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  /* =========================================================
     SYMPTOM PAGES
  ========================================================= */

  const symptomPages: MetadataRoute.Sitemap =
    symptoms.map((symptom) => ({
      url: `${SITE_URL}/symptoms/${symptom.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
/* =========================================================
   ARTICLE PAGES
========================================================= */

const articlePages: MetadataRoute.Sitemap =
  articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  /* =========================================================
     FINAL SITEMAP
  ========================================================= */

  return [
  ...staticPages,
  ...foodPages,
  ...nutrientPages,
  ...recipePages,
  ...symptomPages,
  ...articlePages,
];
}