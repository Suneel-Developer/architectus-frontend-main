import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Watch/Hero";
import Products from "../components/Watch/Products";
import WhatshapIcon from "../components/WhatshapIcon";

export default function Watch() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <Products />
        <WhatshapIcon/>
      </main>
      <Footer />
    </>
  );
}
