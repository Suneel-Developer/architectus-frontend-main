"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import SupplierPlan from "../Store/SupplierPlan";
import Reviews from "../Reviews";
import Link from "next/link";
import ShareModal from "../Visualization/ShareModal";
import ChartModal from "./ChartModal";
import DownloadModal from "../Visualization/DownloadModal";

const products = [
  {
    id: 1,
    image: "/assets/product-1.jpg",
    name: "Loaded",
    link: "https://www.trufit.eu/lv/4endurance-pro-loaded#168=422",
  },
  {
    id: 2,
    image: "/assets/product-2.jpg",
    name: "Pro Flex",
    link: "https://www.trufit.eu/lv/4endurance-pro-pro-flex#168=1256",
  },
  {
    id: 3,
    image: "/assets/product-3.jpg",
    name: "L-Carnitine Energy Gel",
    link: "https://www.trufit.eu/lv/4endurance-pro-l-carnitine-energy-gel#168=1288",
  },
  {
    id: 4,
    image: "/assets/product-4.jpg",
    name: "Acetyl-L-Carnitine",
    link: "https://www.trufit.eu/lv/4endurance-pro-acetyl-l-carnitine#168=422",
  },
];

const NutritionProducts: React.FC = () => {
  const [isOpenSupplierPlanModal, setIsOpenSupplierPlanModal] =
    useState<Boolean>(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState<Boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isOpenChartModalOpen, setIsOpenChartModalOpen] = useState<boolean>(false);
  const [isOpenDownloadModalOpen, setIsOpenDownloadModalOpen] = useState<boolean>(false);

  const handleCloseSupplierPlanModal = () => {
    setIsOpenSupplierPlanModal(false);
  };

  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
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
    <div className="mb-12 max-w-[500px] w-full mx-auto">
      <Swiper
        spaceBetween={20}
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
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Loop through the products array and render each product as a SwiperSlide */}
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white productbox rounded-[14px] overflow-hidden mb-14 md:mb-20">
              <div className="h-[260px] w-full bg-white py-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="py-4 px-5 bg-white">
                <h2 className="text-[#0F0A19] font-semibold text-xl mb-10">
                  {product.name}
                </h2>

                <div className="flex flex-col gap-2">
                  <Link
                    href={product.link}
                    target="_blank"
                    className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 flex items-center justify-center text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
                  >
                    Recipe
                  </Link>
                  <button onClick={handleChartModal} className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
                    Chart
                  </button>

                  <button
                    onClick={handleShareModal}
                    className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
                  >
                    Share
                  </button>

                  <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
                    Save
                  </button>

                  <button
                    onClick={handleShowReviews}
                    className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
                  >
                    Reviews (8)
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isVisibleReviews && (
        <div className="px-4 my-16">
          <Reviews />
        </div>
      )}

      {/* Share Modal */}
      {isShareModalOpen && <ShareModal onClose={handleCloseShareModal} />}

      {/* Chart Modal */}
      {isOpenChartModalOpen && <ChartModal onClose={handleCloseChartModal} onCreate={handleDownloadModal} />}

      {/* Chart Modal */}
      {isOpenDownloadModalOpen && <DownloadModal onClose={handleCloseDownloadModal} />}

      {isOpenSupplierPlanModal && (
        <SupplierPlan onClose={handleCloseSupplierPlanModal} />
      )}
    </div>
  );
};

export default NutritionProducts;
