import React, { useState } from "react";
import Image from "next/image";
import DeletePlayListModal from "./DeletePlaylistModal";
import AddMusicToPlayList from "./AddMusicToPlayList";

const OptionMenu = () => {
  const [isDeletePlaylistModal, setIsDeletePlayListModal] =
    useState<boolean>(false);
  const [isAddMusictoPlaylistModal, setIsAddMusictoPlayListModal] =
    useState<boolean>(false);

  // Open Delete Playlist modal
  const handleOpenDeletePlaylistModal = () => {
    setIsDeletePlayListModal(true);
  };

  // Close Delete Playlist modal
  const handleCloseDeletePlaylistModal = () => {
    setIsDeletePlayListModal(false);
  };

  // Open Add Music to Playlist modal
  const handleOpenAddMusictoPlaylistModal = () => {
    setIsAddMusictoPlayListModal(true);
  };

  // Open Add Music to Playlist modal
  const handleCloseAddMusictoPlaylistModal = () => {
    setIsAddMusictoPlayListModal(false);
  };

  return (
    <div className="bg-white shadow-md z-50 rounded-xl p-3 w-[250px] absolute top-12 md:top-16 right-0 flex flex-col items-center justify-center space-y-2">
      <button
        onClick={handleOpenDeletePlaylistModal}
        className="bg-[#EDF2FE] w-full rounded-lg p-2 flex items-center gap-2 text-[#6530FC] text-lg"
      >
        <Image
          src="/assets/icon/delete.svg"
          alt="delete icon"
          width={16}
          height={21}
        />
        Delete Playlist
      </button>

      <button
        onClick={handleOpenAddMusictoPlaylistModal}
        className="bg-[#EDF2FE] w-full rounded-lg p-2 flex items-center gap-2 text-[#6530FC] text-lg"
      >
        <Image
          src="/assets/icon/plus-circle.svg"
          alt="plus circle icon"
          width={20}
          height={20}
        />
        Add Music to Playlsit
      </button>

      {isDeletePlaylistModal && (
        <DeletePlayListModal onClose={handleCloseDeletePlaylistModal} />
      )}

      {isAddMusictoPlaylistModal && (
        <AddMusicToPlayList onClose={handleCloseAddMusictoPlaylistModal} />
      )}
    </div>
  );
};

export default OptionMenu;
