import React, {useEffect} from "react";
import {GetFoodProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_FOOD} from "../../graphql/query";
import {processQueryData} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Food: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.food);
  const {data, loading, error} = useQuery<GetFoodProducts>(GET_FOOD);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(processQueryData(data.getFoodProducts));
  }, [data]);

  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Food;
