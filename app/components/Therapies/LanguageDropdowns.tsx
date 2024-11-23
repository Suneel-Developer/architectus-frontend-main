import Image from "next/image";
import React, { useState } from "react";

const LanguagesDropdown = () => {
  const audioLanguages = [
    { code: "en", label: "English", flag: "/assets/flags/en.png" },
    { code: "la", label: "Latvian", flag: "/assets/flags/Latvian.jpg" },
    { code: "br", label: "Brazilian", flag: "/assets/flags/br.png" },
    { code: "fr", label: "French", flag: "/assets/flags/fr.png" },
    { code: "sp", label: "Spanish", flag: "/assets/flags/sp.png" },
    { code: "gr", label: "German", flag: "/assets/flags/gr.png" },
    { code: "it", label: "Italian", flag: "/assets/flags/it.png" },
    { code: "ru", label: "Russian", flag: "/assets/flags/ru.png" },
    { code: "du", label: "Dutch", flag: "/assets/flags/du.png" },
  ];

  const subtitleLanguages = [
    { code: "en", label: "English", flag: "/assets/flags/en.png" },
    { code: "la", label: "Latvian", flag: "/assets/flags/Latvian.jpg" },
    { code: "br", label: "Brazilian", flag: "/assets/flags/br.png" },
    { code: "fr", label: "French", flag: "/assets/flags/fr.png" },
    { code: "sp", label: "Spanish", flag: "/assets/flags/sp.png" },
    { code: "gr", label: "German", flag: "/assets/flags/gr.png" },
    { code: "it", label: "Italian", flag: "/assets/flags/it.png" },
    { code: "ru", label: "Russian", flag: "/assets/flags/ru.png" },
    { code: "du", label: "Dutch", flag: "/assets/flags/du.png" },
  ];

  const [selectedAudio, setSelectedAudio] = useState(audioLanguages[0]);
  const [selectedSubtitle, setSelectedSubtitle] = useState(
    subtitleLanguages[0]
  );

  const [isAudioDropdownOpen, setIsAudioDropdownOpen] = useState(false);
  const [isSubtitleDropdownOpen, setIsSubtitleDropdownOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-[10px] mb-3">
      {/* Audio Language Dropdown */}
      <div>
        <label className="block text-gradient text-sm font-medium mb-2">
          Audio Language
        </label>
        <div className="relative">
          <button
            onClick={() => setIsAudioDropdownOpen(!isAudioDropdownOpen)}
            className="w-full flex items-center justify-between bg-[#EEE8FD] p-[10px] rounded-lg gap-1 text-sm font-medium"
          >
            <div className="flex items-center gap-3">
              <img
                src={selectedAudio.flag}
                alt={selectedAudio.label}
                className="w-6 h-6 rounded-full"
              />
              <span>{selectedAudio.label}</span>
            </div>
            <Image
              src="/assets/icon/angle-down-small.svg"
              alt="angle-down-small"
              width={14}
              height={9}
            />
          </button>
          {isAudioDropdownOpen && (
            <ul className="absolute z-40 mt-2 w-full bg-white border h-[200px] overflow-y-scroll tabs-scrollbar border-gray-300 rounded-lg shadow-lg">
              {audioLanguages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    setSelectedAudio(lang);
                    setIsAudioDropdownOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={lang.flag}
                    alt={lang.label}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Subtitle Language Dropdown */}
      <div>
        <label className="block text-gradient text-sm font-medium mb-2">
          Subtitle Language
        </label>
        <div className="relative">
          <button
            onClick={() => setIsSubtitleDropdownOpen(!isSubtitleDropdownOpen)}
            className="w-full flex items-center justify-between bg-[#EEE8FD] p-[10px] rounded-lg gap-1 text-sm font-medium"
          >
            <div className="flex items-center gap-3">
              <img
                src={selectedSubtitle.flag}
                alt={selectedSubtitle.label}
                className="w-6 h-6 rounded-full"
              />
              <span>{selectedSubtitle.label}</span>
            </div>
            <Image
              src="/assets/icon/angle-down-small.svg"
              alt="angle-down-small"
              width={14}
              height={9}
            />
          </button>
          {isSubtitleDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-full bg-white border h-[200px] overflow-y-scroll tabs-scrollbar border-gray-300 rounded-lg shadow-lg">
              {subtitleLanguages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    setSelectedSubtitle(lang);
                    setIsSubtitleDropdownOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={lang.flag}
                    alt={lang.label}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguagesDropdown;
