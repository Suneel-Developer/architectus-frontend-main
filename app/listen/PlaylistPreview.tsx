"use client";
import React, { useState } from "react";
import Image from "next/image";

const PlayListPreview = ({ onClose }) => {
  const [image, setImage] = useState("/assets/user-review-img.png");

  // Function to handle image change
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

      <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[800px] relative h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
        <h1 className="text-3xl text-center font-medium mb-2">
          Playlist Preview
        </h1>
        <p className="text-sm md:text-base text-center">
          To See how the Playlist Look like!
        </p>

        {/* Profile Image */}
        <div className="my-5">
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
        </div>

        <h2 className="text-2xl text-[#5C24FC] font-semibold text-center">
          My Gym Songs
        </h2>
        <p className="text-xl font-medium mt-1 text-center">3 Songs</p>

        {/* Song List */}
        <ul className="space-y-3 pt-6 max-w-[390px] mx-auto">
          <li className="bg-[#EEE8FD] rounded-xl p-4 flex items-center gap-3">
            <button>
              <Image
                src="/assets/icon/play-1.svg"
                alt="play icon"
                width={16}
                height={18}
              />
            </button>

            <p className="text-base md:text-lg font-medium truncate flex-1 text-start">
              My New Rap.mp1
            </p>

            <button>
              <Image
                src="/assets/icon/delete.svg"
                alt="delete icon"
                width={17}
                height={18}
              />
            </button>
          </li>

          <li className="bg-[#EEE8FD] rounded-xl p-4 flex items-center gap-3">
            <button>
              <Image
                src="/assets/icon/play-1.svg"
                alt="play icon"
                width={16}
                height={18}
              />
            </button>

            <p className="text-base md:text-lg font-medium truncate flex-1 text-start">
              My New Rap.mp2
            </p>

            <button>
              <Image
                src="/assets/icon/delete.svg"
                alt="delete icon"
                width={17}
                height={18}
              />
            </button>
          </li>

          <li className="bg-[#EEE8FD] rounded-xl p-4 flex items-center gap-3">
            <button>
              <Image
                src="/assets/icon/play-1.svg"
                alt="play icon"
                width={16}
                height={18}
              />
            </button>

            <p className="text-base md:text-lg font-medium truncate flex-1 text-start">
              My New Rap.mp3
            </p>

            <button>
              <Image
                src="/assets/icon/delete.svg"
                alt="delete icon"
                width={17}
                height={18}
              />
            </button>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[156px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Back
          </button>

          <button className="bg-gradient text-white rounded-[14px] w-full max-w-[223px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayListPreview;
