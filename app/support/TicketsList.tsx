"use client";
import React, { useState } from "react";
import TicketModal from "./TicketModal";

const ticketsData = [
  {
    id: 1,
    ticketnumber: "#001",
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "Pending",
  },
  {
    id: 2,
    ticketnumber: "#002",
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "Solved",
  },
  {
    id: 3,
    ticketnumber: "#003",
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "Pending",
  },
  {
    id: 4,
    ticketnumber: "#004",
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "Solved",
  },
];

const TicketsList: React.FC = () => {
  const [isOpenTicketModal, setIsOpenTicketModal] = useState<boolean>(false);

  const handleOpenTicketModal = () => {
    setIsOpenTicketModal(true);
  };

  const handleCloseTicketModal = () => {
    setIsOpenTicketModal(false);
  };

  return (
    <div className="mx-auto relative z-10 px-4 md:px-[30px]">
      <ul className="flex flex-col gap-4">
        {ticketsData.map((ticket) => (
          <li
            key={ticket.id}
            onClick={handleOpenTicketModal}
            className="bg-[#FFFFFF] rounded-2xl py-6 px-4 flex gap-3 md:gap-10 items-center flex-col md:flex-row cursor-pointer"
          >
            {/* Ticket Number */}
            <p className="text-[#5C24FC] text-xl font-semibold mb-1">
              Ticket<span>{ticket.ticketnumber}</span>
            </p>

            {/* Subject */}
            <p className="text-xl font-semibold flex-1">
              Subject -&nbsp;
              <span className="font-normal">{ticket.subject}</span>
            </p>

            {/* Status */}
            <div
              className={`max-w-[128px] w-full rounded-xl px-1 py-[6px] text-base font-semibold text-center ${
                ticket.status === "Pending"
                  ? "bg-[#FCA2243D] text-[#FCA224]"
                  : "bg-[#16AE8A45] text-[#16AE8A]"
              }`}
            >
              {ticket.status}
            </div>
          </li>
        ))}
      </ul>

      {isOpenTicketModal && <TicketModal onClose={handleCloseTicketModal} />}
    </div>
  );
};

export default TicketsList;
