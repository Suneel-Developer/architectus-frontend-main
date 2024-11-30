"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";

interface ModalProps {
  onClose: () => void;
}

const podcastsdata = [
  {
    id: 0,
    name: "Rafael Marquez",
    image: "/assets/user-review-img.png",
    sportsvideo: "/assets/video-4.mp4",
    sportsvideothumbnail: "/assets/thumbnail-4.jpg",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 1,
    name: "Esthera Jackson",
    image: "/assets/user-review-img.png",
    sportsvideo: "/assets/podcasts-2.mp4",
    sportsvideothumbnail: "/assets/podcats-thumbnail-2.jpg",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const PostModal: React.FC<ModalProps> = ({ onClose }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const categories = [
    "Technology",
    "Health",
    "Finance",
    "Education",
    "Entertainment",
  ];

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    setIsOpenDropDown(false);
  };

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handlePause = (index: number) => {
    setPlayingIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          <h1 className="font-semibold text-xl text-center mb-5">Post</h1>

          {/* Categories Dropdwon  */}
          <div className="relative w-full">
            <button
              onClick={() => setIsOpenDropDown((prev) => !prev)}
              className="w-full flex items-center justify-between bg-[#EEE8FD] px-3 py-3 h-[50px] rounded-xl gap-1 text-sm md:text-base font-medium"
            >
              {selectedCategory}
              <Image
                src="/assets/icon/angle-down-small.svg"
                alt="angle-down-small"
                width={14}
                height={9}
              />
            </button>

            {isOpenDropDown && (
              <ul className="absolute z-40 mt-[6px] w-full bg-white border h-[170px] overflow-y-scroll tabs-scrollbar border-gray-300 rounded-lg shadow-lg">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => handleCategorySelect(category)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-4 mt-5">
            {podcastsdata.map((podcast, index) => (
              <div key={index} className="bg-[#EEE8FD] rounded-3xl p-3 md:p-4">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-12 md:w-[60px] h-12 md:h-[60px] rounded-full overflow-hidden">
                      <Image
                        src="/assets/avator-img.png"
                        alt="avator"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm md:text-base font-semibold">{podcast.name}</p>
                      <p className="text-xs font-medium text-gradient">
                        Active
                      </p>
                    </div>
                  </div>

                  {/* Edit / Play/Pause / Delete btns  */}
                  <div className="flex gap-2">
                    <button className="bg-white w-8 md:w-12 h-8 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center">
                      <Image
                        src="/assets/icon/edit.svg"
                        alt="edit icon"
                        width={18}
                        height={18}
                      />
                    </button>

                    {/* Play/Pause Button */}
                    <button
                      onClick={() =>
                        playingIndex === index
                          ? handlePause(index)
                          : handlePlay(index)
                      }
                      className="bg-white w-8 md:w-12 h-8 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-xl"
                    >
                      {playingIndex === index ? (
                        <IoMdPause className="text-[#FF7A00]" />
                      ) : (
                        <IoMdPlay className="text-[#3D2278]" />
                      )}
                    </button>

                    <button className="bg-white w-8 md:w-12 h-8 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center">
                      <Image
                        src="/assets/icon/trash-times.svg"
                        alt="delete icon"
                        width={17}
                        height={18}
                      />
                    </button>
                  </div>
                </div>

                {/* Video  */}
                <div className="rounded-2xl overflow-hidden h-[180px] md:h-[280px] mb-4 relative">
                  {playingIndex === index ? (
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[index] = el;
                        }
                      }}
                      src={podcast.sportsvideo}
                      loop
                      autoPlay
                      muted
                      controls
                      className="w-full h-full object-cover"
                      onPause={() => handlePause(index)}
                    ></video>
                  ) : (
                    <div className="relative top-0 w-full h-full">
                      <img
                        src={podcast.sportsvideothumbnail}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <p className="text-sm">{podcast.disc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
