"use client";
import React, { useState } from "react";
import ShareModal from "../Modals/ShareModal";
import ChartModal from "./ChartModal";
import DownloadModal from "../Modals/DownloadModal";
import Image from "next/image";
import Link from "next/link";
import FavoriteModal from "../Modals/FavoritesModal";

const NutritionProducts: React.FC = () => {
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isOpenChartModalOpen, setIsOpenChartModalOpen] =
    useState<boolean>(false);
  const [isOpenDownloadModalOpen, setIsOpenDownloadModalOpen] =
    useState<boolean>(false);

  // Open Favorites Modal
  const handleOpenFavoritesModal = () => {
    setIsOpenFavoritesModal(true);
  };

  // Clsoe Favorites Modal
  const handleCloseFavoritesModal = () => {
    setIsOpenFavoritesModal(false);
  };

  //  Open Share Modal
  const handleShareModal = () => {
    setIsShareModalOpen(true);
  };

  //  Close Share Modal
  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  //  Open chart Modal
  const handleChartModal = () => {
    setIsOpenChartModalOpen(true);
  };

  //  Close chart Modal
  const handleCloseChartModal = () => {
    setIsOpenChartModalOpen(false);
  };

  //  Open Download Modal
  const handleDownloadModal = () => {
    setIsOpenDownloadModalOpen(true);
    setIsOpenChartModalOpen(false);
  };

  //  Close Download Modal
  const handleCloseDownloadModal = () => {
    setIsOpenDownloadModalOpen(false);
  };

  return (
    <div className="px-4 md:px-[30px]">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
        <div className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5 w-full overflow-hidden relative">
          {/* header */}
          <div className="flex items-center w-full justify-between gap-3 mb-5">
            <div className="flex gap-3">
              {/* Revipe btn  */}
              <Link
                href="https://www.trufit.eu/lv/4endurance-pro-loaded#168=422"
                target="_blank"
                className="bg-[#ECF1FE] rounded-lg md:rounded-[14px] h-10 md:h-14 w-20 md:w-[99px] flex items-center justify-center font-semibold"
              >
                <span className="text-gradient">Recipe</span>
              </Link>

              {/* Chart btn  */}
              <button
                onClick={handleChartModal}
                className="bg-[#ECF1FE] rounded-lg md:rounded-[14px] h-10 md:h-14 w-20 md:w-[99px] flex items-center justify-center font-semibold"
              >
                <span className="text-gradient">Chart</span>
              </button>
            </div>

            <div className="flex gap-3">
              {/* Share btn  */}
              <button
                onClick={handleShareModal}
                className="logomenubg bg-[#BACCFD42] rounded-lg md:rounded-[14px] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
              >
                <Image
                  src="/assets/icon/arrow-share.svg"
                  alt="arrow-share"
                  loading="lazy"
                  width={18}
                  height={16}
                />
              </button>

              {/* Favourtes btn  */}
              <button
                onClick={handleOpenFavoritesModal}
                className="logomenubg bg-[#BACCFD42] rounded-lg md:rounded-[14px] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
              >
                <Image
                  src="/assets/icon/favioures-iocn.svg"
                  alt="heart"
                  loading="lazy"
                  width={18}
                  height={16}
                />
              </button>
            </div>
          </div>

          <div className="h-[200px] md:h-[400px] w-full overflow-hidden relative flex items-center justify-center">
            <iframe
              id="myIframe"
              src="https://view-one-iota.vercel.app/food"
              className="w-full h-full object-cover flex relative"
            ></iframe>

            <div className="w-28 md:w-32 h-28 md:h-32 overflow-hidden rounded-full mb-3 mx-auto absolute top-0 left-0 z-40">
              <img
                src="/assets/stamp-logo-nutrition.png"
                alt="stamp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && <ShareModal onClose={handleCloseShareModal} />}

      {/* Chart Modal */}
      {isOpenChartModalOpen && (
        <ChartModal
          onClose={handleCloseChartModal}
          onCreate={handleDownloadModal}
        />
      )}

      {/* Chart Modal */}
      {isOpenDownloadModalOpen && (
        <DownloadModal onClose={handleCloseDownloadModal} />
      )}

      {/* Favorute Window  */}
      {isOpenFavoritesModal && (
        <FavoriteModal onClose={handleCloseFavoritesModal} />
      )}
    </div>
  );
};

export default NutritionProducts;
