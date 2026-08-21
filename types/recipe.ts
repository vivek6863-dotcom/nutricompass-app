export interface Recipe {
  id: number;

  name: string;

  slug: string;

  description: string;

  image: string;

  prepTime: string;

  cookTime: string;

  servings: number;

  ingredients: string[];

  instructions: string[];

  nutrients: string[];

  relatedFoods: string[];

  relatedSymptoms: string[];
}