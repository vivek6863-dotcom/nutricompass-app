import type { MetadataRoute } from "next";

import { articles } from "@/components/data/articles";
import { foods } from "@/components/data/foods";
import { nutrients } from "@/components/data/nutrients";
import { recipes } from "@/components/data/recipes";
import { symptoms } from "@/components/data/symptoms";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nutricompass.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/foods`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/nutrients`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/symptoms`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/recipes`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/articles`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ai-nutrition`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/search`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const foodPages: MetadataRoute.Sitemap = foods.map((food) => ({
    url: `${SITE_URL}/foods/${food.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const nutrientPages: MetadataRoute.Sitemap = nutrients.map(
    (nutrient) => ({
      url: `${SITE_URL}/nutrients/${nutrient.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const symptomPages: MetadataRoute.Sitemap = symptoms.map(
    (symptom) => ({
      url: `${SITE_URL}/symptoms/${symptom.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const recipePages: MetadataRoute.Sitemap = recipes.map((recipe) => ({
    url: `${SITE_URL}/recipes/${recipe.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map(
    (article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: article.publishedDate
        ? new Date(article.publishedDate)
        : undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    ...staticPages,
    ...foodPages,
    ...nutrientPages,
    ...symptomPages,
    ...recipePages,
    ...articlePages,
  ];
}