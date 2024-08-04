"use client";
import { useState } from "react";
import React from "react";

export const MediaAndFiles = () => {
  const [rotate, setRotate] = useState(false);
  const rotate_icon = () => {
    setRotate(!rotate);
  };

  return (
    <button className=" w-full" onClick={rotate_icon}>
      <details>
        <summary className=" flex justify-between">
          <p>Media and Files</p>
          <img
            className={` ${rotate ? "rotate-90" : ""}`}
            src="./icons/dropdown_icon.svg"
          />
        </summary>
        <div className=" mt-2 flex flex-col gap-y-2">
          <div className=" flex items-center gap-x-4">
            <img
              className=" bg-[#D9D9D9] rounded-full h-[30px] p-2"
              src="../icons/media_and_files/attachment_icon.svg"
            />
            <p>Attachment</p>
          </div>
          <div className=" flex items-center gap-x-4">
            <img
              className=" bg-[#D9D9D9] rounded-full h-[30px] p-2"
              src="../icons/media_and_files/media_icon.svg"
            />
            <p>Media</p>
          </div>
        </div>
      </details>
    </button>
  );
};
