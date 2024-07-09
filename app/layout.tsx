/** @format */

import { Roboto } from "next/font/google";
import "./style/globals.css";
import Header from "./components/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: {
    template: "%s / The Forkify",
    default: "Welcome / The Forkify",
  },
  description:
    "Discover the ultimate pizza-sharing platform to explore authentic Italian recipes, create gourmet delights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">{children}</main>
        </div>
        <footer>copyright by Forkify</footer>
      </body>
    </html>
  );
}
