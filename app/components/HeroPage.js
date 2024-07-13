/** @format */

import Link from "next/link";
import ImageSlideShow from "./ImageSlide";

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row gap-8 md:gap-12 m-8 md:m-12 w-[90%] max-w-6xl mx-auto">
        <div className="w-full md:w-[40rem] h-64 md:h-96">
          <ImageSlideShow />
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-[#ddd6cb] text-lg md:text-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat',sans-serif] uppercase tracking-wide bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent mb-4">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-lg md:text-xl mt-6 items-center">
            <Link
              href="/community"
              className="text-[#ff9b05] hover:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-lg md:text-xl max-w-3xl w-[90%] mx-auto my-8 md:my-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How it works</h2>
          <p className="mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="flex flex-col text-[#ddd6cb] text-lg md:text-xl max-w-3xl w-[90%] mx-auto my-8 md:my-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why NextLevel Food?
          </h2>
          <p className="mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
