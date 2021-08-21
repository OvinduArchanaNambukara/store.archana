import React, {useEffect} from "react";
import {GetMeatProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_MEAT} from "../../graphql/query";
import {processQueryData} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Meat: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.meat);
  const {data, loading, error} = useQuery<GetMeatProducts>(GET_MEAT);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(processQueryData(data.getMeatProducts));
  }, [data]);


  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Meat;
