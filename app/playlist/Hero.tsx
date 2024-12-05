"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMusic } from "react-icons/fa6";
import { PiPlaylistBold } from "react-icons/pi";
import VideoModal from "../components/Avatar/VideoModal";

const Hero: React.FC = () => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);

  //   Open Video Modal
  const handleOpenVideoModal = () => {
    setIsOpenVideoModal(true);
  };

  //  Close Video Modal
  const handleCloseVideoModal = () => {
    setIsOpenVideoModal(false);
  };
  return (
    <section>
      <div className="px-4 md:px-[30px] mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Find the ideal products and services to support your journey toward
            staying fit and healthy.
          </p>

          <div className="flex gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <button
              onClick={handleOpenVideoModal}
              className="flex-1 sm:flex-auto sm:w-[167px] rounded-[14px] shadow-1 bg-white text-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 font-medium"
            >
              <Image
                src="/assets/icon/info-circle.svg"
                alt="info circle icon"
                width={20}
                height={20}
              />
              How It Works
            </button>

            <button className="flex-1 sm:flex-auto sm:w-[167px] rounded-[14px] bg-gradient text-white flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 font-medium">
              <PiPlaylistBold className="text-xl" />
              Create playlist
            </button>

            <button className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium text-sm sm:text-base">
              <FaMusic />
              Create Music
            </button>
          </div>
        </div>
      </div>

      {/* Video Windows  */}
      {isOpenVideoModal && <VideoModal onClose={handleCloseVideoModal} />}
    </section>
  );
};

export default Hero;
