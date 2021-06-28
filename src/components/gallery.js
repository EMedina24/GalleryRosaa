import React from "react";
import Echelon from "../assets/images/echelon.png";
import { useCartCount } from "gatsby-theme-shopify-manager";
import { useCartItems } from "gatsby-theme-shopify-manager";
import { useState } from "react";
import logo from "../assets/images/logos.png";

const Gallery = () => {
  const background = 'https://picsum.photos/800/800'
  return (
    <>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our latest collections of original artworks & paintings</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
    
      
     
    </div>
  </div>
</section>

      <div class="container mx-auto p-8">
  <div class="flex flex-row flex-wrap -mx-2">
    <div class=" hvr-float-shadow w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
      <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link"
       
       style={{
          backgroundImage: "url(" + background  + ")",
        }}>
        Link
      </a>
    </div>
    <div class=" w-full md:w-1/2 mb-4 px-2">
      <div class="flex flex-col sm:flex-row md:flex-col -mx-2">
        <div class="hvr-float-shadow w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
          <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" style={{
          backgroundImage: "url(" + background  + ")",
        }}>
            Link
          </a>
        </div>
        <div class=" hvr-float-shadow w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
          <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" 
          style={{
            backgroundImage: "url(" + background  + ")",
          }}>
            Link
          </a>
        </div>
      </div>
    </div>
    <div class=" hvr-float-shadow w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
      <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" 
    style={{
      backgroundImage: "url(" + background  + ")",
    }}>
        Link
      </a>
    </div>
    <div class="hvr-float-shadow w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
      <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" 
      style={{
        backgroundImage: "url(" + background  + ")",
      }}>
        Link
      </a>
    </div>
    <div class="hvr-float-shadow w-full sm:w-1/3 h-32 md:h-48 px-2">
      <a class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover" href="#" title="Link" 
     style={{
      backgroundImage: "url(" + background  + ")",
    }}>
        Link
      </a>
    </div>
  </div>
</div>
    </>
  );
};

export default Gallery;
