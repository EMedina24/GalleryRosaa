import React from "react";
import Echelon from "../assets/images/echelon.png";
import { useCartCount } from "gatsby-theme-shopify-manager";
import { useCartItems } from "gatsby-theme-shopify-manager";
import { useState } from "react";
import logo from "../assets/images/logos.png";
import { Link } from "gatsby";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav class=" z-50 bg-white shadow dark:bg-gray-800 fixed w-full  ">
        <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <div>
              <a
                class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                <img class="h-8 w-auto sm:h-10" src={logo} />
              </a>
            </div>

            <div class="flex md:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={
              "nav-block  items-center md:flex " +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <div class="flex flex-col md:flex-row md:mx-6 text-sm">
              <Link
                className="px-4 py-2 mt-2 text-sm font-semibold text-black rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-red-500 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-red-200 md:mt-0 hover:text-red-900 focus:text-gray-900 hover:bg-red-200 focus:bg-red-200 focus:outline-none focus:shadow-outline   "
                to="/contact"
              >
                Shop
              </Link>
            </div>

            <div class="flex flex-col md:flex-row md:mx-6 text-sm">
              <Link
                className="px-4 py-2 mt-2 text-sm font-semibold text-black  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-red-500 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-red-200 md:mt-0 hover:text-red-900 focus:text-gray-900 hover:bg-red-200 focus:bg-red-200 focus:outline-none focus:shadow-outline   "
                to="/contact"
              >
                Collections
              </Link>
            </div>

            <div class="flex flex-col md:flex-row md:mx-6 text-sm">
              <Link
                className="px-4 py-2 mt-2 text-sm font-semibold text-black  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-red-500 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-red-200 md:mt-0 hover:text-red-900 focus:text-gray-900 hover:bg-red-200 focus:bg-red-200 focus:outline-none focus:shadow-outline   "
                to="/contact"
              >
                About
              </Link>
            </div>

            <div class="flex justify-center md:block"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
