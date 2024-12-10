import React from "react";

const WhatshapIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <a
        href="https://wa.me/37129732452"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 md:w-12 h-10 md:h-12 rounded-full"
      >
        <img
          src="/assets/whatshap-icon.svg"
          alt="WhatsApp"
          className="w-10 md:w-12 h-10 md:h-12"
        />
      </a>
    </div>
  );
};

export default WhatshapIcon;
