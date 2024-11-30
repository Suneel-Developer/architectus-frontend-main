"use client";
import React, { useState } from "react";
import ShareModal from "../Modals/ShareModal";
import FavoriteModal from "../Modals/FavoritesModal";
import Image from "next/image";

const Slider = () => {
  const [isShareModalVisible, setIsShareModalVisible] =
    useState<boolean>(false);
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);

  // Open Share Window
  const handleOpenShareModal = () => {
    setIsShareModalVisible(true);
  };

  // Close Share Window
  const handleCloseShareModal = () => {
    setIsShareModalVisible(null);
  };

  // Open Favorites Modal
  const handleOpenFavoritesModal = () => {
    setIsOpenFavoritesModal(true);
  };

  // Clsoe Favorites Modal
  const handleCloseFavoritesModal = () => {
    setIsOpenFavoritesModal(false);
  };

  return (
    <div className="mx-auto relative z-0 px-5 md:px-0">
      <div className="max-w-[1200px] w-full mx-auto">
        {["/assets/body-banner.jfif"].map((img, index) => (
          <div
            key={index}
            className="bg-white logomenubg rounded-2xl p-5"
          >
            <div className="h-[200px] md:h-[400px] w-full rounded-[17px] overflow-hidden relative">
              <img
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-[10px] md:top-5 right-[10px] md:right-5 flex gap-3">
                <button
                  onClick={handleOpenShareModal}
                  className="logomenubg bg-white rounded-[14px] w-10 md:w-[60px] h-10 md:h-[60px] flex items-center justify-center"
                >
                  <Image
                    src="/assets/icon/arrow-share.svg"
                    alt="arrow-share"
                    loading="lazy"
                    width={18}
                    height={16}
                  />
                </button>

                <button
                  onClick={handleOpenFavoritesModal}
                  className="logomenubg bg-white rounded-[14px] w-10 md:w-[60px] h-10 md:h-[60px] flex items-center justify-center"
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

            <div className="flex items-center justify-center gap-3 mt-3">
              <button className="bg-gradient w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                <Image
                  src="/assets/icon/arrow-left-small.svg"
                  alt="arrow-left-small"
                  width={18}
                  height={10}
                />
              </button>

              <button className="bg-gradient-pausebtn w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                <Image
                  src="/assets/icon/pause.svg"
                  alt="pause"
                  width={18}
                  height={10}
                />
              </button>

              <button className="bg-gradient-playbtn w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                <Image
                  src="/assets/icon/play.svg"
                  alt="play"
                  width={18}
                  height={10}
                />
              </button>

              <button className="bg-gradient w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                <Image
                  src="/assets/icon/arrow-left-small.svg"
                  alt="arrow-right-small"
                  width={18}
                  height={10}
                  className="rotate-180"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share WIndow  */}
      {isShareModalVisible && <ShareModal onClose={handleCloseShareModal} />}

      {/* Favorute Window  */}
      {isOpenFavoritesModal && (
        <FavoriteModal onClose={handleCloseFavoritesModal} />
      )}
    </div>
  );
};

export default Slider;
