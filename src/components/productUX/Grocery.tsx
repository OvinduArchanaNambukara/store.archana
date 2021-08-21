import React from "react";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Meat from "./Meat";

const Grocery: React.FC = () => {
  return (
      <React.Fragment>
        <Vegetables/>
        <Fruits/>
        <Meat/>
      </React.Fragment>
  );
}

export default Grocery;
