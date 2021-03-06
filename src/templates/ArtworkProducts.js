import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import { ToastProvider } from "react-toast-notifications";

import Header from "../components/header";
import Footer from "../components/footer";
import PDP from "../components/PDP";



export const query = graphql`
    query($id: String!) {
        shopifyProduct(id: { eq: $id }){
          description
    id
    title
    images {
      originalSrc
    }
    priceRange {
      maxVariantPrice {
        amount
      }
    }
    
  }


    }
`;




export default function ArtworkProducts({data}) {
 const productInfo = data.shopifyProduct;
console.log(data.shopifyProduct)
  return (
    <>
      <Header />

      <div class="pageContainer pt-10 sm:pt-60 md:pt-60 lg:pt-40">
        <PDP productInfo={productInfo} />
      </div>
      <Footer />
    </>
  );
}
