"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";


interface ModalProps {
  onClose: () => void;
}

const PostModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          <h1 className="font-semibold text-xl text-center mb-3">
           Post
          </h1>

        </div>
      </div>
    </div>
  );
};

export default PostModal;
