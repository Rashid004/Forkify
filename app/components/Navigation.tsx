/** @format */

import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 text-2xl font-medium">
      <ul className="flex gap-16 items-center ">
        <li>
          <Link href="/meal" className="hover:text-green-600 transition-colors">
            Meals
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-green-600 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/shareMeal"
            className="hover:text-green-600 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
