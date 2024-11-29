import React from "react";

const VideoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="bg-white rounded-[20px] p-5 w-full mx-auto max-w-[600px] relative">
        <video src="/assets/video-3.mp4" controls className="rounded-[22px] h-[240px] md:h-[382px] object-cover"></video>
      </div>
    </div>
  );
};

export default VideoModal;
