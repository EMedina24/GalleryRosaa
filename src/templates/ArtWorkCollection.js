import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import { ToastProvider } from "react-toast-notifications";

import Header from "../components/header";
import Footer from "../components/footer";
import PDP from "../components/PDP";
import ArtGrid from "../components/ArtGrid";


export const query = graphql`
    query($CollectionId: String!) {
        shopifyCollection(id: { eq: $CollectionId }){
     products {
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


    }
`;




export default function ArtworkCollection({data}) {
 const productInfo = data.shopifyCollection.products;
console.log(productInfo)
  return (
    <>
      <Header />

      <div class="pageContainer pt-10 sm:pt-60 md:pt-60 lg:pt-40">
       <ArtGrid productInfo={productInfo}/>
      </div>
      <Footer />
    </>
  );
}
