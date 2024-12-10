"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiStreamOn } from "react-icons/ci";
import SearchModal from "./SearchModal";

const Hero: React.FC = () => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);

  const handleOpenSearchModal = () => {
    setIsOpenSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setIsOpenSearchModal(false);
  };

  return (
    <section>
      <div className="px-4 md:px-[30px] mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col lg:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Launch your streaming channel with powerful communication and
            translation tools to reach any audience, anywhere.
          </p>

          <div className="flex gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <button className="flex-1 sm:flex-auto sm:w-[167px] rounded-[14px] shadow-1 bg-white text-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 font-medium">
              <CiStreamOn className="text-[#5C24FC] text-lg" />
              Stream
            </button>

            <button
              onClick={handleOpenSearchModal}
              className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium text-sm sm:text-base"
            >
              <Image
                src="/assets/icon/search-text.svg"
                alt="search icon"
                width={15}
                height={18}
              />
              Search
            </button>
          </div>
        </div>
      </div>

      {isOpenSearchModal && (
        <SearchModal onClose={handleCloseSearchModal} />
      )}

    </section>
  );
};

export default Hero;
