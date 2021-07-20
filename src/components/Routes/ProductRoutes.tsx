import React, {lazy, Suspense} from "react";
import {Route, Switch, useLocation, Redirect, useRouteMatch} from "react-router-dom";
import Loading from "../loading/Loading";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Food = lazy(() => import("../productUX/Food"));
const Pharmacy = lazy(() => import("../productUX/Pharmacy"));
const Grocery = lazy(() => import("../productUX/Grocery"));
const Electronic = lazy(() => import("../productUX/Electronic"));

const ProductRoutes: React.FC = () => {
  let location = useLocation();
  let {path} = useRouteMatch();

  return (
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={1000} key={location.pathname}>
          <Suspense fallback={<Loading/>}>
            <Switch location={location}>
              <Route path={`${path}/All`}>
                <Food/>
                <Pharmacy/>
                <Grocery/>
                <Electronic/>
              </Route>
              <Route path={`${path}/Pharmacy`}>
                <Pharmacy/>
              </Route>
              <Route path={`${path}/Electronic`}>
                <Electronic/>
              </Route>
              <Route path={`${path}/Food`}>
                <Food/>
              </Route>
              <Route path={`${path}/Grocery`}>
                <Grocery/>
              </Route>
              <Route path='/'>
                <Redirect to={`${path}/Grocery`}/>
              </Route>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default ProductRoutes;
