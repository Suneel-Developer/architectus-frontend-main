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
        src="/assets/microphone.svg"
        alt="mic icon"
        width={19}
        height={24}
        loading="lazy"
        className="cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
