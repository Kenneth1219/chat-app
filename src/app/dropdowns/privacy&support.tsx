"use client";
import { useState } from "react";
import React from "react";

export const PrivacyAndSupport = () => {
  const [rotate, setRotate] = useState(false);
  const rotate_icon = () => {
    setRotate(!rotate);
  };
  return (
    <button className=" w-full" onClick={rotate_icon}>
      <details>
        <summary className=" flex justify-between">
          <p>Privacy & Support</p>
          <img
            className={` ${rotate ? "rotate-90" : ""}`}
            src="./icons/dropdown_icon.svg"
          />
        </summary>
        <div className=" mt-2 flex flex-col gap-y-2">
          <div className=" flex items-center gap-x-4">
            <img
              className=" h-[30px] bg-[#D9D9D9] rounded-full p-2"
              src="./icons/privacy_and_support/block_icon.svg"
            />
            <p>Block people</p>
          </div>
          <div className=" flex items-center gap-x-4">
            <img
              className=" h-[30px] bg-[#D9D9D9] rounded-full p-2"
              src="./icons/privacy_and_support/report_icon.svg"
            />
            <p>Report a problem</p>
          </div>
        </div>
      </details>
    </button>
  );
};
