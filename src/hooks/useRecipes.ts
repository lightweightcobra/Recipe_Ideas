import { useState } from 'react';
import { Recipe, RecipeDetails } from '../types/recipe';
import { fetchRecipesByIngredient, fetchRecipeDetails } from '../services/api';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchRecipes = async (ingredient: string) => {
    if (!ingredient.trim()) {
      setError('Please enter an ingredient');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchRecipesByIngredient(ingredient);
      setRecipes(data);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    recipes,
    loading,
    error,
    searchRecipes,
  };
}