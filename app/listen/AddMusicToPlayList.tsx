"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const playlists = [
  "Playlist Name 01",
  "Playlist Name 02",
  "Playlist Name 03",
  "Playlist Name 04",
  "Playlist Name 05",
  "Playlist Name 06 ",
  "Playlist Name 07",
];

const AddMusicToPlayList = ({ onClose }) => {
  const [musicFile, setMusicFile] = useState(null);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [isSelectedPlaylist, setIsSelectedPlaylist] = useState("Playlist Name");

  const handleOpenPlayList = (playlist: string) => {
    setIsSelectedPlaylist(playlist);
    setIsOpenDropDown(false);
  };

  const handleMusicUpload = (event: any) => {
    setMusicFile(event.target.files[0]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="bg-white rounded-[30px] px-5 py-11 w-full mx-auto max-w-[600px] relative overflow-y-scroll overflow-x-hidden formscrollbar">
        <h1 className="text-3xl text-center font-medium mb-3">
          Add Music to playlist
        </h1>

        <p className="text-sm md:text-base text-center">
          Add this track to your playlist and keep the vibes going!
        </p>

        <div className="space-y-4 mt-6 max-w-[450px] mx-auto">
          {/* Music Name Input */}
          <div>
            <label
              htmlFor="music-name"
              className="text-[#6530FC] block mb-2 font-medium text-lg text-left"
            >
              Music Name
            </label>
            <input
              type="text"
              id="music-name"
              placeholder="My New Rap.mp3"
              className="bg-[#EEE8FD] rounded-xl p-4 text-lg placeholder:text-[#5C5C5C] w-full outline-none border-none h-14"
            />
          </div>

          {/* Playlist Dropdown */}
          <div>
            <label
              htmlFor="playlist"
              className="text-[#6530FC] block mb-2 font-medium text-lg text-left"
            >
              Select Playlist
            </label>

            <div className="relative w-full">
              <button
                onClick={() => setIsOpenDropDown((prev) => !prev)}
                className="w-full max-w-full bg-[#EEE8FD] p-4 text-lg text-[#5C5C5C] rounded-[14px] flex justify-between items-center gap-1 font-medium"
              >
                {isSelectedPlaylist || "Playlist Name"}
                <IoIosArrowDown
                  className={`text-purple-500 text-xl ${
                    isOpenDropDown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpenDropDown && (
                <ul className="z-50 w-full absolute mt-1 bg-white border rounded-lg shadow-lg h-[150px] overflow-y-scroll formscrollbar">
                  {playlists.map((playlist, index) => (
                    <li
                      key={index}
                      onClick={() => handleOpenPlayList(playlist)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {playlist}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Music File Upload */}
          <div>
            <label
              htmlFor="music-upload"
              className="text-[#6530FC] block mb-2 font-medium text-lg text-left"
            >
              Upload Music
            </label>

            <div className="flex items-center justify-between gap-2 bg-[#EEE8FD] rounded-xl p-4 h-14">
              <input
                type="file"
                id="music-upload"
                // accept="audio/*"
                onChange={handleMusicUpload}
                className="hidden"
              />
              <label
                htmlFor="music-upload"
                className="flex-1 text-left text-lg cursor-pointer text-[#5C5C5C] truncate"
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

        {/* Buttons */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[156px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button className="bg-gradient text-white rounded-[14px] w-full max-w-[223px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Add Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMusicToPlayList;
