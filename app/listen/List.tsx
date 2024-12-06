"use client";
import React from "react";
import Image from "next/image";

const List: React.FC = () => {
  const playlists = [
    {
      id: 1,
      name: "Playlist Name",
      icon: "/assets/icon/music.svg",
      songs: [
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
      ],
    },
    {
      id: 2,
      name: "Playlist Name",
      icon: "/assets/icon/music.svg",
      songs: [
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
      ],
    },
    {
      id: 3,
      name: "Playlist Name",
      icon: "/assets/icon/music.svg",
      songs: [
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
        "Song Title.mp3",
      ],
    },
  ];

  return (
    <div className="mx-auto relative z-10 px-4 md:px-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] py-8 px-5 h-fit flex flex-col justify-center items-center text-center relative"
          >
            {/* Add Button */}
            <button className="w-10 md:w-14 h-10 md:h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center absolute top-8 right-5">
              <Image
                src="/assets/icon/plus-circle.svg"
                alt="plus circle icon"
                width={20}
                height={20}
              />
            </button>

            {/* Playlist Icon */}
            <div className="rounded-full h-[110px] w-[110px] mb-[10px] flex items-center justify-center bg-[#9D7AFF26]">
              <Image
                src={playlist.icon}
                alt="playlist icon"
                width={38}
                height={42}
              />
            </div>

            <h2 className="text-xl text-[#5C24FC] font-semibold">
              {playlist.name}
            </h2>
            <p className="text-xl font-medium mt-[6px] mb-5">
              {playlist.songs.length} Songs
            </p>

            {/* Song List */}
            <ul className="flex gap-3 flex-col w-full">
              {playlist.songs.map((song, index) => (
                <li
                  key={index}
                  className="bg-[#EEE8FD] rounded-xl p-4 flex items-center gap-3"
                >
                  <button>
                    <Image
                      src="/assets/icon/play-1.svg"
                      alt="play icon"
                      width={16}
                      height={18}
                    />
                  </button>

                  <p className="text-base md:text-lg font-medium truncate flex-1 text-start">
                    {song}
                  </p>

                  <button>
                    <Image
                      src="/assets/icon/trash-times.svg"
                      alt="trash icon"
                      width={17}
                      height={18}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
