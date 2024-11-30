import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const genders = ["Male", "Female"];

const SelectGender: React.FC = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [selectedGenders, setSelectedGenders] = useState("Male");

  const handleGenderSelect = (gender: string) => {
    setSelectedGenders(gender);
    setIsOpenDropDown(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpenDropDown((prev) => !prev)}
        className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
      >
        {selectedGenders || "Male"}
        <IoIosArrowDown
          className={`text-purple-500 text-xl ${
            isOpenDropDown ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpenDropDown && (
        <ul className="z-50 w-full absolute mt-1 bg-white border rounded-lg shadow-lg h-fit min-h-[80px] overflow-y-scroll formscrollbar">
          {genders.map((gender, index) => (
            <li
              key={index}
              onClick={() => handleGenderSelect(gender)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectGender;
