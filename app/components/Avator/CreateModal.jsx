"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import LanguagesDropdown from "../Therapies/LanguageDropdowns";



const CreateModal = ({ onClose, onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Jui Jutsu");

  const avators = ["Jui Jutsu", "Boxer", "Kickboxer", "Karateka", "Bodybuilder", "Coach", "Swimmer", "Wrestler", "Sprinter", "Gymnast", "Weightlifter", "Cyclist", "Football Player", "Basketball Player ", "Tennis Player", "Rugby Player", "Volleyball Player"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div
        onClick={onClose}
        className="absolute inset-0"
      ></div>

      <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[600px] relative h-[95vh] overflow-y-scroll overflow-x-hidden formscrollbar">
        {/* Close Window btn */}
        <Image
          src="/assets/icon/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute md:top-5 right-[30px] cursor-pointer"
        />

        <h1 className="font-semibold text-xl text-center mb-3">
          Create
        </h1>

        <p className="text-sm text-center">
          Please describe in as much detail as possible what you intend to create, update, or modify.
        </p>

        <div className="max-w-[315px] w-full mx-auto mt-8">
          <h3 className="text-base font-semibold text-gradient mb-2">Select Avatar</h3>

          {/* Avator dropdown  */}
          <div className="relative">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
            >
              {selectedOption}
              <IoIosArrowDown className={`text-purple-500 text-xl ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg h-[200px] overflow-y-scroll formscrollbar">
                {avators.map((avator, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(avator)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {avator}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Image src="/assets/avator-img.png" alt="avator img" width={100} height={100} className="rounded-full w-[157px] h-[157px] my-5 mx-auto" />
        </div>

        <LanguagesDropdown />

        {/* Add File  */}
        <div className="relative pt-8 pb-5 my-5 bg-[#E4DAFF] border border-dashed rounded-[14px] border-[#3D2278]">
          <div className="text-center">
            <Image
              alt="upload"
              loading="lazy"
              width={36}
              height={25}
              className="mx-auto mb-[10px]"
              src="/assets/video-plus.svg"
            />
            <label htmlFor="file-upload" className="relative font-medium text-base text-gradient cursor-pointer">
              Upload Video
              <input
                id="file-upload"
                className="sr-only"
                type="file"
                name="file-upload"
              />
            </label>
          </div>
        </div>


        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button onClick={onCreate} className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
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

export default CreateModal;
