"use client";
import React from "react";
import Image from "next/image";

interface AdvertiseModalProps {
  onClose: () => void;
  openPayment: () => void;
}

const AdvertiseModal: React.FC<AdvertiseModalProps> = ({
  onClose,
  openPayment,
}) => {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 px-5 py-3 windows-bg">
      <div onClick={onClose} className="absolute inset-0 h-screen"></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icon/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-3 right-4 cursor-pointer"
        />

        <form className="flex flex-col gap-y-5 h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          {/* Add File  */}
          <div className="relative pt-8 pb-5 my-5 bg-[#E4DAFF] border border-dashed rounded-[14px] border-[#3D2278]">
            <input
              className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
              type="file"
            />
            <div className="text-center">
              <img
                alt="upload"
                loading="lazy"
                width="42"
                height="34"
                decoding="async"
                className="mx-auto"
                src="/assets/icon/upload-icon.svg"
              />
              <h3 className="mt-6 text-base font-normal text-gradient">
                <label htmlFor="file-upload" className="relative">
                  <span className="text-gradient">Drag and drop </span>
                  <span className="font-semibold text-gradient">
                    or browse
                  </span>
                  <input
                    id="file-upload"
                    className="sr-only"
                    type="file"
                    name="file-upload"
                  />
                </label>
              </h3>
            </div>
          </div>

          <p className="text-center font-semibold text-[#0F0A19] mb-3">
            Upload Product, service or event image
          </p>

          <input
            type="text"
            placeholder="Title"
            className="bg-[#E4DAFF] p-4 w-full rounded-[14px] placeholder:text-[#0000005C] outline-none"
          />

          <textarea
            placeholder="Please provide a clear summary of the treatment, explaining how it works and which types of conditions it is intended for."
            className="resize-none  min-h-[140px] bg-[#E4DAFF] p-4 w-full rounded-[14px] placeholder:text-[#0000005C] outline-none"
          />

          <input
            type="text"
            placeholder="Brand Name"
            className="bg-[#E4DAFF] p-4 w-full rounded-[14px] placeholder:text-[#0000005C] outline-none"
          />

          <input
            type="text"
            placeholder="Price"
            className="bg-[#E4DAFF] p-4 w-full rounded-[14px] placeholder:text-[#0000005C] outline-none"
          />

          <input
            type="text"
            placeholder="Discount Price"
            className="bg-[#E4DAFF] p-4 w-full rounded-[14px] placeholder:text-[#0000005C] outline-none"
          />

          <input
            type="text"
            placeholder="Website link"
            className="bg-[#E4DAFF] p-4 w-full rounded-[14px] placeholder:text-[#0000005C] outline-none"
          />

          <button
            onClick={openPayment}
            type="button"
            className="bg-gradient text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Upload
          </button>

          <p className="text-center text-sm text-[#0F0A19B2]">
            Already have an account?&nbsp;
            <span className="text-sm cursor-pointer font-semibold text-[#3D2278]">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdvertiseModal;
