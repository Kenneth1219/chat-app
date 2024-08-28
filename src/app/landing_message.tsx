import React from "react";

export default function LandingMessages() {
  return (
    <>
      <div className=" h-[88%]">Created By Kenneth Manuel ( Unfinished :( )</div>

      <div className=" h-[12%] flex items-center justify-center p-4">
        <div className=" w-full flex flex-row justify-center gap-x-2">
          <img src="./icons/add-filled_icon.svg" alt="" />
          <div className=" flex flex-row w-full">
            <input className=" w-full h-[100%] border border-l-1 border-r-white rounded-r-[20px] rounded-full outline-none pl-6 text-black text-opacity-50" />
            <button className=" w-[5%] pr-1 border-l-0 rounded-r-[20px] border flex justify-center items-center">
              <img src="./icons/send_icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
