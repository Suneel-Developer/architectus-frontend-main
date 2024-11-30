"use client";
import React, { useState } from "react";
import MessagesList from "./MessagesList";
import Chat from "./Chat";
import Image from "next/image";
import ReceivingLanguage from "../Dropdwons/ReceivingLanguage";

interface MessagesModalProps {
  onClose: () => void;
}

interface Message {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
}

const MessagesModal: React.FC<MessagesModalProps> = ({ onClose }) => {
  const messages: Message[] = [
    {
      id: 1,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 2,
      name: "Rafael Marquez",
      lastMessage:
        "Lorem ipsum dolor sit amet amet amet amet ametametamet amet amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 3,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 4,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 5,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 6,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 7,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
    {
      id: 8,
      name: "Rafael Marquez",
      lastMessage: "Lorem ipsum dolor sit amet",
      timestamp: "June 28, 2024",
    },
  ];

  const [activeMessage, setActiveMessage] = useState<number | null>(
    messages[0]?.id || null
  );

  const handleBack = () => setActiveMessage(null);

  const handleSetActiveMessage = (id: string | number) => {
    if (typeof id === "number") {
      setActiveMessage(id);
    }
  };

  const [isOn, setIsOn] = useState<boolean>(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-3 md:p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="w-full max-w-[1200px] h-[95vh] p-3 md:p-5 rounded-[30px] bg-white z-50 flex flex-col justify-between">
        <h3 className="text-xl font-medium text-center">Messages</h3>

        <div className="flex justify-between gap-6 my-5">
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

        <div className="flex flex-col md:flex-row gap-3 messges-chat overflow-hidden">
          {(!activeMessage || window.innerWidth >= 768) && (
            <MessagesList
              messages={messages}
              activeMessage={activeMessage}
              setActiveMessage={handleSetActiveMessage}
            />
          )}
          {activeMessage && <Chat handleBack={handleBack} />}
        </div>
      </div>
    </div>
  );
};

export default MessagesModal;
