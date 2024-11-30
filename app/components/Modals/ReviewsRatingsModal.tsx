"use client";
import React from "react";
import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-img.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-img.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
  {
    id: 3,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-img.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    rating: 5,
  },
];

interface ModalProps {
  onClose: () => void;
}

const ReviewsRatingsModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          <h1 className="font-semibold text-xl text-center mb-3">
            Reviews & Ratings
          </h1>

          <p className="text-sm text-center mb-5">
            You can view and reply user&apos;s reviews & rating here
          </p>

          <div className="flex flex-col gap-3">
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="bg-[#EEE8FD] rounded-[14px] p-3 md:p-5 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={52}
                      height={52}
                      loading="lazy"
                      className="rounded-full object-cover"
                    />

                    <div className="flex flex-col md:gap-[6px]">
                      <h2 className="text-sm md:text-base font-semibold">
                        {review.name}
                      </h2>

                      <p className="text-[#7B3BAC] text-[10px] font-semibold">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                     <Image key={index} src="/assets/icon/filled-star.svg" alt="filled star" width={20} height={20} />
                    ))}
                  </div>
                </div>

                <p className="text-xs md:text-sm">{review.reviewText}</p>

                <textarea
                  placeholder="Add your reply . . ."
                  className="h-24 w-full bg-white rounded-[14px] p-4 placeholder:text-[#0000005C] outline-none resize-none"
                ></textarea>

                <button className="bg-gradient text-white rounded-[14px] w-full h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
                  Submit
                  <Image
                    src="/assets/icon/arrow-right-small.svg"
                    alt="arrow-right-small"
                    width={18}
                    height={10}
                    loading="lazy"
                  />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="btn-red-gradient mt-4 text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsRatingsModal;
