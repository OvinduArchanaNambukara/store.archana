import React from "react";
import TopNavBar from "./components/top-nav-bar/TopNavBar";
import BottomNav from "./components/bottom-nav/BottomNav";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Admin from "./components/admin/Admin";

const Client: React.FC = () => {
  return (
      <Router>
        <TopNavBar/>
        <BottomNav/>
        {/*<Routes/>*/}
        <Admin/>
        <Footer/>
      </Router>
  );
}

export default Client;
