import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Admin from "../admin/Admin";
import {Redirect} from "react-router-dom";
import User from "../user/User";

const ProtectedRoute: React.FC = () => {
  const role = useSelector((state: RootState) => state.statusReducer.role);

  if (role === 'admin') {
    return (
        <Admin/>
    );
  }

  if (role === 'user') {
    return (
        <User/>
    );
  }

  return (
      <Redirect to='/login'/>
  )
}

export default ProtectedRoute;
