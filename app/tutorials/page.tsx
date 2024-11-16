import React from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Tutorials/Hero";
import MenuModal from "../components/MenuModal";
import CoachesList from "../components/Coaches/CoachesList";
import CoachesSlider from "../components/Coaches/CoachsSlider";

const Tutorials: React.FC = () => {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
        <CoachesSlider/>
        <MenuModal/>
      </main>
      <Footer />
    </>
  );
};

export default Tutorials;
