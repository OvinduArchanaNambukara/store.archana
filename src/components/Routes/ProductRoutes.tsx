import React, {Suspense, lazy} from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import Loading from "../loading/Loading";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Food = lazy(() => import("../productUX/Food"));
const Pharmacy = lazy(() => import("../productUX/Pharmacy"));
const Grocery = lazy(() => import("../productUX/Grocery"));
const Electronic = lazy(() => import("../productUX/Electronic"));

const ProductRoutes: React.FC = () => {
  let location = useLocation();

  return (
      <Suspense fallback={<Loading/>}>
        <TransitionGroup>
          <CSSTransition classNames='page' timeout={1000} key={location.key}>
            <Switch location={location}>
              <Route path='/All'>
                <Food/>
                <Pharmacy/>
                <Grocery/>
                <Electronic/>
              </Route>
              <Route path='/Pharmacy'>
                <Pharmacy/>
              </Route>
              <Route path='/Electronic'>
                <Electronic/>
              </Route>
              <Route path='/Food'>
                <Food/>
              </Route>
              <Route path='/'>
                <Grocery/>
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>

  );
}

export default ProductRoutes;
