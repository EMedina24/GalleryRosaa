import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import { ToastProvider } from "react-toast-notifications";

import Header from "../components/header";
import Footer from "../components/footer";
import PDP from "../components/PDP";

export default function ArtworkProducts() {
  // move modal state up from layout.js

  return (
    <>
      <Header />

      <div class="pageContainer pt-10 sm:pt-60 md:pt-60 lg:pt-40">
        <PDP />
      </div>
      <Footer />
    </>
  );
}
