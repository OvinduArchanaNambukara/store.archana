import React from "react";
import Products from "./components/productUX/Products";
import TopNavBar from "./components/top-nav-bar/TopNavBar";

const Client: React.FC = () => {
  return (
      <React.Fragment>
        <TopNavBar/>
        <Products/>
      </React.Fragment>
  );
}

export default Client;
