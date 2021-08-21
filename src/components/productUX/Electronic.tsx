import React, {useEffect} from "react";
import {GetElectronicProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_ELECTRONICS} from "../../graphql/query";
import {processQueryData} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Electronic: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.electronic);
  const {data, loading, error} = useQuery<GetElectronicProducts>(GET_ELECTRONICS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(processQueryData(data.getElectronicProducts));
  }, [data]);


  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Electronic;
