import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Live/Hero.tsx";
import Products from "./components/Live/Products.tsx";
import WhatshapIcon from "./components/WhatshapIcon.tsx";

export default function Home() {
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
