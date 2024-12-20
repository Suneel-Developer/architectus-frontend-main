import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import TicketsList from "./TicketsList";
import Footer from "../components/Footer";
import WhatshapIcon from "../components/WhatshapIcon";

export default function Support() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <TicketsList />
        <WhatshapIcon/>
      </main>
      <Footer />
    </>
  );
}
