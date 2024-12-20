"use client";
import React, { useState } from "react";
import ShareModal from "../Modals/ShareModal";
import ChartModal from "../Nutrition/ChartModal";
import DownloadModal from "../Modals/DownloadModal";
import Image from "next/image";
import ReviewsForm from "../Reviews/ReviewsForm";
import ReviewsList from "../Reviews/ReviewsList";
import Link from "next/link";
import FavoriteModal from "../Modals/FavoritesModal";
import AddRatingModal from "../Reviews/AddRatingModal";

const nutritionproducts = [
  {
    id: 1,
    image: "/assets/product-1.png",
    name: "Loaded",
    brand: "4Endurance Pro",
    price: "$29,30",
    discountprice: " $19,43",
    link: "https://www.trufit.eu/lv/4endurance-pro-loaded#168=422",
    stamplogo: "/assets/stamp-logo-store.png",
  },
  {
    id: 2,
    image: "/assets/product-2.png",
    name: "Pro Flex",
    brand: "Smartys",
    price: "$39,90",
    discountprice: " $19,43",
    link: "https://www.trufit.eu/lv/4endurance-pro-pro-flex#168=1256",
  },
  {
    id: 3,
    image: "/assets/product-3.png",
    name: "L-Carnitine Energy Gel",
    brand: "Bowflex",
    price: "$29,30",
    discountprice: " $19,43",
    link: "https://www.trufit.eu/lv/4endurance-pro-l-carnitine-energy-gel#168=1288",
  },
  {
    id: 4,
    image: "/assets/product-4.png",
    name: "Acetyl-L-Carnitine",
    brand: "4Endurance Pro",
    price: "$29,30",
    discountprice: " $19,43",
    link: "https://www.trufit.eu/lv/4endurance-pro-acetyl-l-carnitine#168=422",
  },
];

const ProductsSlider: React.FC = () => {
  const [isOpenFavoritesModal, setIsOpenFavoritesModal] =
    useState<Boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isOpenChartModalOpen, setIsOpenChartModalOpen] =
    useState<boolean>(false);
  const [isOpenDownloadModalOpen, setIsOpenDownloadModalOpen] =
    useState<boolean>(false);
  const [isOpenAddRatingModal, setIsOpenAddRatingModal] =
    useState<boolean>(false);
  const [showReviewsIndex, setShowReviewsIndex] = useState<number | null>(null);

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
            {/* Product Image  */}
            <div className="rounded-2xl overflow-hidden h-[320px] md:h-[384px] mb-4 bg-[#0000000F] p-3 relative">
              <img
                src={nutrition.image}
                alt={nutrition.name}
                className="h-full bg-contain mx-auto relative"
              />

              <div className="absolute left-0 right-0 mx-auto bottom-5 flex gap-2 md:gap-3 justify-center w-full z-40">
                {/* Share btn  */}
                <button
                  onClick={handleShareModal}
                  className="logomenubg bg-white relative rounded-lg md:rounded-[14px] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
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
                  className="logomenubg bg-white rounded-lg md:rounded-[14px] w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                >
                  <Image
                    src="/assets/icon/favioures-iocn.svg"
                    alt="heart"
                    loading="lazy"
                    width={18}
                    height={16}
                  />
                </button>

                {/* Reviews btn  */}
                <button
                  onClick={() => handleToggleReviews(index)}
                  className="logomenubg bg-white rounded-lg md:rounded-[14px] px-3 md:px-7 h-10 md:h-14 flex items-center justify-center gap-[10px] font-medium text-base md:text-xl"
                >
                  <Image
                    src="/assets/icon/star-tag-2.svg"
                    alt="star-tag"
                    loading="lazy"
                    width={18}
                    height={16}
                  />
                  Reviews (40)
                </button>
              </div>
              
              {nutrition.stamplogo && (
                <div className="w-28 md:w-32 h-28 md:h-32 overflow-hidden rounded-full absolute top-2 right-2 z-40">
                  <img
                    src={nutrition.stamplogo}
                    alt="stamp"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Product Details  */}

            <div>
              <h2 className="text-lg font-semibold">{nutrition.name}</h2>

              <ul className="flex flex-col gap-2 my-3">
                <li className="flex items-center justify-between text-sm">
                  <p>Brand</p>
                  <p className="font-semibold">{nutrition.brand}</p>
                </li>

                <li className="flex items-center justify-between text-sm">
                  <p className="text-sm">Price</p>
                  <p className="font-semibold text-[#FC2424] line-through">
                    {nutrition.price}
                  </p>
                </li>

                <li className="flex items-center justify-between text-sm">
                  <p className="text-sm">Discounted Price</p>
                  <p className="font-semibold text-[#16AE8A] underline">
                    {nutrition.discountprice}
                  </p>
                </li>
              </ul>

              <Link
                href={nutrition.link}
                target="_blank"
                className="w-full rounded-[14px] h-14 bg-gradient flex items-center gap-2 justify-center p-4 text-white font-medium"
              >
                Buy Now
              </Link>
            </div>

            {/* Reviews  */}
            <div className="bg-[#CEBAFD52] rounded-[14px]">
              {/* Reviews  */}
              {showReviewsIndex === index && (
                <div className="p-3 md:p-5 mt-5">
                  <ReviewsForm onOpen={handleOpenAddRatingModal} />
                  <ReviewsList />
                </div>
              )}
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

      {/* Add Rating Modal  */}
      {isOpenAddRatingModal && (
        <AddRatingModal onClose={handleCloseAddRatingModal} />
      )}
    </div>
  );
};

export default ProductsSlider;
