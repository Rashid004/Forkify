/** @format */

import MealItem from "./meal-Item";

function MealGrid({ meals }) {
  return (
    <ul
      className=" my-8 list-none p-0
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
                   gap-8 sm:gap-12 md:gap-12 lg:gap-20"
    >
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealGrid;
