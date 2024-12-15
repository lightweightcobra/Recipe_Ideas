# What's Cooking? - Recipe Finder

A modern, user-friendly recipe finder application built with React and TypeScript. Perfect for busy professionals who want to cook delicious meals with ingredients they have on hand.

![What's Cooking App](https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000)

## Features

- **Ingredient-based Search**: Find recipes based on ingredients you have
- **Detailed Recipe Views**: Get comprehensive cooking instructions and ingredient lists
- **Video Tutorials**: Watch cooking videos when available
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- TheMealDB API

## Project Structure

```
src/
├── components/        # React components
│   ├── SearchBar/    # Search functionality
│   ├── RecipeCard/   # Recipe card display
│   └── RecipeModal/  # Detailed recipe view
├── hooks/            # Custom React hooks
├── services/         # API and external services
├── types/            # TypeScript type definitions
└── utils/            # Helper functions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## API Integration

This project uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data. The application makes use of the following endpoints:

- `/filter.php?i={ingredient}` - Search recipes by ingredient
- `/lookup.php?i={id}` - Get detailed recipe information

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
