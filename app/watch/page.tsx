import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Watch/Products";

export default function Watch() {
  return (
    <>
      <Header />
      <main className="pt-5 md:pt-10 pb-10 md:pb-20">
        <Products />
      </main>
      <Footer />
    </>
  );
}
