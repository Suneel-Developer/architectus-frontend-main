"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import ShareModal from "../Avatar/ShareModal";
import ChartModal from "./ChartModal";
import DownloadModal from "../Avatar/DownloadModal";
import Image from "next/image";
import Link from "next/link";
import FavoriteModal from "../FavoritesModal";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  "Appetizers & Starters",
  "Soups",
  "Main course",
  "Soups",
  "Juices",
  "Smoothies",
  "Salads",
  "Side Dishes",
  "Desserts",
  "Snacks",
  "Beverages",
  "Breakfast",
  "Breads",
  "Baked Goods",
  "Finger Foods",
  "Street Food",
];

const nutritionproducts = [
  {
    id: 1,
    image: "/assets/product-1.png",
    name: "Loaded",
    link: "https://www.trufit.eu/lv/4endurance-pro-loaded#168=422",
  },
  {
    id: 2,
    image: "/assets/product-2.png",
    name: "Pro Flex",
    link: "https://www.trufit.eu/lv/4endurance-pro-pro-flex#168=1256",
  },
  {
    id: 3,
    image: "/assets/product-3.png",
    name: "L-Carnitine Energy Gel",
    link: "https://www.trufit.eu/lv/4endurance-pro-l-carnitine-energy-gel#168=1288",
  },
  {
    id: 4,
    image: "/assets/product-4.png",
    name: "Acetyl-L-Carnitine",
    link: "https://www.trufit.eu/lv/4endurance-pro-acetyl-l-carnitine#168=422",
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
  const [categoryDropdowns, setCategoryDropdowns] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});

  const toggleCategoryDropdown = (index: any) => {
    setCategoryDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSelectCategory = (index: any, gender: any) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [index]: gender,
    }));
    setCategoryDropdowns((prev) => ({
      ...prev,
      [index]: false,
    }));
  };


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
    <div className="mx-auto relative z-10 px-5 md:px-0">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
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
        className="mySwiper z-0"
      >
        {nutritionproducts.map((nutrition, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5 mb-12 md:mb-16">
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

              {/* Category Drodpdowns  */}
              <div className="flex flex-col md:flex-row gap-5 mt-5">
                <div className="w-full">
                  <h3 className="text-base font-semibold text-gradient mb-2">
                    Select Category
                  </h3>

                  <div className="relative w-full">
                    <button
                      onClick={() => toggleCategoryDropdown(index)}
                      className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
                    >
                      {selectedCategory[index] || "Select Category"}
                      <IoIosArrowDown
                        className={`text-purple-500 text-xl ${
                          categoryDropdowns[index] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {categoryDropdowns[index] && (
                      <ul className="z-50 w-full mt-1 bg-white border rounded-lg shadow-lg h-[150px] overflow-y-scroll formscrollbar">
                        {categories.map((category, i) => (
                          <li
                            key={i}
                            onClick={() =>
                              handleSelectCategory(index, category)
                            }
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            {category}
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
