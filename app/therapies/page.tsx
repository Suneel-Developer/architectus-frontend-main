import React from "react";
import Header from "../components/Header";
import Hero from "../components/Therapies/Hero";
import Footer from "../components/Footer";
import TherapiesSlider from "../components/Therapies/TherapiesSlider";

const Therapies = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <TherapiesSlider />
      </main>
      <Footer />
    </>
  );
};

export default Therapies;