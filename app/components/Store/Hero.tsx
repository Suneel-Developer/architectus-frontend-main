"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchModal from "./SearchModal";
import VerificationLoadingModal from "../Avator/VerificationLoadingModal";
import AdvertiseModal from "./AdvertiseModal";
import SupplierPlan from "./SupplierPlan";

const Hero: React.FC = () => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);
  const [isOpenAdvertiseModal, setIsOpenAdvertiseModal] =
    useState<boolean>(false);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState<boolean>(false);

  // Open Create modal
  const handleOpenSearchModal = () => {
    setIsOpenSearchModal(true);
  };

  //   Close Create modal
  const handleCloseSearchModal = () => {
    setIsOpenSearchModal(false);
  };

  //   Open VisualisationVerification Modal
  const handleOpenVerificationCreateModal = () => {
    setIsOpenSearchModal(false);
    setIsOpenVerificationModal(true);
  };

  //  Close VisualisationVerification Modal
  const handleCloseVerificationModal = () => {
    setIsOpenVerificationModal(false);
    setIsOpenSearchModal(false);
  };

  //   Open Advertise Modal
  const handleOpenAdvertiseModal = () => {
    setIsOpenSearchModal(false);
    setIsOpenAdvertiseModal(true);
  };

  //  Close Advertise Modal
  const handleCloseAdvertiseModal = () => {
    setIsOpenAdvertiseModal(false);
    setIsOpenSearchModal(false);
  };

  //   Open Payment Modal
  const handleOpenPaymentModal = () => {
    setIsOpenAdvertiseModal(false);
    setIsOpenPaymentModal(true);
  };

  //  Close Payment Modal
  const handleClosePaymentModal = () => {
    setIsOpenPaymentModal(false);
  };

  return (
    <section>
      <div className="px-4 md:px-[30px] mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-5">
          <p className="flex-1 text-base md:text-xl text-center md:text-start">
            Search for workout supplements, vitamins, training equipment,
            sportswear, events and country location.
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
        <SearchModal
          onClose={handleCloseSearchModal}
          onCreate={handleOpenVerificationCreateModal}
          openAdertise={handleOpenAdvertiseModal}
        />
      )}

      {isOpenVerificationModal && (
        <VerificationLoadingModal onClose={handleCloseVerificationModal} />
      )}

      {isOpenAdvertiseModal && (
        <AdvertiseModal
          onClose={handleCloseAdvertiseModal}
          openPayment={handleOpenPaymentModal}
        />
      )}

      {isOpenPaymentModal && <SupplierPlan onClose={handleClosePaymentModal} />}
    </section>
  );
};

export default Hero;
