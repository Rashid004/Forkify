/** @format */

import Image from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 text-[#c26c66] font-medium font-mono">
            Welcome to Forkify
          </h1>

          <div className="space-y-4 md:space-y-8 text-[#615551] font-light font-mono text-base sm:text-lg">
            <p>
              Indulge in the essence of Italian culinary tradition with our
              pizza-sharing project. Here, where the love for authentic flavors
              and the art of pizza-making come together, you&apos;ll discover a
              haven for pizza enthusiasts. Nestled in the heart of Italy&apos;s
              culinary heritage, this platform is your gateway to mouthwatering
              creations. It&apos;s not just about the delicious pizza;
            </p>
            <p className="hidden sm:block">
              Discover the joy of pizza with our unique recipe-sharing project.
              Situated in the vibrant heart of Italy&apos;s rich culinary
              landscape, this is where tradition meets innovation.
            </p>
            <p>
              it&apos;s about the joy of crafting, sharing, and savoring each
              slice with loved ones. Experience the timeless pleasure of pizza,
              perfected through generations and shared with your family and
              friends.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2 order-1 md:order-2">
          <Image
            src={image1}
            alt="Family sitting around a fire pit in front of cabin"
            placeholder="blur"
            className="rounded-lg p-2 sm:p-4 border-[3px] sm:border-[6px] border-[#615551] w-full h-auto"
          />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2 order-3 relative aspect-square">
          <Image
            src={image2}
            fill
            className="object-cover rounded-lg p-2 sm:p-4 border-[3px] sm:border-[6px] border-[#fbdb89]"
            alt="Pizza"
          />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3 order-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 text-[#c26c66] font-medium font-mono">
            Margherita pizza, created in 1889
          </h1>

          <div className="space-y-4 md:space-y-8 text-[#615551] font-light font-mono text-base sm:text-lg">
            <p>
              The origins of pizza trace back to ancient times, but the modern
              pizza as we know it today was invented in Naples, Italy. In the
              late 18th century, the Neapolitans began topping their flatbreads
              with tomatoes, cheese, oil, and other ingredients, which gave rise
              to the classic Neapolitan pizza. One of the most famous and
              enduring varieties is the Margherita pizza, which was created in
              1889 by Raffaele Esposito, a Neapolitan pizza maker.
            </p>
            <p className="hidden sm:block">
              It&apos;s more than just a collection of recipes; it&apos;s an
              invitation to explore the art of pizza-making, from classic
              Margheritas to creative gourmet delights. Immerse yourself in the
              process, savor the flavors, and create unforgettable moments with
              family and friends. Embrace the simplicity, the flavor, and the
              experience of making and sharing the perfect pizza.
            </p>

            <div className="mt-6 md:mt-8">
              <Link
                href="/meal"
                className="font-mono inline-block rounded-md bg-[hsl(34,57%,60%)] hover:bg-[hsl(34,71%,67%)] px-6 sm:px-8 py-3 sm:py-5 text-white text-base sm:text-lg font-semibold transition-all"
              >
                Explore our meals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
