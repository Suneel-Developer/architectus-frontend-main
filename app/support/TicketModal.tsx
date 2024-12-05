"use client";
import Image from "next/image";
import React from "react";

interface ModalProps {
  onClose: () => void;
}

const TicketModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          <h1 className="font-semibold text-xl text-center mb-3">Ticket#001</h1>

          <div>
            <h3 className="text-[#5C24FC] font-semibold text-xl">Subject</h3>
            <p className="text-lg font-medium mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className="flex items-start my-5 gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image
                src="/assets/user-review-img.png"
                alt="img"
                width={54}
                height={54}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-[#EEE8FD] rounded-xl p-3 flex-1">
              <p className="mb-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.xplicabo.
              </p>

              <span className="text-[#0000005C] text-xs font-semibold">
                Dec 3, 2024
              </span>
            </div>
          </div>

          <div className="w-full bg-[#EEE8FD] rounded-xl py-3 px-4 flex items-center justify-between gap-2">
            <input
              type="text"
              placeholder="Type . . ."
              className="flex-1 h-full bg-transparent border-none outline-none placeholder:text-[#0000005C]"
            />

            <Image
              src="/assets/microphone.svg"
              alt="mic icon"
              width={19}
              height={24}
              loading="lazy"
              className="cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between gap-2 mt-5">
            <button
              onClick={onClose}
              className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
            >
              Cancel
            </button>

            <button className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
              Submit
              <Image
                src="/assets/icon/arrow-right-small.svg"
                alt="arrow-right-small"
                width={18}
                height={10}
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
