import React from "react";
import Echelon from "../assets/images/echelon.png";
import { useCartCount } from "gatsby-theme-shopify-manager";
import { useCartItems } from "gatsby-theme-shopify-manager";
import { useState } from "react";
import logo from "../assets/images/logos.png";

const ArtGrid = ({productInfo}) => {

  return (
    <>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
   { productInfo.map(content =>(

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a 
        href={`/artwork/${content.title}`}
        class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={content.images[0].originalSrc}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{content.title}</h2>
          <p class="mt-1"> ${content.priceRange.maxVariantPrice.amount}</p>
        </div>
      </div>

   ))}
  
    </div>
  </div>
</section>
    </>
  );
};

export default ArtGrid;
