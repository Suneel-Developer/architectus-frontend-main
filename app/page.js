import Header from "./components/Header.tsx";
import Hero from "./components/Visualization/Hero.tsx";
import NavTabs from "./components/NavTabs.tsx";
import Footer from "./components/Footer.tsx";
import MenuModal from "./components/MenuModal.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
        <MenuModal/>
      </main>
      <Footer />
    </>
  );
}
