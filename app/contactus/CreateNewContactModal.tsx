"use client";
import React, { useState } from "react";
import Image from "next/image";

const CreateNewContactModal = ({ onClose }) => {
  const [image, setImage] = useState("/assets/user-review-img.png"); 

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); 
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="bg-white rounded-[30px] px-5 py-11 w-full mx-auto max-w-[600px] relative overflow-y-scroll overflow-x-hidden formscrollbar">
        <form className="max-w-[343px] w-full mx-auto">
          <h1 className="text-3xl text-center mb-5">Create Contact</h1>

          <div className="space-y-4 mb-8">
            {/* profile  */}
            <div className="w-[170px] h-[170px] rounded-full overflow-hidden mx-auto relative group">
              <img
                src={image}
                alt="user profile"
                className="w-full h-full object-cover"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-30"
                title="Change Profile Picture"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 hidden group-hover:flex items-center justify-center text-white text-sm font-medium">
                Click to Change
              </div>
            </div>

            {/* Delete & Download btn  */}
            <div className="flex items-center mx-auto justify-center space-x-4">
              <button className="w-9 h-9 flex items-center justify-center bg-[#EDF2FE] rounded-lg">
                <Image
                  src="/assets/icon/delete.svg"
                  alt="delete icon"
                  width={17}
                  height={22}
                />
              </button>

              <button className="w-9 h-9 flex items-center justify-center bg-[#EDF2FE] rounded-lg">
                <Image
                  src="/assets/icon/download.svg"
                  alt="download icon"
                  width={26}
                  height={29}
                />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="First Name"
                className="text-[#6530FC] block mb-2 font-medium text-lg"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="bg-[#EEE8FD] rounded-xl p-4 text-lg placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
              />
            </div>

            <div>
              <label
                htmlFor="Last Name"
                className="text-[#6530FC] block mb-2 font-medium text-lg"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="bg-[#EEE8FD] rounded-xl p-4 text-lg placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-6">
            <button
              onClick={onClose}
              className="btn-red-gradient text-white rounded-[14px] w-full h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
            >
              Cancel
            </button>

            <button className="bg-gradient text-white rounded-[14px] w-full h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewContactModal;
