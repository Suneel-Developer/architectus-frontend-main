"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import ReceivingLanguage from "./Dropdwons/ReceivingLanguage";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  onClose: () => void;
}

const CallsModal: React.FC<ModalProps> = ({ onClose }) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const toggleSwitch = () => setIsOn(!isOn);

  // Helper function to get call details based on the type
  const getCallDetails = (type: string) => {
    switch (type) {
      case "outgoing":
        return {
          bgColor: "bg-gradient",
          icon: "/assets/icon/phone-outgoing.svg",
          alt: "Outgoing call",
        };
      case "missed":
        return {
          bgColor: "missed-call",
          icon: "/assets/icon/phone-times.svg",
          alt: "Missed call",
        };
      case "closed":
        return {
          bgColor: "bg-gradient-pausebtn",
          icon: "/assets/icon/phone-missed.svg",
          alt: "Closed call",
        };
      default:
        return {
          bgColor: "bg-gray-300",
          icon: "/assets/icon/phone-slash.svg",
          alt: "Unknown call",
        };
    }
  };

  // List of calls
  const calls = [
    { type: "closed", name: "Alice Johnson", phone: "+1 456 789 0123" },
    { type: "outgoing", name: "John Doe", phone: "+1 234 567 8910" },
    { type: "missed", name: "Jane Smith", phone: "+1 987 654 3210" },
    { type: "closed", name: "Alice Johnson", phone: "+1 456 789 0123" },
    { type: "outgoing", name: "John Doe", phone: "+1 234 567 8910" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          {/* Close Window btn */}
          <button onClick={onClose} className="min-w-8 min-h-8 rounded-full flex items-center justify-center text-white bg-gradient absolute right-6 top-4">
            <IoCloseSharp />
          </button>

          <h1 className="font-semibold text-xl text-center mb-3">Calls</h1>

          <p className="text-sm text-center mb-8">Manage All your Calls</p>

          <div className="flex justify-between gap-6">
            {/* Receive Calls  */}
            <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-5">
              <h3 className="text-base font-medium text-gradient">
                Receive Calls
              </h3>

              <div
                onClick={toggleSwitch}
                className="w-10 h-6 flex items-center rounded-full p-1 cursor-pointer bg-gradient"
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${
                    isOn ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Receiving Language */}
            <div>
              <h3 className="text-base font-medium text-gradient mb-2">
                Receiving Language
              </h3>

              <div className="w-full md:w-[315px]">
                <ReceivingLanguage />
              </div>
            </div>
          </div>

          {/* Calls List  */}
          <div className="mt-5 flex flex-col gap-3">
            {calls.map((call, index) => {
              const callDetails = getCallDetails(call.type);
              const buttonOpacity =
                call.type === "outgoing" ? "opacity-100" : "opacity-40";

              return (
                <div
                  key={index}
                  className="bg-[#F7F3FF] rounded-2xl md:rounded-3xl flex items-center justify-between p-3 md:p-4"
                >
                  {/* Left Section */}
                  <div className="flex items-center gap-[10px]">
                    <div
                      className={`w-10 h-10 flex items-center justify-center ${callDetails.bgColor} rounded-full`}
                    >
                      <Image
                        src={callDetails.icon}
                        alt={callDetails.alt}
                        width={18}
                        height={18}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-base leading-4 truncate overflow-hidden w-[100px]">
                        {call.name}
                      </p>
                      <p className="font-medium text-gradient text-sm">
                        {call.phone}
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      <Image
                        src="/assets/icon/video-slash.svg"
                        alt="Video slash icon"
                        width={20}
                        height={19}
                      />
                    </button>
                    <button
                      className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#5C24FC] text-2xl ${buttonOpacity}`}
                    >
                      <LiaCheckDoubleSolid />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallsModal;
