/** @format */

import Image from "next/image";
import { getMeal } from "../../lib/meals";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  return {
    title: meal.title,
    description: meal.summary,
  };
}

function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className="flex flex-col md:flex-row p-4 md:p-8 gap-8 md:gap-12 max-w-7xl mx-auto">
        <div className="relative w-full md:w-[30rem] h-64 md:h-80">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-md animate-fade-slide-in-from-left"
          />
        </div>
        <div className="p-2 md:p-4 text-[#ddd6cb] max-w-xl animate-fade-slide-in-from-right">
          <h1 className="m-0 text-4xl md:text-5xl uppercase font-montserrat shadow-text">
            {meal.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#cfa69b] italic mt-2">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05]
              bg-clip-text text-transparent hover:shadow-glow"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-xl md:text-2xl mt-4">{meal.summary}</p>
        </div>
      </header>
      <main className="text-lg md:text-xl leading-relaxed bg-[#6e6464] text-[#13120f] rounded-lg shadow-md p-4 md:p-8 max-w-4xl mx-auto my-8 animate-fade-slide-in-from-bottom">
        <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
