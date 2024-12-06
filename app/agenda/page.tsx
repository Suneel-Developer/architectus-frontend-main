import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import ApointmentsDropdwons from "./ApointmentsDropdwons";
import AgendaList from "./AgendaList";
import Footer from "../components/Footer";

export default function Agenda() {
  return (
    <div>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <ApointmentsDropdwons />
        <AgendaList />
      </main>
      <Footer />
    </div>
  );
}
