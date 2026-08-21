export function createSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function symptomLink(name: string): string {
  return `/symptoms/${createSlug(name)}`;
}

export function foodLink(name: string): string {
  return `/foods/${createSlug(name)}`;
}

export function nutrientLink(name: string): string {
  return `/nutrients/${createSlug(name)}`;
}

export function recipeLink(name: string): string {
  return `/recipes/${createSlug(name)}`;
}

export function articleLink(name: string): string {
  return `/articles/${createSlug(name)}`;
}