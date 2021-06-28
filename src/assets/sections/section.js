import React from "react";
import PropTypes from "prop-types";
import Hero from "../sections/hero";

import Cart from "../sections/cart";

// Dynamically import or require sections inside the section folder
const components = {
  Hero,

  Cart,
};

const Section = ({ contentModuleId, type }) => {
  const component = type.split("Layout")[1];
  console.log(type);
  if (typeof components[component] === "undefined") {
    return "";
  }

  return React.createElement(components[component], {
    contentModuleId,
  });
};

Section.prototype = {
  contentModuleId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Section;
