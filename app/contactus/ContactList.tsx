"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const contactlists = [
  {
    id: 1,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
  },
  {
    id: 2,
    userimg: "/assets/user-review-img.png",
    name: "Jane Smith",
  },
  {
    id: 3,
    userimg: "/assets/user-review-img.png",
    name: "Alice Johnson",
  },
  {
    id: 4,
    userimg: "/assets/user-review-img.png",
    name: "Bob Brown",
  },

  {
    id: 5,
    userimg: "/assets/user-review-img.png",
    name: "Bob Brown",
  },
  {
    id: 6,
    userimg: "/assets/user-review-img.png",
    name: "Bob Brown",
  },
];

const ContactList: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".menu-container")) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="mx-auto relative z-10 px-4 md:px-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {contactlists.map((contact) => (
          <div
            key={contact.id}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5 h-fit flex flex-col justify-center items-center text-center relative"
          >
            {/* User Image */}
            <div className="rounded-full overflow-hidden h-[110px] w-[110px] mb-[10px]">
              <img
                src={contact.userimg}
                alt={contact.name}
                className="h-full bg-cover w-full"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-xl text-[#5C24FC] font-semibold mb-4">
                @{contact.name}
              </h2>

              <div className="flex gap-3 relative">
                <button className="w-14 h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center">
                  <Image
                    src="/assets/icon/phone-call.svg"
                    alt="phone call"
                    width={18}
                    height={18}
                  />
                </button>

                <button className="w-14 h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center">
                  <Image
                    src="/assets/icon/chats-text.svg"
                    alt="chats"
                    width={18}
                    height={18}
                  />
                </button>

                <div className="relative menu-container">
                  {/* Option Menu btn */}
                  <button
                    className="w-14 h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center"
                    onClick={() =>
                      setActiveMenu((prev) =>
                        prev === contact.id ? null : contact.id
                      )
                    }
                  >
                    <Image
                      src="/assets/icon/vertical-dots.svg"
                      alt="vertical-dots"
                      width={4}
                      height={18}
                    />
                  </button>

                  {/* Option menu */}
                  {activeMenu === contact.id && (
                    <div className="bg-white shadow-md rounded-xl p-3 w-[173px] absolute bottom-16 right-0 flex flex-col items-center justify-center space-y-2">
                      <button className="bg-[#EDF2FE] w-full rounded-lg p-2 flex items-center gap-2 text-[#6530FC] text-lg">
                        <Image
                          src="/assets/icon/delete.svg"
                          alt="delete icon"
                          width={16}
                          height={21}
                        />
                        Delete
                      </button>

                      <button className="bg-[#EDF2FE] w-full rounded-lg p-2 flex items-center gap-2 text-[#6530FC] text-lg">
                        <Image
                          src="/assets/icon/block.svg"
                          alt="block icon"
                          width={16}
                          height={21}
                        />
                        Block
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
