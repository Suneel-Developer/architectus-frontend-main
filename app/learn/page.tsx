import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/learn/Hero";
import SportsProducts from "../components/learn/SportsProducts";

const Learn: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <SportsProducts />
      </main>
      <Footer />
    </>
  );
};

export default Learn;
