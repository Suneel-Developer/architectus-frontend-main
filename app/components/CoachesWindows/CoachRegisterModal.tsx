"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import SupplierRegisterModal from "../Store/SupplierRegisterModal";
import SupplierPlan from "../Store/SupplierPlan";

interface CoachRegisterModalProps {
  onClose: () => void;
  onLogin: () => void;
  onCaptcha: () => void;
}

const CoachRegisterModal: React.FC<CoachRegisterModalProps> = ({
  onClose,
  onLogin,
  onCaptcha,
}) => {
  const [videoSrc1, setVideoSrc1] = useState(null);
  const [isOpenSuplierPlanmodal, setIsOpenSuplierPlanmodal] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSupplierRegisterModal, setIsSupplierRegisterModal] = useState(false);

  const handleFileChange1 = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc1(videoURL);
    }
  };

  const handleOpenSupplierRegisterModal = (event: any) => {
    if (event.target.value === "Product /service") {
      setIsSupplierRegisterModal(true);
    }
  };

  const handleCloseSupplierRegisterModal = () => {
    setIsSupplierRegisterModal(false);
  };

  const handleOpenSupplierPlanModal = () => {
    setIsOpenSuplierPlanmodal(true);
    setIsSupplierRegisterModal(false);
  };

  const handleCloseSupplierPlanModal = () => {
    setIsOpenSuplierPlanmodal(false);
    setIsSupplierRegisterModal(true);
  };

  return (
    <div className="fixed inset-0 min-h-screen flex items-center justify-center z-50 px-5 py-3 windows-bg">
      {/* If Click outside the white box then Window Close  */}
      <div onClick={onClose} className="absolute inset-0 h-screen"></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icon/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-3 right-4 cursor-pointer"
        />

        <form className="flex flex-col gap-y-4 h-fit min-h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          <div className="relative mt-5">
            <select
              onClick={() => setIsOpen((prev) => !prev)}
              onChange={handleOpenSupplierRegisterModal}
              onBlur={() => setIsOpen(false)}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit cursor-pointer appearance-none w-full"
              defaultValue="Type of content"
            >
              <option value="Type of content" disabled>
                Type of content
              </option>
              <option value="Sports">Sports</option>
              <option value="podcasts">Podcasts</option>
              <option value="Product /service">Product /service</option>
            </select>
            <MdKeyboardArrowDown
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 text-2xl ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Video Uploader 1 */}
          <div className="flex flex-col gap-4">
            {!videoSrc1 && (
              <div className="relative borderUpload py-5 md:py-10">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-pointer"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange1}
                />
                <div className="text-center">
                  <img
                    alt="video-camera"
                    loading="lazy"
                    width="42"
                    height="34"
                    decoding="async"
                    className="mx-auto"
                    src="/assets/icon/video-camera.svg"
                  />
                  <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                    <span>Drag and drop or </span>
                    <span className="text-[#3D2278] font-semibold">browse</span>
                  </h3>
                </div>
              </div>
            )}

            {videoSrc1 && (
              <div className="border-[#E7E7E7] flex-1 w-full h-[160px] rounded-[10px] bg-[#FAFAFA] overflow-hidden">
                <div className="max-w-full md:max-w-[240px] w-full mx-auto h-[160px]">
                  <video
                    src={videoSrc1}
                    autoPlay
                    controls
                    className="h-full w-full object-cover"
                  ></video>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 w-full py-4 h-fit border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA]"
            />

            <textarea
              placeholder="Enter Description"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
            />

            {/* Enter your Language  */}
            <input
              type="text"
              placeholder="Language"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] h-fit w-full px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA]"
            />

            {/* Enter Your Webiste link  */}
            <input
              type="text"
              placeholder="Add your website link"
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />
          </div>

          <button
            type="button"
            onClick={onCaptcha}
            className="bg-gradient mt-3 text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Register
          </button>

          <p className="text-center text-sm text-[#0F0A19B2]">
            Already have an account?&nbsp;
            <span
              onClick={onLogin}
              className="text-sm cursor-pointer font-semibold text-[#3D2278]"
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {isSupplierRegisterModal && (
        <div className="z-50">
          <SupplierRegisterModal
            onClose={handleCloseSupplierRegisterModal}
            onCreate={handleOpenSupplierPlanModal}
            onLogin={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      )}

      {isOpenSuplierPlanmodal && (
        <SupplierPlan onClose={handleCloseSupplierPlanModal} />
      )}
    </div>
  );
};

export default CoachRegisterModal;
