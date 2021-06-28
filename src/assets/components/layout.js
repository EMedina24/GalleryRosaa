import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  menus: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menus: PropTypes.any,
};

export default Layout;
