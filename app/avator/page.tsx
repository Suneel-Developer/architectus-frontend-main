import React from "react";
import Header from "../components/Header";
import Hero from "../components/Avatar/Hero";
import Slider from "../components/Avatar/Slider";
import Footer from "../components/Footer";

const Avatar = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <Slider />
      </main>
      <Footer />
    </>
  );
};

export default Avatar;
