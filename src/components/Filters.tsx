import React from 'react';
import { Clock, Leaf } from 'lucide-react';

interface FiltersProps {
  isVegetarian: boolean;
  sortBy: string;
  onVegetarianChange: (value: boolean) => void;
  onSortChange: (value: string) => void;
}

export function Filters({
  isVegetarian,
  sortBy,
  onVegetarianChange,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onVegetarianChange(!isVegetarian)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isVegetarian
              ? 'bg-green-500 text-white'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          <Leaf className="h-4 w-4" />
          Vegetarian
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-gray-500" />
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="default">Sort by</option>
          <option value="time-asc">Cooking Time (Shortest)</option>
          <option value="time-desc">Cooking Time (Longest)</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
}