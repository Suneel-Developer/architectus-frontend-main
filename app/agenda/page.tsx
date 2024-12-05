import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import ApointmentsDropdwons from "./ApointmentsDropdwons";
import AgendaList from "./AgendaList";
import Footer from "../components/Footer";

const Agenda: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <ApointmentsDropdwons />
        <AgendaList />
      </main>
      <Footer />
    </>
  );
};

export default Agenda;
