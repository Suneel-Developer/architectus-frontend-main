"use client";
import React, { useState } from "react";
import Image from "next/image";
import CreateModal from "./CreateModal";
import VerificationLoadingModal from "../Create/VerificationLoadingModal";
import VideoUploadModal from "../Create/UploadVideoModal";
import DownloadModal from "../Create/DownloadModal";

const Hero: React.FC = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);
  const [isOpenVideoUploadModal, setIsOpenVideoUploadModal] =
    useState<boolean>(false);
  const [isOpenDownloadModal, setIsOpenDownloadModal] =
    useState<boolean>(false);

  // Open Create modal
  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  //   Close Create modal
  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  //   Open VisualisationVerification Modal
  const handleOpenVerificationCreateModal = () => {
    setIsOpenCreateModal(false);
    setIsOpenVerificationModal(true);
  };

  //  Close VisualisationVerification Modal
  const handleCloseVerificationModal = () => {
    setIsOpenVerificationModal(false);
    setIsOpenCreateModal(false);
  };

  //   Open VideoUpload Modal
  const handleOpenVideoUploadModal = () => {
    setIsOpenCreateModal(false);
    setIsOpenVideoUploadModal(true);
  };

  //  Close VideoUpload Modal
  const handleCloseVideoUploadModal = () => {
    setIsOpenVideoUploadModal(false);
  };

  //   Open Download Modal
  const handleOpenDownloadModal = () => {
    setIsOpenDownloadModal(true);
  };

  //  Close Download Modal
  const handleCloseDownloadModal = () => {
    setIsOpenDownloadModal(false);
  };

  return (
    <section className="px-4 md:px-[30px]">
      <div className="mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Be as specific as possible — consider your sport discipline,
            training method, exercise type, skill level, full-body workouts, or
            focus on specific muscle groups.
          </p>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleOpenCreateModal}
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
                src="/assets/icon/w-plus-circle.svg"
                alt="plus circle icon"
                width={20}
                height={20}
              />
              Download
            </button>
          </div>
        </div>
      </div>

      {isOpenCreateModal && (
        <CreateModal
          onClose={handleCloseCreateModal}
          onCreate={handleOpenVerificationCreateModal}
          onUploadVideo={handleOpenVideoUploadModal}
        />
      )}

      {isOpenVerificationModal && (
        <VerificationLoadingModal onClose={handleCloseVerificationModal} />
      )}

      {isOpenVideoUploadModal && (
        <VideoUploadModal
          onClose={handleCloseVideoUploadModal}
          openPayment={undefined}
        />
      )}
      {isOpenDownloadModal && (
        <DownloadModal onClose={handleCloseDownloadModal} />
      )}
    </section>
  );
};

export default Hero;
