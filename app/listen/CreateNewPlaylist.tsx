"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPause } from "react-icons/fa6";
import PlayListPreview from "./PlaylistPreview";

const CreateNewPlayList = ({ onClose }) => {
  const [image, setImage] = useState("/assets/user-review-img.png");
  const [musicFile, setMusicFile] = useState(null);
  const [isPlayListPreviewModal, setIsPlayListPreviewModal] =
    useState<boolean>(false);

  // Function to handle image change
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleMusicUpload = (event: any) => {
    setMusicFile(event.target.files[0]);
  };

  //   Open PlayList Preview Modal
  const handleOpenPlayListPreviewModal = () => {
    setIsPlayListPreviewModal(true);
  };

  //  Close PlayList Preview Modal
  const handleClosePlayListPreviewModal = () => {
    setIsPlayListPreviewModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[800px] relative h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
        <h1 className="text-3xl text-center font-medium mb-2">
          Create New Playlist
        </h1>
        <p className="text-sm md:text-base text-center">
          Add this track to your playlist and keep the vibes going!
        </p>

        {/* Profile Image */}
        <div className="space-y-3 my-5">
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

        <div className="max-w-[505px] w-full mx-auto">
          {/* Playlist Name Input */}
          <div>
            <label
              htmlFor="playlist-name"
              className="text-[#6530FC] block mb-2 font-medium text-base"
            >
              Playlist Name
            </label>

            <input
              type="text"
              placeholder="My Gym Songs"
              className="bg-[#EEE8FD] rounded-xl p-4 text-base font-medium placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
            />
          </div>

          {/* Music Name Inputs */}
          <div className="space-y-2 my-3">
            <label
              htmlFor="music-name"
              className="text-[#6530FC] block font-medium text-base"
            >
              Music Name
            </label>

            <input
              type="text"
              placeholder="My New Rap.mp1"
              className="bg-[#EEE8FD] rounded-xl p-4 text-base font-medium placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
            />

            <input
              type="text"
              placeholder="My New Rap.mp2"
              className="bg-[#EEE8FD] rounded-xl p-4 text-base font-medium placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
            />

            <input
              type="text"
              placeholder="My New Rap.mp3"
              className="bg-[#EEE8FD] rounded-xl p-4 text-base font-medium placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
            />
          </div>

          {/* Music File Upload */}
          <div>
            <label
              htmlFor="music-upload"
              className="text-[#6530FC] block mb-2 font-medium text-lg"
            >
              Upload Music
            </label>

            <div className="flex items-center gap-2 bg-[#EEE8FD] rounded-xl p-4 h-14">
              <input
                type="file"
                id="music-upload"
                // accept="audio/*"
                onChange={handleMusicUpload}
                className="hidden"
              />
              <label
                htmlFor="music-upload"
                className="flex-grow text-lg cursor-pointer text-[#5C5C5C] truncate"
              >
                {musicFile ? musicFile.name : "song.mp3"}
              </label>

              <button
                type="button"
                onClick={() => document.getElementById("music-upload").click()}
                className=""
              >
                <Image
                  src="/assets/icon/plus-circle.svg"
                  alt="plus circle icon"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex justify-center gap-2 flex-col sm:flex-row">
          {/* Row for Preview Playlist and Create Playlist */}
          <div className="grid grid-cols-2 gap-2 order-1 sm:order-2 sm:max-w-[450px] w-full">
            <button
              onClick={handleOpenPlayListPreviewModal}
              className="bg-gradient text-white rounded-[14px] w-full h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
            >
              Preview Playlist
            </button>

            <button className="bg-gradient text-white rounded-[14px] w-full h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
              Create Playlist
            </button>
          </div>

          {/* Cancel Button */}
          <div className="sm:flex sm:items-center sm:justify-center order-2 sm:order-1 sm:max-w-[126px] w-full">
            <button
              onClick={onClose}
              className="btn-red-gradient text-white rounded-[14px] w-full h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {isPlayListPreviewModal && (
        <PlayListPreview onClose={handleClosePlayListPreviewModal} />
      )}
    </div>
  );
};

export default CreateNewPlayList;
