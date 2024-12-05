import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import FeedProducts from "./components/Feed/FeedProducts.tsx";
import Hero from "./components/Feed/Hero.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Hero />
        <FeedProducts />
      </main>
      <Footer />
    </>
  );
}
