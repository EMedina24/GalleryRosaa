import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import { ToastProvider } from "react-toast-notifications";
import Header from "../components/header";
import Footer from "../components/footer";
import Gallery from "../components/gallery";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="lg:p-5 xl:p-5 2xl:p-5 ">
        <Hero />
      </div>
      <Gallery />
      <Footer />
    </>
  );
};

export default MainPage;
