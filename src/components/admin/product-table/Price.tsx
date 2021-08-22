import React from "react";
import NumberFormat from "react-number-format";

type PriceProps = {
  price: number | null
}

const Price: React.FC<PriceProps> = (props) => {
  const {price} = props;

  return (
      <NumberFormat prefix={'Rs.'} displayType={"text"} value={price} thousandSeparator={true} suffix={'.00'}/>
  );
}

export default Price;
