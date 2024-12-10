"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageDropdown from "./LanguageDropdown";
import MenuModal from "./MenuModal";
import CallsModal from "./Modals/CallsModal";
import MessagesModal from "./Modals/MessagesModal";

const navLinks = [
  { name: "Live", path: "/" },
  { name: "Avatar", path: "/avator" },
  { name: "Watch", path: "/watch" },
  { name: "Sms", path: "" },
  { name: "Calls", path: "" },
  { name: "Listen", path: "/listen" },
  { name: "Nutrition", path: "/nutrition" },
  { name: "Store", path: "/store" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [isSmsModalOpen, setSmsModalOpen] = useState(false);
  const [isCallsModalOpen, setCallsModalOpen] = useState(false);

  const getTabClassName = (path: string) => {
    return `py-[19px] px-3 rounded-[14px] font-medium text-sm xs:text-base min-w-[100px] xl:min-w-fit inline-block ${
      pathname === path ? "bg-gradient text-white" : "text-black bg-white"
    }`;
  };

  useEffect(() => {
    if (pathname && tabRefs.current[pathname]) {
      tabRefs.current[pathname]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [pathname]);

  const openSmsModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setSmsModalOpen(true);
  };

  const openCallsModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setCallsModalOpen(true);
  };

  const closeModals = () => {
    setSmsModalOpen(false);
    setCallsModalOpen(false);
  };

  return (
    <header className="z-0">
      <div className="w-full header-bg rounded-b-[30px] h-[90px] md:h-[100px] flex items-center justify-between py-5 px-4 md:px-[30px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] flex-1">
          <div className="logomenubg bg-white w-12 md:w-[60px] h-12 md:h-[60px] rounded-[14px] flex items-center justify-center">
            <Image
              src="/assets/icon/menu-logo.svg"
              alt="menu-logo"
              width={28.7}
              height={36.58}
            />
          </div>

          <h2 className="text-xl md:text-[32px] uppercase">
            <span className="font-bold text-gradient">Simon </span>
            <span className="text-black font-medium">the Creator</span>
          </h2>
        </Link>

        <div className="flex items-center gap-4">
          {/* Nav Links */}
          <nav className="logomenubg bg-white rounded-[14px] overflow-hidden hidden xl:grid grid-cols-8 text-center h-[60px]">
            {navLinks.map((link) =>
              link.name === "Sms" || link.name === "Calls" ? (
                <a
                  key={link.name}
                  href="#"
                  onClick={link.name === "Sms" ? openSmsModal : openCallsModal}
                  className={`${getTabClassName(link.path)}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${getTabClassName(link.path)}`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex">
            <LanguageDropdown />
          </div>

          {/* Menu Icon */}
          <MenuModal />
        </div>
      </div>

      {/* Nav Links For Mobile */}
      <div className="px-4 md:px-[30px] flex xl:hidden">
        <nav className="logomenubg bg-white rounded-[14px] overflow-x-auto flex justify-between w-full text-center mt-5">
          {navLinks.map((link) =>
            link.name === "Sms" || link.name === "Calls" ? (
              <a
                key={link.name}
                href="#"
                onClick={link.name === "Sms" ? openSmsModal : openCallsModal}
                className={`${getTabClassName(link.path)}`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                ref={(el) => {
                  tabRefs.current[link.path] = el;
                }}
                className={`${getTabClassName(link.path)}`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {isSmsModalOpen && <MessagesModal onClose={closeModals} />}
      {isCallsModalOpen && <CallsModal onClose={closeModals} />}
    </header>
  );
};

export default Header;
