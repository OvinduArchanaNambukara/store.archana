import React from "react";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNav from "./components/bottom-nav/BottomNav";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Routes from "./components/Routes/Routes";
import AlertContainer from "./components/alert/AlertContainer";

const Client: React.FC = () => {
  return (
      <Router>
        <TopNavBar/>
        <BottomNav/>
        <Routes/>
        <Footer/>
        <AlertContainer/>
      </Router>
  );
}

export default Client;
