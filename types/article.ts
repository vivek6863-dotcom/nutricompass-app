export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  publishedDate: string;
  content: string;
contentHtml?: string;
  relatedSymptoms: string[];
  relatedFoods: string[];
  relatedNutrients: string[];
}