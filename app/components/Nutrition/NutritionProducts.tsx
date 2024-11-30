"use client";
import React, { useState } from "react";
import ShareModal from "../Modals/ShareModal";
import ChartModal from "./ChartModal";
import DownloadModal from "../Modals/DownloadModal";
import Image from "next/image";
import Link from "next/link";
import FavoriteModal from "../Modals/FavoritesModal";

const nutritionproducts = [
  {
    id: 1,
    image: "/assets/product-1.png",
    name: "Loaded",
    link: "https://www.trufit.eu/lv/4endurance-pro-loaded#168=422",
  },
];

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
    <div className="mx-auto relative z-10 px-4">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
        {nutritionproducts.map((nutrition, index) => (
          <div
            key={index}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5"
          >
            {/* header */}
            <div className="flex items-center w-full justify-between gap-3 mb-5">
              <div className="flex gap-3">
                {/* Revipe btn  */}
                <Link
                  href={nutrition.link}
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

            {/* Product Image  */}
            <div className="rounded-2xl overflow-hidden h-[320px] md:h-[380px] mb-4 bg-[#0000000F] p-3">
              <img
                src={nutrition.image}
                alt={nutrition.name}
                className="h-full bg-contain mx-auto"
              />
            </div>
          </div>
        ))}
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
