"use client";
import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import ChatInput from "./ChatInput";

const Chat = ({ handleBack }) => {
  return (
    <div className="w-full flex-1 rounded-xl bg-[#EEE8FD] flex flex-col relative overflow-y-auto space-y-3 formscrollbar">
      <button
        onClick={handleBack}
        className="block md:hidden text-purple-500 p-3 w-full bg-[#EEE8FD] sticky top-0"
      >
        <FaArrowLeft />
      </button>
      <div className="flex-1 md:py-6 px-3 md:px-4">
        <div className="flex items-start gap-2 max-w-[444px] w-full">
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="/assets/avator-img.png"
              alt="user image"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <div>
              <p className="text-xs md:text-sm bg-white rounded-b-xl rounded-tr-xl p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="text-[10px] text-gradient font-medium mt-1 inline-block">15 mins ago</span>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end flex-col gap-3">
          <div className="max-w-[393px] w-full">
            <p className="text-xs md:text-sm rounded-b-xl rounded-l-xl p-3 bg-gradient text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="text-[10px] text-gradient font-medium mt-1 inline-block">15 mins ago</span>
          </div>
        </div>
      </div>

      <ChatInput />
    </div>
  );
};

export default Chat;
