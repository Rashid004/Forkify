/** @format */

import Image from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
/** @format */
export const metadata = {
  title: "About",
};
// export const revalidate = 84600;
export default async function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-black font-medium">
          Welcome to Forkify
        </h1>

        <div className="space-y-8">
          <p>
            Indulge in the essence of Italian culinary tradition with our
            pizza-sharing project. Here, where the love for authentic flavors
            and the art of pizza-making come together, you'll discover a haven
            for pizza enthusiasts. Nestled in the heart of Italy's culinary
            heritage, this platform is your gateway to mouthwatering creations.
            It&apos;s not just about the delicious pizza;
          </p>
          <p>
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

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          className=" rounded-sm"
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src={image2}
          fill
          className="object-cover rounded-sm"
          alt="Pizza "
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-black font-medium">
          Margherita pizza, which was created in 1889
        </h1>

        <div className="space-y-8">
          <p>
            The origins of pizza trace back to ancient times, but the modern
            pizza as we know it today was invented in Naples, Italy. In the late
            18th century, the Neapolitans began topping their flatbreads with
            tomatoes, cheese, oil, and other ingredients, which gave rise to the
            classic Neapolitan pizza. One of the most famous and enduring
            varieties is the Margherita pizza, which was created in 1889 by
            Raffaele Esposito, a Neapolitan pizza maker.
          </p>
          <p>
            It&apos;s more than just a collection of recipes; it&apos;s an
            invitation to explore the art of pizza-making, from classic
            Margheritas to creative gourmet delights. Immerse yourself in the
            process, savor the flavors, and create unforgettable moments with
            family and friends. Embrace the simplicity, the flavor, and the
            experience of making and sharing the perfect pizza.
          </p>

          <div>
            <a
              href="/meal"
              className="inline-block mt-4 rounded-md bg-green-500 px-8 py-5 text-white text-lg font-semibold hover:bg-green-600 transition-all"
            >
              Explore our meals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
