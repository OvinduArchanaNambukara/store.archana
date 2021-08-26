import React, {lazy, Suspense} from "react";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import Loading from "../loading/Loading";

const ProductTable = lazy(() => import("../admin/product-table/ProductTable"));
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
          <Route path={`${path}/add`}>
            <AddProduct/>
          </Route>
          <Route path={`${path}/add`}>
            <AddProduct/>
          </Route>
          <Route path='/'>
            <Redirect to={`${path}/add`}/>
          </Route>
        </Switch>
      </Suspense>
  );
}

export default Admin;
