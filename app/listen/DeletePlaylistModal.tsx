"use client";
import React from "react";
import Image from "next/image";

const DeletePlayListModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="bg-white rounded-[30px] px-5 py-11 w-full mx-auto max-w-[600px] relative overflow-y-scroll overflow-x-hidden formscrollbar">
        <div className="bg-[#F0EBFF] mx-auto w-[230px] h-[230px] rounded-full flex items-center justify-center ">
          <Image
            src="/assets/icon/delete.svg"
            alt="delete icon"
            width={68}
            height={88}
          />
        </div>

        <p className="text-sm md:text-2xl text-center font-medium mt-7">
          Are You Sure Want to Delete Playlist?
        </p>

        {/* Actions Buttons */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={onClose}
            className="bg-gradient text-white rounded-[14px] w-full max-w-[215px] h-14 text-center flex items-center justify-center gap-3 p-2 text-xl font-medium transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button className="btn-red-gradient text-white rounded-[14px] w-full max-w-[215px] h-14 text-center flex items-center justify-center gap-3 p-2 text-xl font-medium transition-opacity duration-300 hover:opacity-90">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePlayListModal;
