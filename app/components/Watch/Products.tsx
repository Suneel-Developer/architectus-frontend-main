"use client";
import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineTextsms } from "react-icons/md";

import ShareModal from "../Modals/ShareModal";
import CreateSendModal from "../Avatar/CreateSendModal";
import VerificationLoadingModal from "../Avatar/VerificationLoadingModal";
import ReviewsForm from "../Reviews/ReviewsForm";
import ReviewsList from "../Reviews/ReviewsList";
import FavoriteModal from "../Modals/FavoritesModal";
import AddRatingModal from "../Reviews/AddRatingModal";
import LanguagesDropdown from "../Therapies/LanguageDropdowns";
import CreateModal from "./CreateModal";
import DownloadModal from "../Modals/DownloadModal";
import MessagesModal from "./MessagesModal";
import Chat from "./MessagesModal/Chat";

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
  const [showReviewsIndex, setShowReviewsIndex] = useState<number | null>(null);
  const [isOpenAddRatingModal, setIsOpenAddRatingModal] =
    useState<boolean>(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isOpenDownloadModal, setIsOpenDownloadModal] =
    useState<boolean>(false);

  // Handle showing reviews for a specific slide
  const handleToggleReviews = (index: number) => {
    if (showReviewsIndex === index) {
      setShowReviewsIndex(null);
    } else {
      setShowReviewsIndex(index);
    }
  };

  // Open Add Rating Window
  const handleOpenAddRatingModal = () => {
    setIsOpenAddRatingModal(true);
  };

  // Close Add Rating Window
  const handleCloseAddRatingModal = () => {
    setIsOpenAddRatingModal(false);
  };

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

  //   Open Download Modal
  const handleOpenDownloadModal = () => {
    setIsOpenDownloadModal(true);
  };

  //  Close Download Modal
  const handleCloseDownloadModal = () => {
    setIsOpenDownloadModal(false);
  };

  return (
    <div className="mx-auto z-10 px-4">
      <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-5">
        {watchdata.map((watch, index) => (
          <div
            key={index}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5"
          >
            <div className="flex items-center w-full justify-end gap-3 mb-5">
              {/* Profile & name  */}
              <button
                onClick={handleOpenDownloadModal}
                className="w-10 md:w-14 h-10 md:h-14 rounded-[14px] shadow-lg bg-white text-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 font-medium"
              >
                <Image
                  src="/assets/icon/download-alt.svg"
                  alt="download icon"
                  width={15}
                  height={18}
                />
              </button>

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

            <div className="flex flex-col items-center py-12 gap-8">
              <Image
                src="/assets/loader.svg"
                alt="loader"
                width={54}
                height={54}
                loading="lazy"
                className="animate-spin"
              />
              <p className="text-base text-[#0F0A19B2] text-center">
                AI is analyzing your documentation
              </p>
            </div>

            {/* Details section */}
            <div className="w-full md:w-auto overflow-y-scroll h-[500px] overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center relative">
              <div className="w-full min-w-full lg:min-w-[1000px] mx-auto p-3 md:p-5 rounded-[30px] bg-white z-50 flex flex-col justify-between relative">
                <div className="flex flex-col md:flex-row gap-3 messges-chat overflow-hidden">
                  <Chat />
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

      {/* Add Rating Modal  */}
      {isOpenAddRatingModal && (
        <AddRatingModal onClose={handleCloseAddRatingModal} />
      )}
      {isOpenDownloadModal && (
        <DownloadModal onClose={handleCloseDownloadModal} />
      )}
    </div>
  );
};

export default Products;
