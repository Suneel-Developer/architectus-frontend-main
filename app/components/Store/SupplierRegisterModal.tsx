"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

interface SupplierRegisterModalProps {
  onClose: () => void;
  onLogin: () => void;
  onCreate: () => void;
  closeAndOpenSportsModal: (option: string) => void;
}

const SupplierRegisterModal: React.FC<SupplierRegisterModalProps> = ({
  onClose,
  onLogin,
  onCreate,
  closeAndOpenSportsModal,
}) => {
  const [selectedOption, setSelectedOption] = useState("advertise");

  // Handle dropdown change
  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === "Sports" || value === "therapies") {
      closeAndOpenSportsModal(value);
    }
  };

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
          {/* Select Options  */}
          <div className="relative mt-6">
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit cursor-pointer appearance-none w-full"
            >
              <option value="Sports">Sports</option>
              <option value="therapies">Therapies</option>
              <option value="advertise">Advertise</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 text-2xl " />
          </div>

          {/* Add File  */}
          <div className="relative borderUpload py-5 md:py-10">
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
              <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                <label htmlFor="file-upload" className="relative">
                  <span>Drag and drop </span>
                  <span className="text-[#3D2278] font-semibold">
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
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit"
          />

          <textarea
            placeholder="Please provide a clear summary of the treatment, explaining how it works and which types of conditions it is intended for."
            className="border placeholder:text-sm resize-none placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Brand Name"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Price"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Discount Price"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <input
            type="text"
            placeholder="Website link"
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
          />

          <button
            onClick={onCreate}
            className="bg-gradient mt-3 text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Continue
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

export default SupplierRegisterModal;
