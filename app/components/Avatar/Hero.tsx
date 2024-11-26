"use client";
import React, { useState } from "react";
import Image from "next/image";
import CreateModal from "./CreateModal";
import VerificationLoadingModal from "./VerificationLoadingModal";
import SupplierPlan from "../Store/SupplierPlan";
import UploadVideoModal from "./UploadVideoModal";
import DownloadModal from "./DownloadModal";
import VideoModal from "./VideoModal";

const Hero: React.FC = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);
  const [isOpenVideoUploadModal, setIsOpenVideoUploadModal] =
    useState<boolean>(false);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState<boolean>(false);
  const [isOpenDownloadModal, setIsOpenDownloadModal] =
    useState<boolean>(false);
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);

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

  //   Open Payment Modal
  const handleOpenPaymentModal = () => {
    setIsOpenVideoUploadModal(false);
    setIsOpenPaymentModal(true);
  };

  //  Close Payment Modal
  const handleClosePaymentModal = () => {
    setIsOpenPaymentModal(false);
  };

  //   Open Download Modal
  const handleOpenDownloadModal = () => {
    setIsOpenDownloadModal(true);
  };

  //  Close Download Modal
  const handleCloseDownloadModal = () => {
    setIsOpenDownloadModal(false);
  };

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
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col lg:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Create and customize your visual character, and bring it to life
            with a presentation about yourself and your work, highlighting what
            makes both unique.
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
                className="z-40"
              />
              How It Works
            </button>

            <button
              onClick={handleOpenDownloadModal}
              className="flex-1 sm:flex-auto sm:w-[167px] rounded-[14px] shadow-1 bg-white text-gradient flex items-center gap-2 justify-center text-sm sm:base px-2 sm:px-4 py-4 font-medium"
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
              onClick={handleOpenCreateModal}
              className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium text-sm sm:base"
            >
              <Image
                src="/assets/icon/w-plus-circle.svg"
                alt="plus circle icon"
                width={20}
                height={20}
              />
              Create
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
        <UploadVideoModal
          onClose={handleCloseVideoUploadModal}
          openPayment={handleOpenPaymentModal}
        />
      )}

      {isOpenPaymentModal && <SupplierPlan onClose={handleClosePaymentModal} />}

      {/* Download Windows  */}
      {isOpenDownloadModal && (
        <DownloadModal onClose={handleCloseDownloadModal} />
      )}

      {/* Video Windows  */}
      {isOpenVideoModal && <VideoModal onClose={handleCloseVideoModal} />}
    </section>
  );
};

export default Hero;
