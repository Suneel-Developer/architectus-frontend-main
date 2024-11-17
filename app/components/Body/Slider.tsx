"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ReviewsForm from "../Reviews/ReviewsForm";
import ReviewsList from "../Reviews/ReviewsList";
import ShareModal from "./ShareModal";
import FavoriteModal from "../FavoritesModal";

const Slider = () => {
  const [isShareModalVisible, setIsShareModalVisible] =
    useState<boolean>(false);
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);
  const [showReviewsIndex, setShowReviewsIndex] = useState<number | null>(null);
  const [lastSlideIndex, setLastSlideIndex] = useState<number | null>(null);

  // Handle showing reviews for a specific slide
  const handleToggleReviews = (index: number) => {
    if (showReviewsIndex === index) {
      setShowReviewsIndex(null);
    } else {
      setShowReviewsIndex(index);
    }
  };

  // Handle slide change (prev/next slides only)
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    if (
      lastSlideIndex !== null &&
      (currentIndex === lastSlideIndex - 1 ||
        currentIndex === lastSlideIndex + 1)
    ) {
      setShowReviewsIndex(null);
    }

    setLastSlideIndex(currentIndex);
  };

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
      <Swiper
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        effect="slide"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          10: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {[
          "/assets/body-banner.jfif",
          "/assets/body-banner.jfif",
          "/assets/body-banner.jfif",
          "/assets/body-banner.jfif",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5 mb-12 md:mb-16">
              <div className="h-[170px] md:h-[344px] w-full rounded-[17px] overflow-hidden relative">
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

              <div className="bg-[#CEBAFD52] rounded-[14px] p-3 md:p-5 mt-5">
                <button
                  onClick={() => handleToggleReviews(index)}
                  className="flex items-center justify-between w-full"
                >
                  <span className="text-xl font-medium">Reviews (40)</span>
                  <Image
                    src="/assets/icon/angle-down-small.svg"
                    alt="angle-down-small"
                    width={14}
                    height={9}
                  />
                </button>

                {/* Reviews  */}
                {showReviewsIndex === index && (
                  <div>
                    <ReviewsForm />
                    <ReviewsList />
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
