"use client";
import Image from "next/image";

const ChatInput: React.FC = () => {
  return (
    <div className="sticky bottom-0 left-0 right-0 pb-3 md:pb-4 px-3 md:px-4 bg-[#EEE8FD]">
      <div className="mt-4 flex items-center gap-2 bg-white rounded-xl px-3 py-5 h-[50px] min-w-fit">
        {/* Text Input Field */}
        <input
          type="text"
          placeholder="Add your reply..."
          className="flex-1 outline-none border-none w-full placeholder:text-[#0000005C] font-normal bg-transparent"
          aria-label="Message Input"
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Emoji Button */}
          <button aria-label="Add Emoji">
            <Image
              src="/assets/icon/face-smile.svg"
              alt="Emoji Icon"
              width={20}
              height={20}
            />
          </button>

          {/* Attachment Button */}
          <button aria-label="Attach File">
            <Image
              src="/assets/icon/paperclip.svg"
              alt="Attachment Icon"
              width={18}
              height={20}
            />
          </button>

          {/* Send Button */}
          <button aria-label="Send Message">
            <Image
              src="/assets/icon/send.svg"
              alt="Send Icon"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
