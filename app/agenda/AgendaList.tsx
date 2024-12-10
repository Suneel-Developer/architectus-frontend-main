"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditAgendaModal from "./EditAgendaModal";

// Sample data for agendas. Each agenda includes date, time, subject, notes, and user image.
const agendaData = [
  {
    id: 1,
    date: "Dec 03, 2024",
    time: "10:00 PM",
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: "/assets/user-review-img.png",
  },
  {
    id: 2,
    date: "Dec 03, 2024",
    time: "10:00 PM",
    subject:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: "/assets/user-review-img.png",
  },
];

const AgendaList: React.FC = () => {
  const [isEditAgendaModal, setIsEditAgendaModal] = useState<boolean>(false);

  const handleOpenEditModal = () => {
    setIsEditAgendaModal(true);
  };

  const handleCloseEditModal = () => {
    setIsEditAgendaModal(false);
  };

  return (
    <div className="mx-auto relative z-10 px-4 md:px-[30px]">
      <ul className="flex flex-col gap-4">
        {agendaData.map((agenda) => (
          <li key={agenda.id} className="bg-[#FFFFFF] rounded-2xl p-4">
            {/* Header section: Displays date, time, and action buttons */}
            <div className="flex justify-between gap-5 mb-4">
              <div className="flex-1">
                {/* Date and time */}
                <p className="text-[#5C24FC] text-sm font-semibold mb-1">
                  <span>{agenda.date}</span> @ <span>{agenda.time}</span>
                </p>

                {/* Subject (hidden on small screens for responsiveness) */}
                <p className="text-xl font-semibold hidden md:block">
                  Subject -&nbsp;
                  <span className="font-normal">{agenda.subject}</span>
                </p>
              </div>

              {/* Action buttons: Edit and Delete */}
              <div className="flex gap-2">
                <button
                  onClick={handleOpenEditModal}
                  className="bg-[#EEE8FD] w-8 md:w-12 h-8 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center"
                  aria-label="Edit agenda"
                >
                  <Image
                    src="/assets/icon/edit.svg"
                    alt="Edit icon"
                    width={18}
                    height={18}
                  />
                </button>

                <button
                  className="bg-[#EEE8FD] w-8 md:w-12 h-8 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center"
                  aria-label="Delete agenda"
                >
                  <Image
                    src="/assets/icon/trash-times.svg"
                    alt="Delete icon"
                    width={17}
                    height={18}
                  />
                </button>
              </div>
            </div>

            {/* Subject (visible on small screens) */}
            <p className="text-xl font-semibold block md:hidden mb-4">
              Subject -&nbsp;
              <span className="font-normal">{agenda.subject}</span>
            </p>

            {/* Notes section: Displays user image and notes content */}
            <div className="flex md:items-center gap-3">
              {/* User image */}
              <Image
                src={agenda.userImage}
                alt="User"
                width={100}
                height={100}
                loading="lazy"
                className="w-10 md:w-14 h-10 md:h-14 rounded-full object-cover"
              />
              {/* Notes content */}
              <div className="flex-1">
                <h2 className="text-base font-semibold leading-5">Notes</h2>
                <p className="text-base">{agenda.notes}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isEditAgendaModal && <EditAgendaModal onClose={handleCloseEditModal} />}
    </div>
  );
};

export default AgendaList;
