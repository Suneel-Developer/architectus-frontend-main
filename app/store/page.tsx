import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Store/Hero";
import ProductsSlider from "../components/Store/ProductSlider";
import WhatshapIcon from "../components/WhatshapIcon";

export default function Store() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <ProductsSlider />
        <WhatshapIcon/>
      </main>
      <Footer />
    </>
  );
}
