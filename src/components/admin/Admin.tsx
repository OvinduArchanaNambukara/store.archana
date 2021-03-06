import React, {lazy, Suspense} from "react";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import Loading from "../loading/Loading";

const ProductTable = lazy(() => import("../admin/product-table/ProductTable"));
const OrderTable = lazy(() => import("../admin/order-table/OrderTable"));
const AddProduct = lazy(() => import("../admin/add-product/AddProduct"));

const Admin: React.FC = () => {
  let location = useLocation();
  let {path} = useRouteMatch();

  return (
      <Suspense fallback={<Loading/>}>
        <Switch location={location}>
          <Route path={`${path}/product-list`}>
            <ProductTable/>
          </Route>
          <Route path={`${path}/order-table`}>
            <OrderTable/>
          </Route>
          <Route path={`${path}/create-product`}>
            <AddProduct/>
          </Route>
          <Route path='/'>
            <Redirect to={`${path}/order-table`}/>
          </Route>
        </Switch>
      </Suspense>
  );
}

export default Admin;
