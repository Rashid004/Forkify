/** @format */

// /** @format */

// import Link from "next/link";

// export default async function Navigation() {
//   return (
//     <nav className="z-10 text-2xl font-medium text-[#615551]">
//       <ul className="flex gap-16 items-center ">
//         <li>
//           <Link
//             href="/meal"
//             className="hover:text-green-600 transition-colors "
//           >
//             Meals
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/about"
//             className="hover:text-green-600 transition-colors"
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/shareMeal"
//             className="hover:text-green-600 transition-colors"
//           >
//             Guest area
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/meal", label: "Meals" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#f9f5f3] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex justify-between h-20">
          <Logo />

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm md:text-lg font-medium ${
                  pathname === item.href
                    ? "bg-[#f38e82] text-white"
                    : "text-gray-700 hover:bg-[#f9d2cf] hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f38e82]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" />
              ) : (
                <XMarkIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? "bg-[#f38e82] text-white"
                  : "text-gray-700 hover:bg-[#f9d2cf] hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
