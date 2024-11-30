import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
    "Appetizers & Starters",
    "Soups",
    "Main course",
    "Soups",
    "Juices",
    "Smoothies",
    "Salads",
    "Side Dishes",
    "Desserts",
    "Snacks",
    "Beverages",
    "Breakfast",
    "Breads",
    "Baked Goods",
    "Finger Foods",
    "Street Food",
  ];

const FoodCategories: React.FC = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [selectedFoodCategory, setSelectedFoodCategory] = useState("Appetizers & Starters");

  const handleFoodCategorySelect = (category: string) => {
    setSelectedFoodCategory(category);
    setIsOpenDropDown(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpenDropDown((prev) => !prev)}
        className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
      >
        {selectedFoodCategory || "Appetizers & Starters"}
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
