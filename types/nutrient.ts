export interface Nutrient {
  id: number;

  name: string;

  slug: string;

  description: string;

  image: string;

  benefits: string[];

  foodSources: string[];

  deficiencySymptoms: string[];

  dailyRequirement: string;
}