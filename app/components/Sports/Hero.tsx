"use client";
import React, { useState } from "react";
import Image from "next/image";
import DownloadModal from "../Avatar/DownloadModal";
import SearchModal from "../Therapies/SearchModal";
import UploadVideoModal from "../Avatar/UploadVideoModal";

const Hero: React.FC = () => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
  const [isOpenDownloadModal, setIsOpenDownloadModal] =
    useState<boolean>(false);
  const [isOpenVideoUploadModal, setIsOpenVideoUploadModal] =
    useState<boolean>(false);

  //   Open Search Modal
  const handleOpenSearchModal = () => {
    setIsOpenSearchModal(true);
  };

  //  Close Search Modal
  const handleCloseSearchModal = () => {
    setIsOpenSearchModal(false);
  };

  //   Open Download Modal
  const handleOpenDownloadModal = () => {
    setIsOpenDownloadModal(true);
  };

  //  Close Download Modal
  const handleCloseDownloadModal = () => {
    setIsOpenDownloadModal(false);
  };

  //   Open VideoUpload Modal
  const handleOpenVideoUploadModal = () => {
    setIsOpenVideoUploadModal(true);
    setIsOpenSearchModal(false);
  };

  //  Close VideoUpload Modal
  const handleCloseVideoUploadModal = () => {
    setIsOpenVideoUploadModal(false);
  };

  return (
    <section className="px-4 md:px-[30px]">
      <div className="mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col lg:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Be as specific as possible—consider your sport discipline, training
            methods, types of exercises, skill level, and whether you&apos;re
            targeting specific muscles or engaging in full-body workouts.
          </p>

          <div className="flex gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <button className="flex-1 sm:flex-auto sm:w-[167px] rounded-[14px] shadow-1 bg-white text-gradient flex items-center gap-2 justify-center p-4 font-medium">
              <Image
                src="/assets/icon/info-circle.svg"
                alt="info circle icon"
                width={20}
                height={20}
                className="z-40"
              />
              How It Works
            </button>

            <button
              onClick={handleOpenDownloadModal}
              className="flex-1 sm:flex-auto sm:w-[167px] rounded-[14px] shadow-1 bg-white text-gradient flex items-center gap-2 justify-center p-4 font-medium"
            >
              <Image
                src="/assets/icon/download-alt.svg"
                alt="download icon"
                width={15}
                height={18}
              />
              Download
            </button>

            <button
              onClick={handleOpenSearchModal}
              className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium"
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
      </div>

      {isOpenSearchModal && (
        <SearchModal
          onClose={handleCloseSearchModal}
          openUploadVideo={handleOpenVideoUploadModal}
        />
      )}

      {isOpenDownloadModal && (
        <DownloadModal onClose={handleCloseDownloadModal} />
      )}

      {isOpenVideoUploadModal && (
        <UploadVideoModal
          onClose={handleCloseVideoUploadModal}
          openPayment={undefined}
        />
      )}
    </section>
  );
};

export default Hero;
