/** @format */

// /** @format */
// "use client";
// import { redirect } from "next/navigation";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import ImagePicker from "../../components/meals/image-picker";
// import { shareMeal } from "../../lib/actions";

// export default function ShareMealPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const router = useRouter();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     const formData = new FormData(event.target);
//     const result = await shareMeal(formData);

//     setIsSubmitting(false);
//     if (result && result.error) {
//       setError(result.error);
//     } else {
//       setSuccess(result.message);
//       event.target.reset();
//     }
//   }

//   return (
//     <>
//       <header className="gap-12 my-12 mx-auto w-11/12 max-w-6xl text-[#ddd6cb] text-2xl">
//         <h1 className="font-montserrat">
//           Share your{" "}
//           <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
//             favorite meal
//           </span>
//         </h1>
//         <p>Or any other meal you feel needs sharing!</p>
//       </header>
//       <main className="w-11/12 max-w-6xl my-12 mx-auto text-white">
//         <form className="max-w-2xl" onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row gap-4">
//             <p className="w-full">
//               <label
//                 htmlFor="name"
//                 className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
//               >
//                 Your name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
//               />
//             </p>
//             <p className="w-full">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
//               >
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
//               />
//             </p>
//           </div>
//           <p className="mt-4">
//             <label
//               htmlFor="title"
//               className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
//             >
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               required
//               className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
//             />
//           </p>
//           <p className="mt-4">
//             <label
//               htmlFor="summary"
//               className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
//             >
//               Short Summary
//             </label>
//             <input
//               type="text"
//               id="summary"
//               name="summary"
//               required
//               className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
//             />
//           </p>
//           <p className="mt-4">
//             <label
//               htmlFor="instructions"
//               className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
//             >
//               Instructions
//             </label>
//             <textarea
//               id="instructions"
//               name="instructions"
//               rows="10"
//               required
//               className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
//             ></textarea>
//           </p>
//           <ImagePicker label="Your image" name="image" />
//           {error && <p className="text-red-500 mt-4">{error}</p>}
//           {success && <p className="text-green-500 mt-4">{success}</p>}
//           <p className="text-right mt-4">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="border-0 py-3 px-8 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded cursor-pointer font-inherit text-xl shadow-md hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? "Submitting..." : "Share Meal"}
//             </button>
//           </p>
//         </form>
//       </main>
//     </>
//   );
// }

/** @format */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImagePicker from "../../components/meals/image-picker";
import { shareMeal } from "../../lib/actions";

export default function ShareMealPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.target);
    const result = await shareMeal(formData);

    setIsSubmitting(false);
    if (result.error) {
      setError(result.error);
    } else if (result.success) {
      router.push("/meals");
    }
  }

  return (
    <>
      <header className="gap-12 my-12 mx-auto w-11/12 max-w-6xl text-[#ddd6cb] text-2xl">
        <h1 className="font-montserrat">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-11/12 max-w-6xl my-12 mx-auto text-white">
        <form className="max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p className="mt-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="mt-4">
            <label
              htmlFor="summary"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="mt-4">
            <label
              htmlFor="instructions"
              className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <p className="text-right mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border-0 py-3 px-8 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded cursor-pointer font-inherit text-xl shadow-md hover:from-[#fd4715] hover:to-[#f9b241] focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Share Meal"}
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
