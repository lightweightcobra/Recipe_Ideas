import { RecipeDetails } from '../types/recipe';

export function getIngredientsList(recipe: RecipeDetails) {
  return Array.from({ length: 20 }, (_, i) => i + 1)
    .map((i) => ({
      ingredient: recipe[`strIngredient${i}` as keyof RecipeDetails] as string,
      measure: recipe[`strMeasure${i}` as keyof RecipeDetails] as string,
    }))
    .filter(({ ingredient, measure }) => ingredient && ingredient.trim());
}