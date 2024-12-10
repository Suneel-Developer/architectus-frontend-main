import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import ContactList from "./ContactList";
import Footer from "../components/Footer";
import WhatshapIcon from "../components/WhatshapIcon";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <ContactList />
        <WhatshapIcon/>
      </main>
      <Footer />
    </div>
  );
}
