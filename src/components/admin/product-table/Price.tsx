import React from "react";
import NumberFormat from "react-number-format";

const Price: React.FC = () => {
  return (
      <NumberFormat prefix={'Rs.'} displayType={"text"} value={200000} thousandSeparator={true} suffix={'.00'}/>
  );
}

export default Price;
