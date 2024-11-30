import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const avators = [
  "Jui Jutsu",
  "Boxer",
  "Kickboxer",
  "Karateka",
  "Bodybuilder",
  "Coach",
  "Swimmer",
  "Wrestler",
  "Sprinter",
  "Gymnast",
  "Weightlifter",
  "Cyclist",
  "Football Player",
  "Basketball Player ",
  "Tennis Player",
  "Rugby Player",
  "Volleyball Player",
];

const AvatorsCategories: React.FC = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [selectedAvator, setSelectedAvator] = useState("Jui Jutsu");

  const handleAvatorSelect = (avator: string) => {
    setSelectedAvator(avator);
    setIsOpenDropDown(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpenDropDown((prev) => !prev)}
        className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
      >
        {selectedAvator || "Jui Jutsu"}
        <IoIosArrowDown
          className={`text-purple-500 text-xl ${
            isOpenDropDown ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpenDropDown && (
        <ul className="z-50 w-full absolute mt-1 bg-white border rounded-lg shadow-lg h-[150px] overflow-y-scroll formscrollbar">
          {avators.map((avator, index) => (
            <li
              key={index}
              onClick={() => handleAvatorSelect(avator)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {avator}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvatorsCategories;
