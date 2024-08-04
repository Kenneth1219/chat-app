"use client";
import { useState } from "react";
import React from "react";

export const ChatMembers = () => {
  const members = [
    {
      id: 1,
      memberName: "Paula Marie Mendoza",
      position: "Full Stack Developer",
    },
    {
      id: 2,
      memberName: "Kenneth Manuel",
      position: "Front-End & UI/UX",
    },
    {
      id: 3,
      memberName: "LUNAXXX",
      position: "Dog Programmer",
    },
  ];

  const [rotate, setRotate] = useState(false);
  const rotate_icon = () => {
    setRotate(!rotate);
  };

  return (
    <button className=" w-full" onClick={rotate_icon}>
      <details>
        <summary className=" flex justify-between">
          <p>Chat Members</p>
          <img
            className={` ${rotate ? "rotate-90" : ""}`}
            src="./icons/dropdown_icon.svg"
            alt=""
          />
        </summary>
        {members.map((members) => (
          <div className="text-left mt-2 flex flex-col gap-y-2">
            <div className=" flex flex-row items-center gap-x-4 justify-between">
              <div className="flex flex-row gap-x-2">
                <img
                  className=" w-[40px] h-[40px] border-gray-400 border-[3px] rounded-full"
                  src="./images/user_image.png"
                />

                <div>
                  <p className=" text-[15px] break-words">
                    {members.memberName}
                  </p>
                  <p className=" text-[12px] opacity-50">{members.position}</p>
                </div>
              </div>
              <img
                className=" w-[20px] h-[20px]"
                src="./icons/kebab_icon.svg"
                alt=""
              />
            </div>
          </div>
        ))}
      </details>
    </button>
  );
};
