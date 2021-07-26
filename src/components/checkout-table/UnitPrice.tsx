import React from "react";

type UnitPriceProps = {
  price: number
}

const UnitPrice: React.FC<UnitPriceProps> = (props) => {
  const {price} = props;

  return (
      <label className='mb-0'>Rs.{price}.00</label>
  )
}

export default UnitPrice;
