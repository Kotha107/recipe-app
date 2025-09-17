export interface RecipeModel {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  image: string;
  rating: number;
  reviewCount: number;
}

export interface RecipeModelApiResponse {
  recipes: RecipeModel[];
  total: number;
  skip: number;
  limit: number;
}
