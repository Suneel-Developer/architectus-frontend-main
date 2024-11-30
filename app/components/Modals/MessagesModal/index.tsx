"use client";
import React, { useState, useEffect } from "react";

import MessagesList from "./MessagesList";
import Chat from "./Chat";
import ReceivingLanguage from "../Dropdwons/ReceivingLanguage";
import { IoCloseSharp } from "react-icons/io5";

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

  const [activeMessage, setActiveMessage] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    if (!isMobile && messages.length > 0) {
      setActiveMessage(messages[0].id);
    }
  }, [isMobile, messages]);

  const handleBack = () => setActiveMessage(null);

  const handleSetActiveMessage = (id: number) => {
    setActiveMessage(id);
  };

  const [isOn, setIsOn] = useState<boolean>(false);
  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      if (isMobileView) {
        setActiveMessage(null);
      } else if (messages.length > 0) {
        setActiveMessage(messages[0].id);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [messages]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-3 md:p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center relative">
        <div className="w-full min-w-full lg:min-w-[1000px] mx-auto p-3 md:p-5 rounded-[30px] bg-white z-50 flex flex-col justify-between relative">
          {/* Close Window btn */}
          <button
            onClick={onClose}
            className="min-w-8 min-h-8 rounded-full flex items-center justify-center text-white bg-gradient absolute right-6 top-4"
          >
            <IoCloseSharp />
          </button>

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
            {isMobile ? (
              activeMessage ? (
                <Chat handleBack={handleBack} />
              ) : (
                <MessagesList
                  messages={messages}
                  activeMessage={activeMessage}
                  setActiveMessage={handleSetActiveMessage}
                />
              )
            ) : (
              <>
                <MessagesList
                  messages={messages}
                  activeMessage={activeMessage}
                  setActiveMessage={handleSetActiveMessage}
                />
                {activeMessage && <Chat handleBack={handleBack} />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesModal;
