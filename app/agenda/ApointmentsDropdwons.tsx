"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const categories = ["Day", "Months", "Year"];

const ApointmentsDropdwons: React.FC = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [selectedFoodCategory, setSelectedFoodCategory] = useState("Day");

  const handleFoodCategorySelect = (category: string) => {
    setSelectedFoodCategory(category);
    setIsOpenDropDown(false);
  };

  return (
    <div className="px-4 md:px-[30px] flex justify-end my-5">
      <div className="">
        <label className="text-gradient font-medium text-base">
          View Appointments By
        </label>

        <div className="relative w-[240px] mt-2">
          <button
            onClick={() => setIsOpenDropDown((prev) => !prev)}
            className="w-full max-w-full bg-white p-4 text-base rounded-[14px] flex justify-between items-center gap-1 font-medium"
          >
            {selectedFoodCategory || "Day"}
            <IoIosArrowDown
              className={`text-purple-500 text-xl ${
                isOpenDropDown ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpenDropDown && (
            <ul className="z-50 w-full absolute mt-1 bg-white border rounded-lg shadow-lg h-[125px] overflow-y-scroll formscrollbar">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleFoodCategorySelect(category)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApointmentsDropdwons;
