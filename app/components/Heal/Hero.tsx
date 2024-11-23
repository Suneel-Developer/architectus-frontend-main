"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchModal from "./SearchModal";
import DownloadModal from "../Create/DownloadModal";
import UploadVideoModal from "../Create/UploadVideoModal";

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
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Please provide a clear description of your health condition. If you
            already know, include the specific type of therapy or treatment you
            are looking for.
          </p>

          <div className="flex gap-3 w-full sm:w-auto">
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

            <button
              onClick={handleOpenDownloadModal}
              className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium"
            >
              <Image
                src="/assets/icon/download-alt.svg"
                alt="download icon"
                width={15}
                height={18}
              />
              Download
            </button>
          </div>
        </div>
      </div>

      {isOpenSearchModal && <SearchModal onClose={handleCloseSearchModal} openUploadVideo={handleOpenVideoUploadModal} />}
      {isOpenDownloadModal && (
        <DownloadModal onClose={handleCloseDownloadModal} />
      )}
       {isOpenVideoUploadModal && (
        <UploadVideoModal onClose={handleCloseVideoUploadModal} openPayment={undefined} />
      )}
    </section>
  );
};

export default Hero;
