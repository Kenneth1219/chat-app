import React from "react";

export default function Messages() {
  const chatBox = [
    {
      id: 1,
      gcName: "SMJ Law Firm",
      userName: "Madel",
      lastMessage:
        "Already change your schedule atty. raphael Already change your schedule atty. raphael",
      time: "1m",
      status: "unread",
    },
    {
      id: 2,
      gcName: "Mansala Law Firm",
      userName: "Atty. Robert",
      lastMessage: "I can’t edit the description for my new hearing.",
      time: "5m",
      status: "read",
    },
  ];

  const profilePic = [
    {
      pic: "./images/user_image.png",
    },
  ];

  return (
    <div className=" mt-4">
      {chatBox.map((groupChat) => (
        <button className="p-2 pt-4 rounded flex flex-row items-center hover:bg-[#D9D9D9] max-w-full">
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
          <div className="flex flex-col text-left pl-2 overflow-y-hidden w-[70%]">
            <p
              className={`text-[15px] ${
                groupChat.status === "unread"
                  ? "font-semibold"
                  : groupChat.status === "read"
                  ? ""
                  : ""
              }`}
            >
              {groupChat.gcName}
            </p>
            <p
              className={` truncate text-[12px] ${
                groupChat.status === "unread"
                  ? ""
                  : groupChat.status === "read"
                  ? "opacity-50"
                  : ""
              }`}
            >
              {groupChat.userName}: {groupChat.lastMessage}
            </p>
          </div>

          <div className=" flex items-center gap-x-[10px]">
            <p
              className={` text-[12px] ${
                groupChat.status === "unread"
                  ? ""
                  : groupChat.status === "read"
                  ? "opacity-50"
                  : ""
              }`}
            >
              {groupChat.time}
            </p>
            <div
              className={`${
                groupChat.status === "unread"
                  ? "bg-[#0094FF] w-[8px] h-[8px] rounded-full"
                  : ""
              }`}
            ></div>
          </div>
        </button>
      ))}
    </div>
  );
}
