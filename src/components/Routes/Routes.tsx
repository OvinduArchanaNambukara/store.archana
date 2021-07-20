import React, {lazy, Suspense} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loading from "../loading/Loading";
import ProductRoutes from "./ProductRoutes";

const Welcome = lazy(() => import("../welcome/Welcome"));
const SearchBar = lazy(() => import("../search-bar/SearchBar"));
const CategoryArea = lazy(() => import("../category-area/CategoryArea"));
const LogInUX = lazy(() => import("../log-in/LogInUX"));
const RegisterUX = lazy(() => import("../register/RegisterUX"));

const Routes: React.FC = () => {
  let location = useLocation();

  return (
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={1000} key={location.key}>
          <Suspense fallback={<Loading/>}>
            <Switch location={location}>
              <Route path='/login'>
                <LogInUX/>
              </Route>
              <Route path='/register'>
                <RegisterUX/>
              </Route>
              <Route path='/'>
                <Welcome/>
                <SearchBar/>
                <CategoryArea/>
                <ProductRoutes/>
              </Route>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default Routes;
