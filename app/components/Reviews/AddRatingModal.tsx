import React from "react";

interface DownloadModalProps {
  onClose: () => void;
}

const AddRatingModal: React.FC<DownloadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed w-full top-0 bottom-0 left-0 right-0 inset-0 h-screen flex items-center justify-center z-50 px-5 windows-bg">
      {/* If Click outside the white box then Window Close  */}
      <div onClick={onClose} className="absolute inset-0 h-screen"></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left">
          Forgot Password
        </h1>

        <p className="mt-4 text-[#6D6D6D] text-left text-sm">
          Please enter your email to reset the password
        </p>
      </div>
    </div>
  );
};

export default AddRatingModal;
