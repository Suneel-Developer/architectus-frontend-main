"use client";
import React from "react";
import Image from "next/image";

const contactlists = [
  {
    id: 1,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
    contactnumber: "+1 234 567 8901",
  },

  {
    id: 2,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
    contactnumber: "+1 234 567 8901",
  },

  {
    id: 3,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
    contactnumber: "+1 234 567 8901",
  },

  {
    id: 4,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
    contactnumber: "+1 234 567 8901",
  },
  
  {
    id: 5,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
    contactnumber: "+1 234 567 8901",
  },

  {
    id: 6,
    userimg: "/assets/user-review-img.png",
    name: "John Doe",
    contactnumber: "+1 234 567 8901",
  },
];

const ContactList: React.FC = () => {
  return (
    <div className="mx-auto relative z-10 px-4 md:px-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {contactlists.map((contact, index) => (
          <div
            key={index}
            className="bg-white logomenubg rounded-2xl md:rounded-[30px] p-5 h-fit flex flex-col justify-center items-center text-center"
          >
            {/* User Image  */}
            <div className="rounded-full overflow-hidden h-[110px] w-[110px] mb-[10px]">
              <img
                src={contact.userimg}
                alt={contact.name}
                className="h-full bg-cover w-full"
              />
            </div>

            {/* Product Details  */}
            <div>
              <h2 className="text-xl text-[#5C24FC] font-semibold">
                {contact.name}
              </h2>
              <p className="text-xl font-medium mt-[6px] mb-3">
                {contact.contactnumber}
              </p>

              <div className="flex gap-3">
                <button className="w-14 h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center">
                    <Image src="/assets/icon/phone-call.svg" alt="phone call" width={18} height={18} />
                </button>

                <button className="w-14 h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center">
                    <Image src="/assets/icon/chats-text.svg" alt="chats" width={18} height={18} />
                </button>

                <button className="w-14 h-14 bg-[#EEE8FD] rounded-xl flex items-center justify-center">
                    <Image src="/assets/icon/vertical-dots.svg" alt="vertical-dots" width={4} height={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
