import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import ContactList from "./ContactList";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <ContactList />
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
