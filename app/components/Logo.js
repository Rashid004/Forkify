/** @format */

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex items-center">
        <div className="relative w-48 h-16">
          <Image
            src="/images/logo.png"
            alt="Forkify Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
}
