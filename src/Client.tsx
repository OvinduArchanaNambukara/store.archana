import React from "react";
import Products from "./components/productUX/Products";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNav from "./components/bottom-nav/BottomNav";
import Welcome from "./components/welcome/Welcome";

const Client: React.FC = () => {
  return (
      <React.Fragment>
        <TopNavBar/>
        <BottomNav/>
        <Welcome/>
        <Products/>
      </React.Fragment>
  );
}

export default Client;
