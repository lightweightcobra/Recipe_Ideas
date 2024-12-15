const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function fetchRecipesByIngredient(ingredient: string) {
  const response = await fetch(
    `${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient.trim())}`
  );
  const data = await response.json();
  return data.meals || [];
}

export async function fetchRecipeDetails(id: string) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals?.[0] || null;
}