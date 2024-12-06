import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Products from "./Products";

export default function Favorites() {
  return (
    <div>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
