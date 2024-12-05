import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import TicketsList from "./TicketsList";
import Footer from "../components/Footer";

const Support: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <TicketsList />
      </main>
      <Footer />
    </>
  );
};

export default Support;