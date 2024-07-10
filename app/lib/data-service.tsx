/** @format */

// lib/data-service.ts

import axios from "axios";

const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const API_KEY = "170eed04-11f5-4567-8fe6-ea8e08343e85";

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

export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${API_URL}?key=${API_KEY}`);
    console.log(response);
    return response.data.data.recipes;
  } catch (err) {
    console.error("Error fetching recipes", err);
    return [];
  }
};
