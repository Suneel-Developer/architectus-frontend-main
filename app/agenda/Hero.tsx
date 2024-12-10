"use client";
import React, { useState } from "react";
import SearchBar from "../components/Modals/SearchBar";
import CreateNewAgendaModal from "./CreateNewAgendaModal";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isCreateNewAgendaModal, setIsCreateNewAgendaModal] =
    useState<boolean>(false);

  const handleOpenModal = () => {
    setIsCreateNewAgendaModal(true);
  };

  const handleCloseModal = () => {
    setIsCreateNewAgendaModal(false);
  };
  return (
    <section className="px-4 md:px-[30px]">
      <div className="logomenubg bg-white w-full rounded-[30px] px-5 md:px-[30px] py-4">
        <div className="flex items-center justify-between gap-5">
          <p className="text-2xl md:text-3xl font-medium">Agenda</p>

          <div className="flex gap-3 flex-1 justify-end items-end w-full xs:w-auto">
            <div className="hidden md:block max-w-[460px] w-full">
              <SearchBar />
            </div>

            <button
              onClick={handleOpenModal}
              className="w-fit rounded-[14px] bg-gradient flex items-center gap-2 justify-center text-sm sm:text-base px-2 sm:px-6 py-4 text-white font-medium"
            >
              <Image
                src="/assets/icon/w-plus-circle.svg"
                alt="plus circle icon"
                width={20}
                height={20}
              />
              Create Agenda
            </button>
          </div>
        </div>

        <div className="flex md:hidden mt-4">
          <SearchBar />
        </div>
      </div>

      {isCreateNewAgendaModal && (
        <CreateNewAgendaModal onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Hero;
