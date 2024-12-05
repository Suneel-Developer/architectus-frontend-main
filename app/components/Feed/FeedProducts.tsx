"use client";
import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

// Data
const feeddata = [
  {
    id: 0,
    name: "John Doe",
    image: "/assets/user-review-img.png",
    sportsvideo: "/assets/video-4.mp4",
    sportsvideothumbnail: "/assets/thumbnail-4.jpg",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    likes: "45",
    comments: "40",
    shares: "20",
  },
  {
    id: 1,
    name: "Esthera Jackson",
    image: "/assets/user-review-img.png",
    sportsvideo: "/assets/video-5.mp4",
    sportsvideothumbnail: "/assets/thumbnail-5.jpg",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    likes: "70",
    comments: "50",
    shares: "30",
  },
  {
    id: 2,
    name: "Alexa Liras",
    image: "/assets/user-review-img.png",
    sportsvideo: "/assets/video-3.mp4",
    sportsvideothumbnail: "/assets/thumbnail-3.jpg",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    likes: "56",
    comments: "37",
    shares: "19",
  },
];

const FeedProducts: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  //   Play Video
  const handlePlay = (index: any) => {
    setPlayingIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  //   Pause Video
  const handlePause = (index: any) => {
    setPlayingIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="mx-auto z-10 px-4">
      <div className="max-w-[652px] w-full mx-auto flex flex-col gap-5">
        {feeddata.map((feed, index) => (
          <div
            key={index}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5"
          >
            {/* header Profile & name  */}
            <div className="flex items-center gap-3">
              <Image
                src={feed.image}
                alt={feed.name}
                width={100}
                height={100}
                loading="lazy"
                className="w-10 md:w-14 h-10 md:h-14 rounded-full object-cover"
              />

              <div>
                <h2 className="text-base font-semibold leading-5">
                  {feed.name}
                </h2>
                <p className="text-[#7B3BAC] text-xs font-medium">Active</p>
              </div>
            </div>

            {/* Video  */}
            <div className="rounded-2xl overflow-hidden h-[180px] md:h-[280px] my-4">
              {playingIndex === index ? (
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[index] = el;
                    }
                  }}
                  src={feed.sportsvideo}
                  loop
                  autoPlay
                  muted
                  controls
                  className="w-full h-full object-cover"
                  onPause={() => handlePause(index)}
                ></video>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={feed.sportsvideothumbnail}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handlePlay(index)}
                    className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                  >
                    <FaPlay />
                  </button>
                </div>
              )}
            </div>

            {/* Details section */}
            <div className="flex flex-col mt-5">
              <p className="text-xs md:text-sm mb-4">{feed.disc}</p>

              <div className="flex items-center gap-8">
                <button className="flex items-center gap-[10px] text-base font-medium">
                  <Image
                    src="/assets/icon/like.svg"
                    alt="like"
                    width={18}
                    height={18}
                  />
                  <span>{feed.likes}</span>
                </button>

                <button className="flex items-center gap-[10px] text-base font-medium">
                  <Image
                    src="/assets/icon/chats-text.svg"
                    alt="chats"
                    width={18}
                    height={18}
                  />
                  <span>{feed.comments}</span>
                </button>

                <button className="flex items-center gap-[10px] text-base font-medium">
                  <Image
                    src="/assets/icon/share.svg"
                    alt="share"
                    width={18}
                    height={18}
                  />
                  <span>{feed.shares}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedProducts;
