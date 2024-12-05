"use client";
import React, { useState } from "react";
import Image from "next/image";
import PostModal from "../components/Modals/PostModal";
import SearchBar from "../components/Modals/SearchBar";
import FoodCategories from "./CategoriesDropdwon";

const Hero: React.FC = () => {
  const [isOpenPostModal, setIsOpenPostModal] = useState<boolean>(false);

  //   Open Post Modal
  const handleOpenPostModal = () => {
    setIsOpenPostModal(true);
  };

  //  Close Post Modal
  const handleClosePostModal = () => {
    setIsOpenPostModal(false);
  };

  return (
    <section className="px-4 md:px-[30px] mb-5 md:mb-8">
      <div className="logomenubg bg-white w-full rounded-[30px] px-5 md:px-[30px] py-4">
        <div className="flex items-center justify-between gap-5 flex-col xs:flex-row">
          <p className="text-2xl md:text-3xl font-medium">Favorite</p>

          <div className="flex gap-3 flex-1 justify-end items-end w-full xs:w-auto">
            <FoodCategories />

            <div className="hidden md:block max-w-[460px] w-full">
              <SearchBar />
            </div>
          </div>
        </div>

        <div className="flex md:hidden mt-4">
          <SearchBar />
        </div>
      </div>

      {/* Post Windows  */}
      {isOpenPostModal && <PostModal onClose={handleClosePostModal} />}
    </section>
  );
};

export default Hero;
