"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import SupplierRegisterModal from "../Store/SupplierRegisterModal";
import SupplierPlan from "../Store/SupplierPlan";

interface RegisterModalProps {
  onClose: () => void;
  onLogin: () => void;
  onCaptcha: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  onClose,
  onLogin,
  onCaptcha,
}) => {
  const [videoSrc1, setVideoSrc1] = useState(null);
  const [imageFile1, setImageFile1] = useState(null);
  const [isOpenSuplierPlanmodal, setIsOpenSuplierPlanmodal] = useState(null);
  const [isSupplierRegisterModal, setIsSupplierRegisterModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("sports");

  const handleFileChange1 = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc1(videoURL);
    }
  };

  const handleFileChange2 = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageFile1(imageURL);
    }
  };

  const handleOpenSupplierRegisterModal = (event: any) => {
    if (event.target.value === "advertise") {
      setIsSupplierRegisterModal(true);
    }
    setSelectedOption(event.target.value);
  };

  const handleCloseSupplierRegisterModal = () => {
    setIsSupplierRegisterModal(false);
    setSelectedOption("sports");
  };

  const handleOpenSupplierPlanModal = () => {
    setIsOpenSuplierPlanmodal(true);
    setIsSupplierRegisterModal(false);
  };

  const handleCloseSupplierPlanModal = () => {
    setIsOpenSuplierPlanmodal(false);
    setIsSupplierRegisterModal(true);
  };

  const closeAndOpenSportsModal = (option: string) => {
    setSelectedOption(option);
    setIsSupplierRegisterModal(false);
  };

  return (
    <div className="fixed inset-0 min-h-screen flex items-center justify-center z-50 px-5 py-3 windows-bg">
      <div onClick={onClose} className="absolute inset-0 h-screen"></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full md:min-h-fit">
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

        <form className="flex flex-col gap-y-4 h-[90vh] md:h-[82vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          <div className="relative mt-5">
            <select
              onChange={handleOpenSupplierRegisterModal}
              value={selectedOption}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] h-fit cursor-pointer appearance-none w-full"
            >
              <option value="sports">Sports</option>
              <option value="therapies">Therapies</option>
              <option value="advertise">Advertise</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 text-2xl" />
          </div>

          {/* Image File Uploader  */}
          <div>
            {!imageFile1 && (
              <div className="relative borderUpload py-5 md:py-10">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                  type="file"
                  onChange={handleFileChange2}
                />
                <div className="text-center">
                  <img
                    alt="upload"
                    loading="lazy"
                    width="42"
                    height="34"
                    decoding="async"
                    className="mx-auto"
                    src="/assets/icon/upload-icon.svg"
                  />
                  <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                    <label htmlFor="file-upload" className="relative">
                      <span>Drag and drop </span>
                      <span className="text-[#3D2278] font-semibold">
                        or browse
                      </span>
                      <input
                        id="file-upload"
                        className="sr-only"
                        type="file"
                        name="file-upload"
                      />
                    </label>
                  </h3>
                </div>
              </div>
            )}

            {imageFile1 && (
              <div className="border-[#E7E7E7] flex-1 w-full h-[160px] rounded-[10px] bg-[#FAFAFA] overflow-hidden">
                <div className="max-w-full md:max-w-[240px] w-full mx-auto h-[160px]">
                  <img
                    src={imageFile1}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}
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
              placeholder="Be as specific as possible — consider your sport discipline, training method, exercise type, skill level, full-body workouts, or focus on specific muscle groups."
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full min-h-[140px] rounded-[10px] bg-[#FAFAFA]"
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
            closeAndOpenSportsModal={closeAndOpenSportsModal}
          />
        </div>
      )}

      {isOpenSuplierPlanmodal && (
        <SupplierPlan onClose={handleCloseSupplierPlanModal} />
      )}
    </div>
  );
};

export default RegisterModal;
