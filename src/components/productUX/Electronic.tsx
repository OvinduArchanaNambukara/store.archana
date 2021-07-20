import React from "react";
import {IProducts} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";

const Electronic: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.electronic);

  return (
      <Products productList={productList}/>
  );
}

export default Electronic;
