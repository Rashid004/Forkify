/** @format */

// RecipeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface Recipe {
  id: string;
  title: string;
  publisher: string;
  source_url: string;
  image_url: string;
  servings: number;
  cooking_time: number;
  ingredients: { quantity: number | null; unit: string; description: string }[];
}

interface RecipeContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  fetchRecipe: () => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
};

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8706"
        );
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        setRecipes([data.data.recipe]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Error fetching the recipe");
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  const value = {
    recipes,
    loading,
    error,
    fetchRecipe,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
