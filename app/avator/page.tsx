import React from "react";
import Header from "../components/Header";
import Hero from "../components/Avatar/Hero";
import Products from "../components/Avatar/Products";
import Footer from "../components/Footer";

export default function Avatar() {
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
