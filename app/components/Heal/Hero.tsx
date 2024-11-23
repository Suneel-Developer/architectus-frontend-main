"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchModal from "./SearchModal";

const Hero: React.FC = () => {
  const [isOpenSearchModal, setIsOpenSearchModal] =
    useState<boolean>(false);


  //   Open Search Modal
  const handleOpenSearchModal = () => {
    setIsOpenSearchModal(true);
  };

  //  Close Search Modal
  const handleCloseSearchModal = () => {
    setIsOpenSearchModal(false);
  };

  return (
    <section className="px-4 md:px-[30px]">
      <div className="mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Please provide a clear description of your health condition. If you
            already know, include the specific type of therapy or treatment you
            are looking for.
          </p>

          <button
            onClick={handleOpenSearchModal}
            className="max-w-[204px] w-full rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium"
          >
            <Image
              src="/assets/icon/search-text.svg"
              alt="search-text icon"
              width={19}
              height={19}
            />
            Search
          </button>
        </div>
      </div>


      {isOpenSearchModal && (
        <SearchModal onClose={handleCloseSearchModal} />
      )}
    </section>
  );
};

export default Hero;
