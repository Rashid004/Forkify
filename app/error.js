/** @format */
"use client";
export default function Error() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center w-1/2 bg-orange-200 rounded-md py-14">
      <h1 className="text-red-700 font-semibold text-4xl">An error occured!</h1>
      <p className="text-red-400 font-medium text-xl">
        Failed to fetch meal data. Please try again later.
      </p>
    </main>
  );
}
