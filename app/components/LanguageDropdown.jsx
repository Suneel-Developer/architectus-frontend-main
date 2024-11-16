"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: "/assets/english-language-flag.svg",
  });
  const dropdownRef = useRef(null);

  const languages = [
    { name: "English", flag: "/assets/english-language-flag.svg" },
    { name: "Brazilian", flag: "/assets/brazil-flag.svg" },
    { name: "Russian", flag: "/assets/russian-flag.svg" },
  ];

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative block">
      <button
        className="inline-flex langmenu items-center gap-2 rounded-lg md:rounded-xl py-3 px-1 md:px-3 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name}-flag`}
          width={27}
          height={18}
          loading="lazy"
          className="w-[34px] h-[17px]"
        />
        <Image
          src="/assets/icons/down-arrow.svg"
          alt="down-arrow"
          width={16}
          height={16}
          loading="lazy"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="w-40 absolute top-12 text-[#0F1017] right-0 md:left-0 rounded-xl langmenu text-sm py-1 shadow-lg bg-white transition duration-100 ease-out">
          {languages.map((language) => (
            <button
              key={language.name}
              className={`group flex w-full items-center gap-2.5 p-3 ${
                selectedLanguage.name === language.name ? "font-semibold" : ""
              } hover:bg-gray-100`}
              onClick={() => handleSelect(language)}
            >
              <Image
                src={language.flag}
                alt={`${language.name}-flag`}
                width={100}
                height={100}
                loading="lazy"
                className="h-[18px] w-7"
              />
              <span className="text-[#0f1017] text-sm flex-1 text-start">
                {language.name}
              </span>
              {selectedLanguage.name === language.name && (
                <Image
                  src="/assets/icons/tikmark-icon.svg"
                  alt="tikmark-icon"
                  width={14}
                  height={10}
                  loading="lazy"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
