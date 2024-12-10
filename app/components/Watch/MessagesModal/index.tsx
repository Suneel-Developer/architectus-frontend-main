"use client";
import React, { useState, useEffect } from "react";

import MessagesList from "./MessagesList";
import Chat from "./Chat";
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

const MessagesModal: React.FC<MessagesModalProps> = () => {

  return (
    <div>
      <div></div>

      <div className="w-full md:w-auto overflow-y-scroll h-[500px] overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center relative">
        <div className="w-full min-w-full lg:min-w-[1000px] mx-auto p-3 md:p-5 rounded-[30px] bg-white z-50 flex flex-col justify-between relative">
          <div className="flex flex-col md:flex-row gap-3 messges-chat overflow-hidden">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesModal;
