"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import ShareModal from "../Modals/ShareModal";
import FavoriteModal from "../Modals/FavoritesModal";
import Image from "next/image";

const avators = [
  "Jui Jutsu",
  "Boxer",
  "Kickboxer",
  "Karateka",
  "Bodybuilder",
  "Coach",
  "Swimmer",
  "Wrestler",
  "Sprinter",
  "Gymnast",
  "Weightlifter",
  "Cyclist",
  "Football Player",
  "Basketball Player ",
  "Tennis Player",
  "Rugby Player",
  "Volleyball Player",
];
const genders = ["Male", "Female"];

const Slider = () => {
  const [genderDropdowns, setGenderDropdowns] = useState({});
  const [avatarDropdowns, setAvatarDropdowns] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedGenders, setSelectedGenders] = useState({});
  const [isShareModalVisible, setIsShareModalVisible] =
    useState<boolean>(false);
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);

  const toggleGenderDropdown = (index: any) => {
    setGenderDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAvatarDropdown = (index: any) => {
    setAvatarDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSelectGender = (index: any, gender: any) => {
    setSelectedGenders((prev) => ({
      ...prev,
      [index]: gender,
    }));
    setGenderDropdowns((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleSelectAvatar = (index: any, option: any) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: option,
    }));
    setAvatarDropdowns((prev) => ({
      ...prev,
      [index]: false,
    }));
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
        loop={true}
        breakpoints={{
          10: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[
          "/assets/body-banner.jfif",
          "/assets/body-banner.jfif",
          "/assets/body-banner.jfif",
          "/assets/body-banner.jfif",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white logomenubg rounded-2xl p-5 mb-12 md:mb-16">
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

              <div className="flex items-center justify-center gap-3 mt-3">
                <button className="bg-gradient w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                  <Image src="/assets/icon/arrow-left-small.svg" alt="arrow-left-small" width={18} height={10} />
                </button>

                <button className="bg-gradient-pausebtn w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                  <Image src="/assets/icon/pause.svg" alt="pause" width={18} height={10} />
                </button>

                <button className="bg-gradient-playbtn w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                  <Image src="/assets/icon/play.svg" alt="play" width={18} height={10} />
                </button>

                <button className="bg-gradient w-10 md:w-[61px] h-10 md:h-[61px] rounded-lg md:rounded-xl flex items-center justify-center">
                  <Image src="/assets/icon/arrow-left-small.svg" alt="arrow-right-small" width={18} height={10} className="rotate-180" />
                </button>
              </div>

              {/* Dropdowns  */}
              <div className="flex flex-col md:flex-row gap-5 mt-5">
                {/* Gender Dropdown */}
                <div className="w-full">
                  <h3 className="text-base font-semibold text-gradient mb-2">
                    Gender
                  </h3>
                  <div className="relative w-full">
                    <button
                      onClick={() => toggleGenderDropdown(index)}
                      className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
                    >
                      {selectedGenders[index] || "Male"}
                      <IoIosArrowDown
                        className={`text-purple-500 text-xl ${
                          genderDropdowns[index] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {genderDropdowns[index] && (
                      <ul className="z-50 w-full mt-1 bg-white border rounded-lg shadow-lg h-fit min-h-[80px] overflow-y-scroll formscrollbar">
                        {genders.map((gender, i) => (
                          <li
                            key={i}
                            onClick={() => handleSelectGender(index, gender)}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            {gender}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Avatar Dropdown */}
                <div className="w-full">
                  <h3 className="text-base font-semibold text-gradient mb-2">
                    Avatar
                  </h3>
                  <div className="relative w-full">
                    <button
                      onClick={() => toggleAvatarDropdown(index)}
                      className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
                    >
                      {selectedOptions[index] || "Coach"}
                      <IoIosArrowDown
                        className={`text-purple-500 text-xl ${
                          avatarDropdowns[index] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {avatarDropdowns[index] && (
                      <ul className="z-50 w-full mt-1 bg-white border rounded-lg shadow-lg h-[150px] overflow-y-scroll formscrollbar">
                        {avators.map((avator, i) => (
                          <li
                            key={i}
                            onClick={() => handleSelectAvatar(index, avator)}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            {avator}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
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
