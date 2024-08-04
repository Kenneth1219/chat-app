import React from "react";
import { CuztomizeChat } from "./dropdowns/customize_chat";
import { ChatMembers } from "./dropdowns/chat_members";
import { MediaAndFiles } from "./dropdowns/media&files";
import { PrivacyAndSupport } from "./dropdowns/privacy&support";
import Messages from "./messages";
import LandingMessages from "./landing_message";
export default function Home() {
  const profilePic = [
    {
      pic: "./images/user_image.png",
    },
  ];

  return (
    <main className="flex h-screen w-full flex-row border">
      <div className=" w-[6%] flex flex-col pt-4 pb-4">
        <div className="flex h-[50%] flex-col items-center gap-y-5">
          <img className="w-[70px]" src="./icons/i7_logo.svg" />

          <button>
            <img
              className="w-[45px] hover:bg-[#D9D9D9] rounded p-1"
              src="./icons/msg_icon.svg"
            />
          </button>
          <button>
            <img
              className="w-[45px] hover:bg-[#D9D9D9] rounded p-1"
              src="./icons/group_icon.svg"
            />
          </button>
          <button>
            <img
              className="w-[45px] hover:bg-[#D9D9D9] rounded p-1"
              src="./icons/location_icon.svg"
            />
          </button>
        </div>
        <div className=" h-[50%] flex items-end justify-center">
          <img
            className=" w-[40px] border-gray-400 border-[3px] rounded-full"
            src="./images/user_image.png"
          />
        </div>
      </div>
      <div className=" w-[30%] border-l p-4 overflow-scroll h-scree">
        <div className=" flex flex-row justify-between items-center">
          <p>Chats</p>
          <img src="./icons/edit_icon.svg" />
        </div>
        <div className=" flex flex-row mt-4">
          <button className="flex justify-center items-center border text-[15px border-r-0 rounded-l-[20px] pl-3 h-[40px]">
            <img src="./icons/search_icon.svg" className="h-[25px]" />
          </button>
          <input
            type="text"
            placeholder="Search message"
            className=" border text-[15px] text-gray-400 border-l-0 rounded-r-[20px] w-full h-[40px] pl-[5px] pr-4 outline-none"
          />
        </div>

        <Messages />
      </div>

      <div className=" w-[50%] border-l">
        <div className=" w-full h-[10%] p-4 pt-6 border-b flex flex-row">
          <div className=" flex flex-row items-center gap-x-4 w-[50%]">
            {profilePic.map((image) => (
              <div className="flex-row flex">
                <img
                  src={image.pic}
                  className="w-[40px] h-[40px] border-2 border-gray-300 bg-white rounded-full"
                />
                <img
                  src={image.pic}
                  className="w-[40px] h-[40px] border-2 border-gray-300 bg-white rounded-full ml-[-25px] mt-[-10px]"
                />
              </div>
            ))}
            <p className=" text-[15px]">Mansala Law Firm</p>
          </div>
          <div className=" w-[50%] flex justify-end items-center gap-x-2">
            <button className=" w-[25px]">
              <img src="./icons/add_icon.svg" />
            </button>
            <button className=" w-[25px]">
              <img src="./icons/kebab_icon.svg" />
            </button>
          </div>
        </div>
        <div className=" w-full h-[90%]">
          <LandingMessages />
        </div>
      </div>

      <div className=" w-[24%] border-l p-4 overflow-scroll">
        <div className=" p-8 flex justify-center items-center flex-col gap-y-3">
          {profilePic.map((image) => (
            <div className="flex-row flex">
              <img
                src={image.pic}
                className="w-[60px] h-[60px] border-2 border-gray-300 bg-white rounded-full"
              />
              <img
                src={image.pic}
                className="w-[60px] h-[60px] border-2 border-gray-300 bg-white rounded-full ml-[-25px] mt-[-10px]"
              />
            </div>
          ))}
          <p className=" text-[15px]">Mansala Law Firm</p>
          <div className="w-full flex flex-row gap-x-2 items-center justify-center">
            <button className=" bg-[#D9D9D9] rounded-full p-1 opacity-80">
              <img src="./icons/mute_icon.svg" className="w-[20px] h-[20px]" />
            </button>
            <button className=" bg-[#D9D9D9] rounded-full p-1 opacity-80">
              <img
                src="./icons/search-btn_icon.svg"
                className="w-[20px] h-[20px]"
              />
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-y-2">
          <CuztomizeChat />
          <ChatMembers />
          <MediaAndFiles />
          <PrivacyAndSupport />
        </div>
      </div>
    </main>
  );
}
