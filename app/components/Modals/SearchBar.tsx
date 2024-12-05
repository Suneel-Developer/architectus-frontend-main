import React from "react";
import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className="max-w-full md:max-w-[460px] w-full bg-[#EEE8FD] rounded-xl p-4 flex items-center justify-between gap-2">
      <input
        type="text"
        placeholder="Search . . ."
        className="flex-1 h-full bg-transparent border-none outline-none placeholder:text-[#0000005C]"
      />

      <Image
        src="/assets/icon/search-text-2.svg"
        alt="search icon"
        width={23}
        height={23}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
