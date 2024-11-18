import Image from "next/image";
import React from "react";

interface DownloadModalProps {
  onClose: () => void;
}

const AddRatingModal: React.FC<DownloadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed w-full top-0 bottom-0 left-0 right-0 inset-0 h-screen flex items-center justify-center z-50 px-5 windows-bg">
      {/* If Click outside the white box then Window Close  */}
      <div onClick={onClose} className="absolute inset-0 h-screen"></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[692px] relative">
        <h1 className="font-semibold text-xl text-center mb-3">
          Add Rating & Review
        </h1>

        <p className="mb-5 text-sm text-center">
          Please describe in as much detail as possible what you intend to
          create, update, or modify.
        </p>

        <textarea
          placeholder="Type Here . . ."
          className="placeholder:text-[#0000005C] text-base bg-[#EEE8FD] rounded-[14px] h-[112px] w-full px-4 py-5 mb-3"
        ></textarea>

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Create
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
  );
};

export default AddRatingModal;
