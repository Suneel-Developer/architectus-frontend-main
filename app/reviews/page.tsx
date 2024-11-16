import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavTabs from "../components/NavTabs";
import MenuModal from "../components/MenuModal";
import CoachesList from "../components/Coaches/CoachesList";

const ReviewsList: React.FC = () => {
  return (
    <div>
      <Header />
      <NavTabs />
      <CoachesList showSingle={false} />
      <div className="mb-10 md:mb-20">
        <MenuModal />
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsList;
