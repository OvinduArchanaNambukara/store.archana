import React, {lazy, Suspense} from "react";
import Loading from "../loading/Loading";
import {Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";

const OrderTable = lazy(() => import("./OrderTable"));


const User: React.FC = () => {
  let location = useLocation();
  let {path} = useRouteMatch();

  return (
      <Suspense fallback={<Loading/>}>
        <Switch location={location}>
          <Route path={`${path}/order-table`}>
            <OrderTable/>
          </Route>
          <Route path='/'>
            <Redirect to={`${path}/order-table`}/>
          </Route>
        </Switch>
      </Suspense>
  );
}

export default User;
