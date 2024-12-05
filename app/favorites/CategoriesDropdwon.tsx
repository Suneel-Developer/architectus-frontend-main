import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  "All",
  "Avatar",
  "Sports",
  "Nutrition",
  "Streams",
  "Therapies ",
  "Store",
];

const FoodCategories: React.FC = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [selectedFoodCategory, setSelectedFoodCategory] =
    useState("All");

  const handleFoodCategorySelect = (category: string) => {
    setSelectedFoodCategory(category);
    setIsOpenDropDown(false);
  };

  return (
    <div className="relative max-w-full xs:max-w-[266px] w-full">
      <button
        onClick={() => setIsOpenDropDown((prev) => !prev)}
        className="w-full max-w-full bg-[#EEE8FD] p-4 text-base rounded-[14px] flex justify-between items-center gap-1 font-medium"
      >
        {selectedFoodCategory || "All"}
        <IoIosArrowDown
          className={`text-purple-500 text-xl ${
            isOpenDropDown ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpenDropDown && (
        <ul className="z-50 w-full absolute mt-1 bg-white border rounded-lg shadow-lg h-[150px] overflow-y-scroll formscrollbar">
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
  );
};

export default FoodCategories;
