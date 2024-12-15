export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
  strInstructions?: string;
  strTags?: string;
  strYoutube?: string;
}

export interface RecipeResponse {
  meals: Recipe[] | null;
}

export interface RecipeDetails extends Recipe {
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  // ... and so on
}