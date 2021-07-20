import React, {lazy, Suspense} from "react";
import {Route, Switch, useLocation, Redirect} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Loading from "../loading/Loading";

const Welcome = lazy(() => import("../welcome/Welcome"));
const SearchBar = lazy(() => import("../search-bar/SearchBar"));
const CategoryArea = lazy(() => import("../category-area/CategoryArea"));
const LogInUX = lazy(() => import("../log-in/LogInUX"));
const RegisterUX = lazy(() => import("../register/RegisterUX"));
const ProductRoutes = lazy(() => import("../Routes/ProductRoutes"));

const Routes: React.FC = () => {
  let location = useLocation();

  return (
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={1000} key={location.pathname}>
          <Suspense fallback={<Loading/>}>
            <Switch location={location}>
              <Route path='/login'>
                <LogInUX/>
              </Route>
              <Route path='/register'>
                <RegisterUX/>
              </Route>
              <Route path='/home'>
                <Welcome/>
                <SearchBar/>
                <CategoryArea/>
                <ProductRoutes/>
              </Route>
              <Route path='/'>
                <Redirect to='/home'/>
              </Route>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default Routes;
