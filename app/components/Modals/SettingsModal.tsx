"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { IoEyeOffOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

interface ModalProps {
  onClose: () => void;
}

const SettingsModal: React.FC<ModalProps> = ({ onClose }) => {
  // State for toggling visibility of each password field
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [avatarSrc, setAvatarSrc] = useState<string>("/assets/avator-img.png");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setAvatarSrc(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          <h1 className="font-semibold text-xl text-center mb-3">Settings</h1>

          <p className="text-sm text-center mb-8">
            Edit your personal details & you can update anything.
          </p>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name & Last Name Label & Inputs  */}
              <div className="flex flex-col gap-5 w-full order-2 md:order-1">
                {/* First Name  */}
                <div>
                  <label
                    htmlFor="First Name"
                    className="text-gradient block font-medium mb-[6px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value="John"
                    className="bg-[#EEE8FD] rounded-xl p-3 w-full"
                  />
                </div>

                {/* Last Name  */}
                <div>
                  <label
                    htmlFor="Last Name"
                    className="text-gradient block font-medium mb-[6px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value="Doe"
                    className="bg-[#EEE8FD] rounded-xl p-3 w-full"
                  />
                </div>
              </div>

              {/* Select Profile Image  */}
              <div className="flex items-center justify-center relative w-full h-full order-1 md:order-2">
                <div className="relative">
                  {/* Show Selected Image  */}
                  <Image
                    src={avatarSrc}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="rounded-full object-cover h-[157px] w-[157px]"
                  />

                  {/* When user clcik then upload selectd profile  */}
                  <div className="w-9 h-9 border-[3px] border-white bg-gradient flex items-center justify-center rounded-full cursor-pointer absolute top-0 right-0">
                    <label htmlFor="upload-avatar" className="cursor-pointer">
                      <Image
                        src="/assets/icon/image-plus.svg"
                        alt="Add image plus icon"
                        width={16}
                        height={15}
                      />
                    </label>
                    <input
                      type="file"
                      id="upload-avatar"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              {/* Email  */}
              <div>
                <label
                  htmlFor="Email"
                  className="text-gradient block font-medium mb-[6px]"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  value="Johndoe@email.com"
                  className="bg-[#EEE8FD] rounded-xl p-3 w-full"
                />
              </div>

              {/* Current Password */}
              <div>
                <label
                  htmlFor="current-password"
                  className="text-gradient block font-medium mb-[6px]"
                >
                  Current Password
                </label>

                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    id="current-password"
                    value="12345678"
                    className="bg-[#EEE8FD] rounded-xl p-3 w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-4 my-auto top-0 bottom-0 opacity-50 text-xl"
                  >
                    {showCurrentPassword ? <LuEye /> : <IoEyeOffOutline />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label
                  htmlFor="new-password"
                  className="text-gradient block font-medium mb-[6px]"
                >
                  New Password
                </label>

                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="new-password"
                    className="bg-[#EEE8FD] rounded-xl p-3 w-full"
                  />

                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 my-auto top-0 bottom-0 opacity-50 text-xl"
                  >
                    {showNewPassword ? <LuEye /> : <IoEyeOffOutline />}
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="text-gradient block font-medium mb-[6px]"
                >
                  Confirm New Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    className="bg-[#EEE8FD] rounded-xl p-3 w-full"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 my-auto top-0 bottom-0 opacity-50 text-xl"
                  >
                    {showConfirmPassword ? <LuEye /> : <IoEyeOffOutline />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 mt-5">
              <button
                onClick={onClose}
                className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
              >
                Cancel
              </button>

              <button className="bg-gradient text-white rounded-[14px] w-full max-w-[220px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
              Update
                <Image
                  src="/assets/icon/check-circle.svg"
                  alt="check-circle"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
