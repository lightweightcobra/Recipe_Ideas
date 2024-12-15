import React from 'react';
import { X, Youtube } from 'lucide-react';
import { RecipeDetails } from '../types/recipe';
import { getIngredientsList } from '../utils/recipe';

interface RecipeModalProps {
  recipe: RecipeDetails;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  const ingredients = getIngredientsList(recipe);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
          
          <div className="flex items-center gap-4 mb-6">
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <Youtube className="h-5 w-5" />
                Watch Video
              </a>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
              <ul className="space-y-2">
                {ingredients.map(({ ingredient, measure }, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="font-medium">{measure}</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Instructions</h3>
              <div className="space-y-4">
                {recipe.strInstructions.split('\n').map((step, index) => (
                  <p key={index}>{step}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}