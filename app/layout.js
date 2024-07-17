/** @format */

import { Roboto } from "next/font/google";
import "./style/globals.css";
import Header from "./components/Header";
// import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Forkify",
  description:
    "Discover the ultimate pizza-sharing platform to explore authentic Italian recipes, create gourmet delights.",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <footer className="text-gray-50">copyright by Forkify</footer>
      </body>
    </html>
  );
}
