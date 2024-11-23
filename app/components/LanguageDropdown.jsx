"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LanguageDropdown = () => {
  const [isOpeLanguageDropdwon, setIsOpenLanguageDropdwon] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    label: "English",
    flag: "/assets/flags/en.png",
  });
  const dropdownRef = useRef(null);

  const languages = [
    { code: "la", label: "Latvian", flag: "/assets/flags/Latvian.jpg" },
    { code: "en", label: "English", flag: "/assets/flags/en.png" },
    { code: "br", label: "Brazilian", flag: "/assets/flags/br.png" },
    { code: "fr", label: "French", flag: "/assets/flags/fr.png" },
    { code: "sp", label: "Spanish", flag: "/assets/flags/sp.png" },
    { code: "gr", label: "German", flag: "/assets/flags/gr.png" },
    { code: "it", label: "Italian", flag: "/assets/flags/it.png" },
    { code: "ru", label: "Russian", flag: "/assets/flags/ru.png" },
    { code: "du", label: "Dutch", flag: "/assets/flags/du.png" },
  ];

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleOpenLanguageDropdwon = () => {
    setIsOpenLanguageDropdwon(!isOpeLanguageDropdwon);
  };

  useEffect(() => {
    if (isOpeLanguageDropdwon) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpeLanguageDropdwon]);

  return (
    <div>
      <div className="logomenubg bg-white px-5 py-[19px] flex items-center gap-4 rounded-[14px] h-[60px] relative justify-between">
        <button
          onClick={handleOpenLanguageDropdwon}
          className="flex items-center gap-1"
        >
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src={selectedLanguage.flag}
              alt={`${selectedLanguage.name}-flag`}
              width={27}
              height={18}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-base font-semibold mr-[2px] capitalize">
            {selectedLanguage.code}
          </span>

          <Image
            src="/assets/icon/down-arrow.svg"
            alt="down-arrow"
            width={10}
            height={8}
            loading="lazy"
          />
        </button>

        <div className="h-[30px] w-[1px] bg-black bg-opacity-[13%]"></div>

        <Link href="/aboutus">
          <Image
            src="/assets/icon/headphones.svg"
            alt="headphones"
            width={20}
            height={20}
            loading="lazy"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {isOpeLanguageDropdwon && (
        <div
          ref={dropdownRef}
          className="fixed inset-0 z-50 w-full h-screen py-5 px-[30px] flex justify-end"
        >
          <div
            onClick={handleOpenLanguageDropdwon}
            className="absolute inset-0 windows-bg w-full h-full"
          ></div>

          <div className="relative flex flex-col items-end z-[999] min-w-[200px] w-full">
            {/* Close Btn  */}
            <button
              onClick={handleOpenLanguageDropdwon}
              className="closebtn-bg flex logomenubg min-w-[60px] min-h-[60px] rounded-[14px] items-center justify-center float-end mb-5"
            >
              <Image
                src="/assets/icon/times.svg"
                alt="times-logo"
                width={14}
                height={14}
              />
            </button>

            <div className="logomenubg bg-white px-5 py-[19px] flex items-center justify-between gap-4 rounded-[14px] h-[60px] relative mb-2 max-w-[200px] w-full">
              <button
                onClick={handleOpenLanguageDropdwon}
                className="flex items-center gap-1 justify-between"
              >
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                  <img
                    src={selectedLanguage.flag}
                    alt={`${selectedLanguage.label}-flag`}
                    width={27}
                    height={18}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-base font-semibold mr-[2px] capitalize">
                  {selectedLanguage.code}
                </span>

                <Image
                  src="/assets/icon/down-arrow.svg"
                  alt="down-arrow"
                  width={10}
                  height={8}
                  loading="lazy"
                />
              </button>

              <div className="h-[30px] w-[1px] bg-black bg-opacity-[13%]"></div>

              <Image
                src="/assets/icon/headphones.svg"
                alt="headphones"
                width={20}
                height={20}
                loading="lazy"
                className="cursor-pointer"
              />
            </div>

            <div className="max-w-[200px] w-full logomenubg bg-white rounded-[20px] px-5 flex flex-col min-h-[200px] h-fit overflow-y-scroll tabs-scrollbar">
              {languages.map((language) => (
                <button
                  key={language.label}
                  className="py-5 border-b border-opacity-10 flex items-center gap-2"
                  onClick={() => handleSelect(language)}
                >
                  <Image
                    src={language.flag}
                    alt={`${language.label}-flag`}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-[30px] h-5 rounded"
                  />

                  <span className="text-[#222741] text-base font-medium">
                    {language.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
