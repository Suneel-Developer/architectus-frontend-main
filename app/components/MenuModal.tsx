"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import UserLoginModal from "./UserForm/UserLoginModal";
import UserRegisterModal from "./UserForm/UserRegisterModal";
import UserForgotPasswordModal from "./UserForm/UserForgotPasswordModal";
import CaptchaModal from "./Modals/CaptchaModal";
import LanguageDropdown from "./LanguageDropdown";
import SettingsModal from "./Modals/SettingsModal";
import CallsModal from "./Modals/CallsModal";
import ReviewsRatingsModal from "./Modals/ReviewsRatingsModal";
import PostModal from "./Modals/PostModal";
import MessagesModal from "./Modals/MessagesModal/index";
import { useRouter } from "next/navigation";
import { RiContactsBookFill } from "react-icons/ri";
import { MdViewAgenda } from "react-icons/md";

const MenuModal = () => {
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [isOpenMenuModal, setIsOpenMenuModal] = useState<boolean>(false);
  useState<boolean>(false);
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] =
    useState<boolean>(false);
  const [isUserRegisterModalOpen, setIsUserRegisterModalOpen] =
    useState<boolean>(false);
  const [isUserForgotPasswordModalOpen, setIsUserForgotPasswordModalOpen] =
    useState<boolean>(false);
  const [isOpenCaptchaModal, setIsOpenCaptchaModal] = useState<boolean>(false);
  const [isOpenSettingsModal, setIsOpenSettingsModal] =
    useState<boolean>(false);
  const [isOpenCallsModal, setIsOpenCallsModal] = useState<boolean>(false);
  const [isOpenReviewsRatingsModal, setIsOpenReviewsRatingsModal] =
    useState<boolean>(false);
  const [isOpenPostModal, setIsOpenPostModal] = useState<boolean>(false);
  const [isOpenMessagesModal, setIsOpenMessagesModal] =
    useState<boolean>(false);

  // Open Menu Modal
  const handleOpenMenuModal = () => {
    setIsOpenMenuModal(!isOpenMenuModal);
  };

  //  Open UserLogin Modal
  const handleUserLoginModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsUserLoginModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close UserLogin Modal
  const handleCloseUserLoginModal = () => {
    setIsUserLoginModalOpen(false);
  };

  //  Open UserRegister Modal
  const handleUserRegisterModal = () => {
    setIsUserLoginModalOpen(false);
    setIsUserRegisterModalOpen(true);
    setIsOpenMenuModal(false);
  };

  //  Close UserRegister Modal
  const handleCloseUserRegisterModal = () => {
    setIsUserRegisterModalOpen(false);
  };

  //  Open ForgotPassword Modal
  const handleUserForgotPasswordModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsUserLoginModalOpen(false);
    setIsUserForgotPasswordModalOpen(true);
  };

  //  Close ForgotPassword Modal
  const handleCloseUserForgotPasswordModal = () => {
    setIsUserForgotPasswordModalOpen(false);
  };

  //  Open  Captcha Modal
  const handleOpenCaptchaModal = () => {
    setIsUserRegisterModalOpen(false);
    setIsOpenCaptchaModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close  Captcha Modal
  const handleCloseCaptchaModal = () => {
    setIsOpenCaptchaModal(false);
    setIsOpenMenuModal(false);
  };

  //  Open  Settings Modal
  const handleOpenSettingsModal = () => {
    setIsOpenSettingsModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close  Settings Modal
  const handleCloseSettingsModal = () => {
    setIsOpenSettingsModal(false);
  };

  //  Open Calls Modal
  const handleOpenCallsModal = () => {
    setIsOpenCallsModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close Calls Modal
  const handleCloseCallsModal = () => {
    setIsOpenCallsModal(false);
  };

  //  Open ReviewsRatings Modal
  const handleOpenReviewsRatingsModal = () => {
    setIsOpenReviewsRatingsModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close ReviewsRatings Modal
  const handleCloseReviewsRatingsModal = () => {
    setIsOpenReviewsRatingsModal(false);
  };

  //  Open Post Modal
  const handleOpenPostModal = () => {
    setIsOpenPostModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close Post Modal
  const handleClosePostModal = () => {
    setIsOpenPostModal(false);
  };

  //  Open Messages Modal
  const handleOpenMessagesModal = () => {
    setIsOpenMessagesModal(true);
    setIsOpenMenuModal(false);
  };

  //  Close Messages Modal
  const handleCloseMessagesModal = () => {
    setIsOpenMessagesModal(false);
  };

  useEffect(() => {
    if (isOpenMenuModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpenMenuModal]);

  return (
    <div>
      <button
        onClick={handleOpenMenuModal}
        className="bg-gradient logomenubg w-12 md:w-[60px] h-12 md:h-[60px] rounded-[14px] flex items-center justify-center relative"
      >
        <Image
          src="/assets/icon/menu-right-alt.svg"
          alt="menu-right-alt-icon"
          width={20}
          height={14}
        />
      </button>

      {isOpenMenuModal && (
        <div
          ref={dropdownRef}
          className="fixed inset-0 w-full h-screen z-50 py-5 px-[30px] flex justify-end"
        >
          {/* Close Window  */}
          <div
            onClick={handleOpenMenuModal}
            className={`absolute inset-0 h-screen windows-bg ${
              isOpenMenuModal ? "" : "no-blur"
            }`}
          ></div>

          <div className="relative flex flex-col items-end z-[999]">
            {/* Close Window btn  */}
            <button
              onClick={handleOpenMenuModal}
              className="closebtn-bg logomenubg min-w-[60px] min-h-[60px] rounded-[14px] flex items-center justify-center float-end mb-5"
            >
              <Image
                src="/assets/icon/times.svg"
                alt="times-logo"
                width={14}
                height={14}
              />
            </button>

            <div className="max-w-[200px] w-full md:hidden block">
              <LanguageDropdown />
            </div>

            <div className="min-w-[200px] w-full mt-3 logomenubg bg-white rounded-[20px] px-5 pb-5 flex flex-col min-h-[200px] h-fit overflow-y-scroll tabs-scrollbar">
              {/* POST BTN  */}
              <button
                onClick={handleOpenPostModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/document.svg"
                  alt="document"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Post</span>
              </button>

              {/* REVIEW BTN  */}
              <button
                onClick={handleOpenReviewsRatingsModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/star-tag.svg"
                  alt="star-tag"
                  width={18}
                  height={20}
                  loading="lazy"
                />
                <span>Review</span>
              </button>

              {/* FAVORIES BTN  */}
              <button
                onClick={() => router.push("/favorites")}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/heart.svg"
                  alt="heart"
                  width={18}
                  height={17}
                  loading="lazy"
                />
                <span>Favorites</span>
              </button>

              {/* CONTACT BTN  */}
              <button
                onClick={() => router.push("/contactus")}
                className="py-4 flex items-center gap-2 text-base font-medium"
              >
                <RiContactsBookFill className="text-lg text-[#5C24FC]" />
                <span>Contacts</span>
              </button>

              {/* Agenda BTN  */}
              <button
                onClick={() => router.push("/agenda")}
                className="py-4 flex items-center gap-2 text-base font-medium"
              >
                <MdViewAgenda className="text-[#5C24FC] text-lg" />
                <span>Agenda</span>
              </button>

              {/* CALLS BTN  */}
              <button
                onClick={handleOpenCallsModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/phone-call.svg"
                  alt="phone-call"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Calls</span>
              </button>

              {/* MESSAGES BTN  */}
              <button
                onClick={handleOpenMessagesModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/chats-text.svg"
                  alt="chats-text"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Messages</span>
              </button>

              {/* SETTINGS BTN  */}
              <button
                onClick={handleOpenSettingsModal}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/settings.svg"
                  alt="settings"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                <span>Settings</span>
              </button>

              {/* SUPPORT BTN  */}
              <button
                onClick={() => router.push("/support")}
                className="py-4 border-b border-opacity-10 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/headphones.svg"
                  alt="headphones"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span>Support</span>
              </button>

              {/* REGISTER BTN  */}
              <button
                onClick={handleUserRegisterModal}
                className="py-4 flex items-center gap-2 text-base font-medium"
              >
                <Image
                  src="/assets/icon/user-plus-bottom.svg"
                  alt="user-plus-bottom"
                  width={19}
                  height={20}
                  loading="lazy"
                />
                <span>Register</span>
              </button>

              {/* LOGOUT BTN  */}
              <button className="closebtn-bg p-4 flex items-center justify-center gap-2 text-base font-medium text-white rounded-[14px] mt-5">
                <Image
                  src="/assets/icon/log-out.svg"
                  alt="log-out"
                  width={19}
                  height={18}
                  loading="lazy"
                />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Login Windows Modal  */}
      {isUserLoginModalOpen && (
        <UserLoginModal
          onClose={handleCloseUserLoginModal}
          onSignup={handleUserRegisterModal}
          onForgotPassword={handleUserForgotPasswordModal}
        />
      )}

      {/* User Register Windows Modal  */}
      {isUserRegisterModalOpen && (
        <UserRegisterModal
          onClose={handleCloseUserRegisterModal}
          onLogin={handleUserLoginModal}
          onCaptcha={handleOpenCaptchaModal}
        />
      )}

      {/* User Forgot Password Windos Modal  */}
      {isUserForgotPasswordModalOpen && (
        <UserForgotPasswordModal onClose={handleCloseUserForgotPasswordModal} />
      )}

      {/* Captcha Modal  */}
      {isOpenCaptchaModal && <CaptchaModal onClose={handleCloseCaptchaModal} />}

      {/* Settings Modal  */}
      {isOpenSettingsModal && (
        <SettingsModal onClose={handleCloseSettingsModal} />
      )}

      {/* Calls Modal  */}
      {isOpenCallsModal && <CallsModal onClose={handleCloseCallsModal} />}

      {/* Reviews & Ratings Modal  */}
      {isOpenReviewsRatingsModal && (
        <ReviewsRatingsModal onClose={handleCloseReviewsRatingsModal} />
      )}

      {/* Post Modal  */}
      {isOpenPostModal && <PostModal onClose={handleClosePostModal} />}

      {/* Messages Modal  */}
      {isOpenMessagesModal && (
        <MessagesModal onClose={handleCloseMessagesModal} />
      )}
    </div>
  );
};

export default MenuModal;
