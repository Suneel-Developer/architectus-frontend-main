"use client";
import Image from "next/image";

// Define the types for the props
interface Message {
  id: string | number;
  name: string;
  timestamp: string;
  lastMessage: string;
}

interface MessagesListProps {
  messages: Message[];
  activeMessage: string | number;
  setActiveMessage: (id: string | number) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  activeMessage,
  setActiveMessage,
}) => {
  return (
    <div className="w-full max-w-full md:max-w-[314px] h-full bg-[#EEE8FD] overflow-hidden rounded-xl overflow-y-auto formscrollbar">
      {/* List of messages */}
      {messages.map((message) => (
        <li
          key={message.id}
          onClick={() => setActiveMessage(message.id)}
          className={`flex items-center gap-2 p-3 md:p-4 rounded-xl cursor-pointer ${
            activeMessage === message.id
              ? "bg-gradient text-white"
              : "bg-transparent"
          }`}
        >
          {/* User Avatar */}
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden">
            <Image
              src="/assets/avator-img.png"
              alt="User Profile"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Message Details */}
          <div className="flex-1">
            <div className="flex justify-between items-center">
              {/* User Name */}
              <p className="font-medium text-sm md:text-base leading-4">
                {message.name}
              </p>
              {/* Timestamp */}
              <span
                className={`ml-auto text-[10px] font-medium ${
                  activeMessage === message.id ? "text-white" : "text-[#7B3BAC]"
                }`}
              >
                {message.timestamp}
              </span>
            </div>

            {/* Last Message Preview */}
            <p className="text-sm font-normal truncate w-[220px]">
              {message.lastMessage}
            </p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default MessagesList;
