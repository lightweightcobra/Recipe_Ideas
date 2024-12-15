import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { useRecipes } from './hooks/useRecipes';
import { fetchRecipeDetails } from './services/api';
import type { Recipe, RecipeDetails } from './types/recipe';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetails | null>(null);
  const { recipes, loading, error, searchRecipes } = useRecipes();

  const handleRecipeClick = async (recipe: Recipe) => {
    const details = await fetchRecipeDetails(recipe.idMeal);
    if (details) {
      setSelectedRecipe(details);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="h-12 w-12 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What's Cooking?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find delicious recipes based on the ingredients you have. Perfect for
            busy professionals looking to cook something amazing!
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <SearchBar
            value={ingredient}
            onChange={setIngredient}
            onSearch={() => searchRecipes(ingredient)}
          />
        </div>

        {loading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 mb-8">{error}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe)}
            />
          ))}
        </div>

        {!loading && !error && recipes.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Enter an ingredient to discover recipes!
          </div>
        )}

        {selectedRecipe && (
          <RecipeModal
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;