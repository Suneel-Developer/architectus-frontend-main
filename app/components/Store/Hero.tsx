"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchModal from "./SearchModal";
import AdvertiseModal from "./AdvertiseModal";
import SupplierPlan from "./SupplierPlan";
import VideoModal from "../Avatar/VideoModal";

const Hero: React.FC = () => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState<boolean>(false);
  const [isOpenAdvertiseModal, setIsOpenAdvertiseModal] =
    useState<boolean>(false);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState<boolean>(false);
  const [isOpenVideoModal, setIsOpenVideoModal] = useState<boolean>(false);

  // Open Create modal
  const handleOpenSearchModal = () => {
    setIsOpenSearchModal(true);
  };

  //   Close Create modal
  const handleCloseSearchModal = () => {
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

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleOpenVideoModal}
              className="w-full sm:w-[167px] rounded-[14px] shadow-1 bg-white text-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 font-medium"
            >
              <Image
                src="/assets/icon/info-circle.svg"
                alt="info circle icon"
                width={20}
                height={20}
              />
              How It Works
            </button>

            <button
              onClick={handleOpenSearchModal}
              className="w-full sm:w-[167px] rounded-[14px] bg-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 text-white font-medium"
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
          openAdertise={handleOpenAdvertiseModal}
        />
      )}
      {isOpenAdvertiseModal && (
        <AdvertiseModal
          onClose={handleCloseAdvertiseModal}
          openPayment={handleOpenPaymentModal}
        />
      )}
      \
      {isOpenPaymentModal && <SupplierPlan onClose={handleClosePaymentModal} />}
      {/* Video Windows  */}
      {isOpenVideoModal && <VideoModal onClose={handleCloseVideoModal} />}
    </section>
  );
};

export default Hero;
