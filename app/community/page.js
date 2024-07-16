/** @format */

import Image from "next/image";
import mealIcon from "../../asset/icons/meal.png";
import communityIcon from "../../asset/icons/community.png";
import eventsIcon from "../../asset/icons/events.png";

export const metadata = {
  title: "Community",
  description: "You can share your meals and communicate with each there.",
};

export default function CommunityPage() {
  return (
    <>
      <header className="w-[90%] max-w-6xl mx-auto my-12 md:my-20 text-center text-[#ddd6cb]">
        <h1 className="font-['Montserrat',sans-serif] text-3xl md:text-4xl lg:text-5xl mb-6">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="w-[90%] max-w-2xl mx-auto text-center">
        <h2 className="font-['Montserrat',sans-serif] text-2xl md:text-3xl lg:text-4xl mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>
        <ul className="list-none p-0 my-12 space-y-12 md:space-y-16">
          <li className="flex flex-col items-center">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-8"
            />
            <p className="font-['Montserrat',sans-serif] text-lg md:text-xl lg:text-2xl font-bold text-[#ddd6cb] m-0">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-8"
            />
            <p className="font-['Montserrat',sans-serif] text-lg md:text-xl lg:text-2xl font-bold text-[#ddd6cb] m-0">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-8"
            />
            <p className="font-['Montserrat',sans-serif] text-lg md:text-xl lg:text-2xl font-bold text-[#ddd6cb] m-0">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
