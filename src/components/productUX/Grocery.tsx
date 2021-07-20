import React from "react";
import Products from "./template/Products";
import {IProducts} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

const Grocery: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.grocery);

  return (
      <Products productList={productList}/>
  );
}

export default Grocery;
