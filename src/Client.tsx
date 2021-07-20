import React from "react";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNav from "./components/bottom-nav/BottomNav";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./components/Routes/Routes";
import Footer from "./components/footer/Footer";

const Client: React.FC = () => {
  return (
      <Router>
        <TopNavBar/>
        <BottomNav/>
        <Routes/>
        <Footer/>
      </Router>
  );
}

export default Client;
