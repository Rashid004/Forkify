/** @format */

import Link from "next/link";
import { getMeals } from "../../lib/meals";
import MealGrid from "../components/meals/meal-grid";

async function MealsPage() {
  const meal = await getMeals();
  return (
    <div className="max-h-full">
      <header className="flex items-start flex-col justify-start gap-2">
        <h1 className="font-semibold text-4xl -tracking-tight">
          Delicious meals, created{" "}
          <span className="font-bold text-orange-600">by you</span>
        </h1>
        <p className="text-gray-500 text-[18px] ">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>

        <p className="bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-2 hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] text-white rounded-md font-medium">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className="">
        <MealGrid meals={meal} />
      </main>
    </div>
  );
}

export default MealsPage;
