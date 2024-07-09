/** @format */

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        quality={100}
        width={150}
        height={150}
        src={logo}
        alt="Fokify the recipe"
      />
    </Link>
  );
}
