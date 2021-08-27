import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Admin from "../admin/Admin";
import {Redirect} from "react-router-dom";
import User from "../user/User";
import AdminNavBar from "../user-account-nav-bar/AdminNavBar";
import UserNavBar from "../user-account-nav-bar/UserNavBar";

const ProtectedRoute: React.FC = () => {
  const role = useSelector((state: RootState) => state.statusReducer.role);

  if (role === 'admin') {
    return (
        <React.Fragment>
          <AdminNavBar/>
          <Admin/>
        </React.Fragment>
    );
  }

  if (role === 'user') {
    return (
        <React.Fragment>
          <UserNavBar/>
          <User/>
        </React.Fragment>
    );
  }

  return (
      <Redirect to='/login'/>
  )
}

export default ProtectedRoute;
