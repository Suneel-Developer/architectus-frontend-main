"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";

import ShareModal from "../Modals/ShareModal";
import CreateSendModal from "../Avatar/CreateSendModal";
import VerificationLoadingModal from "../Avatar/VerificationLoadingModal";
import FavoriteModal from "../Modals/FavoritesModal";
import LanguagesDropdown from "../Therapies/LanguageDropdowns";

const watchdata = [
  {
    id: 0,
    name: "John Doe",
    image: "/assets/user-review-img.png",
    video: "/assets/video-4.mp4",
    videothumbnail: "/assets/thumbnail-4.jpg",
    videotitle: "How I Got to 11.6% Body Fat in 60 Days",
    stamplogo: "/assets/stamp-logo-watch.png",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
  },
  {
    id: 1,
    name: "Esthera Jackson",
    image: "/assets/user-review-img.png",
    video: "/assets/video-5.mp4",
    videothumbnail: "/assets/thumbnail-5.jpg",
    videotitle: "Best Kickboxing: Thai or Dutch?",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
  },
  {
    id: 2,
    name: "Alexa Liras",
    image: "/assets/user-review-img.png",
    video: "/assets/video-3.mp4",
    videothumbnail: "/assets/thumbnail-3.jpg",
    videotitle: "The Best Workout Routine",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
  },
  {
    id: 3,
    name: "Laurent Michael",
    image: "/assets/user-review-img.png",
    video: "/assets/video-2.mp4",
    videothumbnail: "/assets/thubnail-2.jpg",
    videotitle: "Best 7 ABS Exercises For SIX PACK",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
  },
];

const Products: React.FC = () => {
  const [isShareModalVisible, setIsShareModalVisible] =
    useState<boolean>(false);
  const [isOpenCreateSendModal, setIsOpenCreateSendModal] =
    useState<Boolean>(false);
  const [isOpenVeriicationModal, setIsOpenVeriicationModal] =
    useState<Boolean>(false);
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);




  const handleOpenShareModal = () => {
    setIsShareModalVisible(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalVisible(null);
  };

  const handleOpenCreateSend = () => {
    setIsOpenCreateSendModal(true);
  };

  const handleCloseCreateSend = () => {
    setIsOpenCreateSendModal(false);
  };

  const handleOpenVeriicationModal = () => {
    setIsOpenCreateSendModal(false);
    setIsOpenVeriicationModal(true);
  };

  const handleCloseVeriicationModal = () => {
    setIsOpenVeriicationModal(false);
  };

  // Open Favorites Modal
  const handleOpenFavoritesModal = () => {
    setIsOpenFavoritesModal(true);
  };

  // Clsoe Favorites Modal
  const handleCloseFavoritesModal = () => {
    setIsOpenFavoritesModal(false);
  };

  const handlePlay = (index: any) => {
    setPlayingIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handlePause = (index: any) => {
    setPlayingIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="mx-auto z-10 px-4">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
        {watchdata.map((watch, index) => (
          <div
            key={index}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5"
          >
            {/* header */}
            <div className="flex items-center w-full justify-between gap-3 mb-5">
              {/* Profile & name  */}
              <div className="flex items-center gap-3">
                <Image
                  src={watch.image}
                  alt={watch.name}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="w-10 md:w-14 h-10 md:h-14 rounded-full object-cover"
                />
                <h2 className="text-lg md:text-2xl font-semibold">
                  @{watch.name}
                </h2>
              </div>

              <div className="flex gap-3">
                {/* Share btn  */}
                <button
                  onClick={handleOpenShareModal}
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

            {/* Video  */}
            <div className="rounded-2xl overflow-hidden h-[180px] md:h-[280px] mb-4 relative">
              {playingIndex === index ? (
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[index] = el;
                    }
                  }}
                  src={watch.video}
                  loop
                  autoPlay
                  muted
                  controls
                  className="w-full h-full object-cover"
                  onPause={() => handlePause(index)}
                ></video>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={watch.videothumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handlePlay(index)}
                    className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                  >
                    <FaPlay />
                  </button>
                </div>
              )}

              {/* Live show  */}
              <div className="bg-[#FF0000] rounded-xl px-3 py-[2px] flex items-center gap-1 text-white text-lg absolute top-5 left-5">
                <Image
                  src="/assets/icon/live-stream.svg"
                  alt="live stream icon"
                  width={22}
                  height={16}
                />
                Live
              </div>
            </div>

            {/* Details section */}
            <div className="flex flex-col mt-5">
              <div className="bg-[#CEBAFD52] rounded-[14px] p-3 md:p-5 mb-5">
                <button className="flex items-center justify-between w-full">
                  <span className="text-xl font-medium">Comments</span>
                  <Image
                    src="/assets/icon/angle-down-small.svg"
                    alt="angle-down-small"
                    width={14}
                    height={9}
                  />
                </button>
              </div>

              <div
                className={`flex ${
                  watch.stamplogo ? "sm:grid grid-cols-2" : "grid-cols-1"
                } gap-5 mb-4`}
              >
                <div>
                  <h2 className="text-base md:text-lg font-medium mb-1">
                    {watch.videotitle}
                  </h2>

                  <p className="text-xs md:text-sm mb-4">{watch.disc}</p>
                </div>

                {watch.stamplogo && (
                  <div className="flex justify-end sm:justify-center order-1 sm:order-2 w-full">
                    <div className="w-28 sm:w-[150px] h-28 sm:h-[150px] overflow-hidden rounded-lg mb-3">
                      <img
                        src={watch.stamplogo}
                        alt="stamp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <LanguagesDropdown />

              <div className="flex flex-col md:flex-row gap-5">
                {/* Social Icon  */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-gradient">
                    Social Media
                  </h3>

                  <div className="flex gap-[6px] items-center">
                    <button className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center bg-[#ECECEC]">
                      <Image
                        src="/assets/icon/globe-earth.svg"
                        alt="globe-earth"
                        width={12}
                        height={12}
                        loading="lazy"
                      />
                    </button>

                    <button
                      onClick={handleOpenCreateSend}
                      className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center bg-[#ECECEC]"
                    >
                      <MdOutlineTextsms />
                    </button>

                    <button className="w-[30px] h-[30px] rounded-[10px] flex items-center justify-center bg-[#ECECEC]">
                      <Image
                        src="/assets/icon/phone-call-2.svg"
                        alt="phone-call-2"
                        width={12}
                        height={12}
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create & verification Windows  */}
      {isOpenCreateSendModal && (
        <CreateSendModal
          onClose={handleCloseCreateSend}
          onCreate={handleOpenVeriicationModal}
        />
      )}
      {isOpenVeriicationModal && (
        <VerificationLoadingModal onClose={handleCloseVeriicationModal} />
      )}

      {/* Share WIndow  */}

      {isShareModalVisible && <ShareModal onClose={handleCloseShareModal} />}

      {/* Favorute Window  */}
      {isOpenFavoritesModal && (
        <FavoriteModal onClose={handleCloseFavoritesModal} />
      )}
    </div>
  );
};

export default Products;
