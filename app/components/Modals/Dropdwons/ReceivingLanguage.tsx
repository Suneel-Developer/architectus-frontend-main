import Image from "next/image";
import React, { useState } from "react";

// Define the type for a language option
interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

// List of receiving language countries
const receivingLanguageCountries: LanguageOption[] = [
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

const ReceivingLanguage: React.FC = () => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] =
    useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<LanguageOption>(
    receivingLanguageCountries[0]
  );

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
        className="w-full flex items-center justify-between bg-[#EEE8FD] p-[10px] rounded-xl gap-1 text-sm md:text-base font-medium"
      >
        <div className="flex items-center gap-3">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.label}
            className="w-6 h-5 rounded-sm"
          />
          <span>{selectedCountry.label}</span>
        </div>
        <Image
          src="/assets/icon/angle-down-small.svg"
          alt="angle-down-small"
          width={14}
          height={9}
        />
      </button>
      {isCountryDropdownOpen && (
        <ul className="absolute z-40 mt-[6px] w-full bg-white border h-[170px] overflow-y-scroll tabs-scrollbar border-gray-300 rounded-lg shadow-lg">
          {receivingLanguageCountries.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                setSelectedCountry(lang);
                setIsCountryDropdownOpen(false);
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
  );
};

export default ReceivingLanguage;
