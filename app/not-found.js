/** @format */

import Link from "next/link";

function NotFound() {
  return (
    <main className="h-[80vh]">
      <section className="flex items-center h-full p-16 bg-gradient-to-r from-[#2c1e19] to-[#25200f] rounded-md">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-orange-600">
              <span className="sr-only ">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl text-gray-50">
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className="mt-4 mb-8  text-gray-200">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 font-semibold rounded bg-gradient-to-r from-orange-400 to-orange-600 text-gray-50 hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
            >
              Back to home page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
