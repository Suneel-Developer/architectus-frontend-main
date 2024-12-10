import React from "react";
import Header from "../components/Header";
import Hero from "../components/Therapies/Hero";
import Footer from "../components/Footer";
import TherapiesSlider from "../components/Therapies/TherapiesSlider";
import WhatshapIcon from "../components/WhatshapIcon";

export default function Therapies() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <TherapiesSlider />
        <WhatshapIcon/>
      </main>
      <Footer />
    </>
  );
}
