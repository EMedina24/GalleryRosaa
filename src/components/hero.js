import React from "react";
import headerpic from "../assets/images/headerpic.jpg";
import Heros from "../assets/images/hero.jpg";
import intro from "../assets/images/intro.mp4";
import HeroCarousel from "react-hero-carousel";
// import PropTypes from "prop-types";
// import { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";

const Hero = ({ pageData }) => {
  const img = headerpic;

  return (
    <>
      <div
        class="w-full h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(" + Heros + ")",
        }}
      >
        <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
          <div class="mx-4 text-center text-white">
            <h1 class="font-bold text-6xl mb-4">Summer Collection</h1>
            <h2 class="font-bold text-3xl mb-12">On sale now</h2>
            <div>
              <a
                href=""
                class="bg-transparent border-solid border-2 border-white font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2"
              >
                Shop collections
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero.propTypes = {
//   contentModuleId: PropTypes.string.isRequired,
// };

export default Hero;
