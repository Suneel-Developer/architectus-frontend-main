"use client";
import React, { useState } from "react";
import Image from "next/image";
import PostModal from "../Modals/PostModal";

const Hero: React.FC = () => {
  const [isOpenPostModal, setIsOpenPostModal] = useState<boolean>(false);

  //   Open Post Modal
  const handleOpenPostModal = () => {
    setIsOpenPostModal(true);
  };

  //  Close Post Modal
  const handleClosePostModal = () => {
    setIsOpenPostModal(false);
  };

  return (
    <section>
      <div className="px-4 md:px-[30px] mb-5 md:mb-8">
        <div className="logomenubg bg-white w-full rounded-[30px] flex items-center justify-between gap-5 md:gap-10 flex-col md:flex-row px-5 md:px-[30px] py-4">
          <p className="text-2xl md:text-3xl font-medium">
           Feed
          </p>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleOpenPostModal}
              className="sm:w-[200px] w-full rounded-[14px] bg-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-4 py-4 text-white font-medium"
            >
              <Image
                src="/assets/icon/w-plus-circle.svg"
                alt="plus circle icon"
                width={20}
                height={20}
              />
              Create Post
            </button>
          </div>
        </div>
      </div>

      {/* Post Windows  */}
      {isOpenPostModal && <PostModal onClose={handleClosePostModal} />}
    </section>
  );
};

export default Hero;
