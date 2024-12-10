"use client";
import React, { useState } from "react";
import SearchBar from "../components/Modals/SearchBar";
import Image from "next/image";
import CreateNewTicketModal from "./CreateNewTicket";

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
    <section className="px-4 md:px-[30px] mb-5">
      <div className="logomenubg bg-white w-full rounded-[30px] px-5 md:px-[30px] py-4">
        <div className="flex items-center justify-between gap-5">
          <p className="text-2xl md:text-3xl font-medium">Support</p>

          <div className="flex gap-3 flex-1 justify-end items-end w-full xs:w-auto">
            <div className="hidden lg:block max-w-[460px] w-full">
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
              Create New Ticket
            </button>
          </div>
        </div>

        <div className="flex lg:hidden mt-4 w-full">
          <SearchBar />
        </div>
      </div>

      {isCreateNewAgendaModal && (
        <CreateNewTicketModal onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Hero;
