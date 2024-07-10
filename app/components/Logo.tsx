/** @format */

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Forkify Logo" width={150} height={40} />
      </Link>
    </div>
  );
}
