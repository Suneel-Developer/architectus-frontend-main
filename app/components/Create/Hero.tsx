"use client";
import React, { useState } from "react";
import Image from "next/image";
import CreateModal from "./CreateModal";
import VerificationLoadingModal from "./VerificationLoadingModal";
import SupplierPlan from "../Store/SupplierPlan";
import UploadVideoModal from "./UploadVideoModal";
import DownloadModal from "./DownloadModal";

const Hero: React.FC = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);
  const [isOpenVideoUploadModal, setIsOpenVideoUploadModal] =
    useState<boolean>(false);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState<boolean>(false);
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

  return (
    <section>
      <div className="px-4 md:px-[30px] mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Envision your new body with precision! Specify which parts you want
            to improve, shape, and size.
          </p>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleOpenCreateModal}
              className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium"
            >
              <Image
                src="/assets/icon/w-plus-circle.svg"
                alt="plus circle icon"
                width={20}
                height={20}
              />
              Create
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
        <UploadVideoModal
          onClose={handleCloseVideoUploadModal}
          openPayment={handleOpenPaymentModal}
        />
      )}

      {isOpenPaymentModal && <SupplierPlan onClose={handleClosePaymentModal} />}
      {isOpenDownloadModal && <DownloadModal onClose={handleCloseDownloadModal} />}
    </section>
  );
};

export default Hero;
