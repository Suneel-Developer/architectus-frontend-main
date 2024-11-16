import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Hero from "../components/Coaches/Hero";
import MenuModal from "../components/MenuModal";
import Footer from "../components/Footer";
import PodcastsSlider from "../components/Podcats/PodcastsSlider";

const Podcasts = () => {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
        <MenuModal />
        <PodcastsSlider />
      </main>
      <Footer />
    </>
  );
};

export default Podcasts;
