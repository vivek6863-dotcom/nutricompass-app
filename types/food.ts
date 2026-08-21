export interface Food {
  id: number;
  name: string;
  slug: string;
  image: string;

  nutrients: string[];
  benefits: string[];

  relatedSymptoms: string[];

  description: string;
}