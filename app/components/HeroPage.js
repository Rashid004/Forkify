/** @format */

// /** @format */

// import Link from "next/link";
// import ImageSlideShow from "./ImageSlide";

// export default function HeroPage() {
//   return (
//     <>
//       <header className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 m-4 sm:m-6 lg:m-12 w-[95%] max-w-7xl mx-auto">
//         <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96">
//           <ImageSlideShow />
//         </div>
//         <div className="flex flex-col justify-between lg:w-1/2">
//           <div className="text-[#ddd6cb] text-base sm:text-lg lg:text-xl">
//             <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold font-['Montserrat',sans-serif] uppercase tracking-wide bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent mb-3 sm:mb-4">
//               NextLevel Food for NextLevel Foodies
//             </h1>
//             <p>Taste & share food from all over the world.</p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 items-center">
//             <Link
//               href="/community"
//               className="text-[#ff9b05] hover:text-[#f9b241] w-full sm:w-auto text-center"
//             >
//               Join the Community
//             </Link>
//             <Link
//               href="/meals"
//               className="w-full sm:w-auto text-center py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:from-[#fd4715] hover:to-[#f9b241]"
//             >
//               Explore Meals
//             </Link>
//           </div>
//         </div>
//       </header>
//       <main className="px-4 sm:px-6 lg:px-8">
//         <section className="flex flex-col text-[#ddd6cb] text-base sm:text-lg lg:text-xl max-w-3xl w-full mx-auto my-6 sm:my-8 lg:my-12 text-center">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
//             How it works
//           </h2>
//           <p className="mb-3 sm:mb-4">
//             NextLevel Food is a platform for foodies to share their favorite
//             recipes with the world. It&apos;s a place to discover new dishes,
//             and to connect with other food lovers.
//           </p>
//           <p>
//             NextLevel Food is a place to discover new dishes, and to connect
//             with other food lovers.
//           </p>
//         </section>
//         <section className="flex flex-col text-[#ddd6cb] text-base sm:text-lg lg:text-xl max-w-3xl w-full mx-auto my-6 sm:my-8 lg:my-12 text-center">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
//             Why NextLevel Food?
//           </h2>
//           <p className="mb-3 sm:mb-4">
//             NextLevel Food is a platform for foodies to share their favorite
//             recipes with the world. It&apos;s a place to discover new dishes,
//             and to connect with other food lovers.
//           </p>
//           <p>
//             NextLevel Food is a place to discover new dishes, and to connect
//             with other food lovers.
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }

/** @format */

import Link from "next/link";
import ImageSlideShow from "./ImageSlide";

export default function HeroPage() {
  return (
    <>
      <header className="flex flex-col w-full max-w-7xl mx-auto">
        <div className="w-full h-48 sm:h-64 md:h-72 lg:h-96 mb-4 sm:mb-6">
          <ImageSlideShow />
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-[#ddd6cb] text-sm sm:text-base">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Montserrat',sans-serif] uppercase tracking-wide bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent mb-2 sm:mb-3">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="mb-4">Taste & share food from all over the world.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 text-sm sm:text-base mb-6">
            <Link
              href="/community"
              className="text-[#ff9b05] hover:text-[#f9b241] w-full sm:w-auto text-center py-2 px-4"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="w-full sm:w-auto text-center py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full max-w-3xl mx-auto">
        <section className="flex flex-col text-[#ddd6cb] text-sm sm:text-base my-6 sm:my-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
            How it works
          </h2>
          <p className="mb-3">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="flex flex-col text-[#ddd6cb] text-sm sm:text-base my-6 sm:my-8 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
            Why NextLevel Food?
          </h2>
          <p className="mb-3">
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
