/** @format */
"use client";
import Image from "next/image";
import { useRef, useState } from "react";

function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [imagePicker, setImagePicker] = useState();

  const handleImagePicker = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePicker(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="flex items-start gap-6 mb-4">
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-montserrat uppercase text-[#b3aea5] font-bold"
        >
          {label}
        </label>

        <div className="relative">
          <input
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            className="hidden"
            ref={imageInput}
            onChange={handleImageChange}
          />
          <button
            type="button"
            onClick={handleImagePicker}
            className="py-2 px-6 bg-[#a4abb9] rounded cursor-pointer font-inherit hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
          >
            Pick an Image
          </button>
        </div>
      </div>
      <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
        {imagePicker ? (
          <Image
            src={imagePicker}
            alt="The image selected by the user."
            className="w-full h-full object-cover"
            fill
          />
        ) : (
          <p className="m-0 p-4">No image picked yet.</p>
        )}
      </div>
    </div>
  );
}

export default ImagePicker;
