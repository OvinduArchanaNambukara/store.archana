import React, {lazy, Suspense, useEffect, useState} from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
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
  const [isHomeLoaded, setIsHomeLoaded] = useState<boolean>(true);
  const [key, setKey] = useState<string>(location.pathname);

  /**
   * change css transaction key according to route path
   */
  useEffect(() => {
    if (location.pathname.includes('/home') || location.pathname === '/') {
      if (isHomeLoaded) {
        setIsHomeLoaded(false);
        setKey(location.pathname);
      }
    } else {
      setIsHomeLoaded(true);
      setKey(location.pathname);
    }
  }, [location]);

  return (
      <TransitionGroup>
        <CSSTransition classNames='page' timeout={1000} key={key}>
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
