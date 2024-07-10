/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ArrowRightIcon, ClockIcon, UserIcon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkSlashIcon } from "@heroicons/react/24/solid";

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

export default function MealsPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const showRecipe = async function () {
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
    showRecipe();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1 className="text-[#c26c66] font-semibold py-4 text-center text-[26px] sm:text-[28px] md:text-[34px] lg:text-[42px] font-mono">
        Explore our Meals 🍕
      </h1>
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#f0d285a7] to-[#fbdb89] min-h-screen p-4 rounded-lg">
        <div className="md:w-1/3 pr-4">
          <div className="mb-4">
            <Image src="/logo.png" alt="Forkify Logo" width={100} height={50} />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search over 1,000,000 recipes..."
              className="flex-grow p-2 rounded-l-lg border-none w-full outline-[#fbdb89] "
            />
            <button className="bg-[hsl(34,57%,60%)] hover:bg-[hsl(34,71%,67%)] text-white px-4 py-2 rounded-r-lg">
              SEARCH
            </button>
          </div>
          <div className="mt-4 text-center">
            <button className="text-orange-500">Page 1 →</button>
          </div>
        </div>
        <div className="container mx-auto p-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-gray-100 p-4 mb-8 rounded-lg shadow-md"
            >
              <figure className="relative origin-top h-[400px] before:bg-gradient-to-r from-[#fbdb89] to-[#f48982] overflow-hidden rounded-lg mb-4">
                <Image
                  src={recipe.image_url}
                  priority
                  alt={recipe.title}
                  fill
                  className="absolute object-cover w-full h-full block"
                />
                <h1 className="font-mono absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-5 skew-y-[-6deg] bg-gradient-to-r from-[#fbdb89] to-[#f48982] text-white text-4xl font-bold uppercase p-4">
                  <span className="box-decoration-clone p-4">
                    {recipe.title}
                  </span>
                </h1>
              </figure>

              <div className="flex flex-wrap items-center py-6 px-4 font-mono">
                <div className="flex items-center text-lg uppercase mr-8 mb-4 md:mb-0">
                  <span className="mr-2">
                    <ClockIcon className="size-6 text-[hsl(34,57%,60%)]" />
                  </span>
                  <span className="font-bold">{recipe.cooking_time}</span>
                  <span className="ml-1 text-[#c26c66] font-medium">
                    minutes
                  </span>
                </div>
                <div className="flex items-center text-lg uppercase mb-4 md:mb-0">
                  <span className="mr-2">
                    <UsersIcon className="size-6 text-[hsl(34,57%,60%)]" />
                  </span>
                  <span className="font-bold">{recipe.servings}</span>
                  <span className="ml-1 text-[#c26c66] font-medium">
                    servings
                  </span>
                  <div className="flex ml-4">
                    <button className="text-white text-xl font-medium bg-gradient-to-r from-[#fbdb89] to-[#f48982] px-4 rounded-full">
                      -
                    </button>
                    <button className="text-white text-xl bg-gradient-to-r from-[#fbdb89] to-[#f48982] px-4 rounded-full ml-2">
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-auto bg-gray-200 p-2 rounded-full">
                  <UserIcon className="size-6 text-[hsl(34,57%,60%)]" />
                </div>
                <button
                  className="bg-gray-200 p-2 ml-4 rounded-full"
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  {bookmarked ? (
                    <BookmarkIcon className="size-6 text-[hsl(34,57%,60%)]" />
                  ) : (
                    <BookmarkSlashIcon className="size-6 text-[hsl(34,57%,60%)]" />
                  )}
                </button>
              </div>

              <div className="bg-gray-200 py-6 px-4 text-center rounded-lg mb-4 font-mono">
                <h2 className="text-2xl mb-4 uppercase text-[#c26c66] font-semibold">
                  Recipe Ingredients
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none text-[#615551]">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">✓</span>
                      <div className="mr-2">{ingredient.quantity}</div>
                      <div className="mr-2">{ingredient.unit}</div>
                      <div>{ingredient.description}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-6 px-4 text-center font-mono">
                <h2 className="text-2xl mb-4 uppercase text-[#c26c66] font-semibold">
                  How to cook it
                </h2>
                <p className="text-lg mb-6  text-[#615551]">
                  This recipe was carefully designed and tested by{" "}
                  <span className="font-bold text-[#c26c66]">
                    {recipe.publisher}
                  </span>
                  . Please check out directions at their website.
                </p>
                <Link
                  className="font-mono inline-flex items-center bg-gradient-to-r from-[#fbdb89] to-[#f48982] text-white py-2 px-4 rounded-full"
                  href={recipe.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 text-xl">Directions</span>
                  <ArrowRightIcon className="size-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
