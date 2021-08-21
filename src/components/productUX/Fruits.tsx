import React, {useEffect} from "react";
import {GetFruitProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_FRUITS} from "../../graphql/query";
import {processQueryData} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Fruits: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.fruits);
  const {data, loading, error} = useQuery<GetFruitProducts>(GET_FRUITS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(processQueryData(data.getFruitProducts));
  }, [data]);

  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Fruits;
