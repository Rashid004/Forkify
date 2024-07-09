/** @format */

import Image from "next/image";
import ImageSlide from "./components/ImageSlide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <ImageSlide />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-semibold text-[#615551] tracking-widest">
              NextLevel Food For NextLevel Foodies
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Taste & share food from all over the world.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex  border-[#fbdb89]  border-2 py-2 px-6 focus:outline-none  rounded text-lg">
                Share Meal
              </button>
              <button className="ml-4 inline-flex text-[ #615551] bg-[#f9f5f3] hover:bg-[#f2efee] border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Explore Meals
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
