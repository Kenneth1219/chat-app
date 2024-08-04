"use client";
import { useState } from "react";
import React from "react";

export const CuztomizeChat = () => {
  const [rotate, setRotate] = useState(false);
  const rotate_icon = () => {
    setRotate(!rotate);
  };
  return (
    <button className=" w-full" onClick={rotate_icon}>
      <details>
        <summary className=" flex justify-between">
          <p>Cuztomize Chat</p>
          <img
            className={` ${rotate ? "rotate-90" : ""}`}
            src="./icons/dropdown_icon.svg"
          />
        </summary>
        <div className="text-left mt-2 flex flex-col gap-y-2">
          <div className=" flex items-center gap-x-4">
            <img
              className=" bg-[#D9D9D9] rounded-full h-[30px] p-2"
              src="../icons/customize_chat/changeName_icon.svg"
            />{" "}
            <p>Change chat name</p>
          </div>
          <div className=" flex items-center gap-x-4">
            <img
              className=" bg-[#D9D9D9] rounded-full h-[30px] p-2"
              src="../icons/customize_chat/changePhoto_icon.svg"
            />
            <p>Change photo</p>
          </div>
          <div className=" flex items-center gap-x-4">
            <img
              className=" bg-[#D9D9D9] rounded-full h-[30px] p-2"
              src="../icons/customize_chat/edit_nickName_icon.svg"
            />{" "}
            <p>Edit nicknames</p>
          </div>
          <div className=" flex items-center gap-x-4">
            <img
              className=" bg-[#D9D9D9] rounded-full h-[30px] p-2"
              src="../icons/search-btn_icon.svg"
            />{" "}
            <p>Search in conversations</p>
          </div>
        </div>
      </details>
    </button>
  );
};
