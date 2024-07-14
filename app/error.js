/** @format */
"use client";

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Error() {
  return (
    <main className="h-[80vh]">
      <div className="bg-gradient-to-r from-[#2c1e19] to-[#25200f] flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl mt-5">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-orange-600">
          Oops!
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          An error occured!
        </p>
        <p className="text-gray-200 mt-4 pb-4 border-b-2 text-center">
          Failed to fetch meal data. Please try again later.
        </p>
        <Link
          href="/"
          className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-blue-700 text-gray-50 px-4 py-2 mt-6 rounded transition duration-150 hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          title=" back to Home"
        >
          <ArrowLeftIcon className="size-4" />
          <span> back to Home</span>
        </Link>
      </div>
    </main>
  );
}
