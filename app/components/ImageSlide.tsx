/** @format */

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import slide1 from "@/public/Slide1.jpg";
import slide2 from "@/public/Slide2.jpg";
import slide3 from "@/public/Slide3.jpg";
import slide4 from "@/public/Slide4.jpg";
import slide5 from "@/public/Slide5.jpg";
import slide6 from "@/public/Slide6.jpg";
import slide7 from "@/public/Slide7.jpg";

const imageData = [
  {
    id: 1,
    src: slide1,
    alt: "Slide 1",
  },
  {
    id: 2,
    src: slide2,
    alt: "Slide 2",
  },
  {
    id: 3,
    src: slide3,
    alt: "Slide 3",
  },
  {
    id: 4,
    src: slide4,
    alt: "Slide 4",
  },
  {
    id: 5,
    src: slide5,
    alt: "Slide 5",
  },
  {
    id: 6,
    src: slide6,
    alt: "Slide 6",
  },
  {
    id: 7,
    src: slide7,
    alt: "Slide 7",
  },
];

export default function ImageSlideShow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex < imageData.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="max-w-5xl border border-indigo-200 flex gap-2 justify-center"
      aria-labelledby="image-description"
    >
      {imageData.map((image, index) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={
            index === currentImage
              ? "object-cover object-center rounded-md border-4 border-[#f9f5f3] shadow-md transition-opacity duration-75 "
              : "hidden "
          } // Set hidden class for non-current images
          width={600}
          height={600}
        />
      ))}
    </div>
  );
}
