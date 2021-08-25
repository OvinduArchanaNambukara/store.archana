import React from "react";
import {Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Admin from "../admin/Admin";

const ProtectedRoute: React.FC = () => {
  const role = useSelector((state: RootState) => state.statusReducer.role);

  if (role === 'admin') {
    return (
        <Container>
          <Admin/>
        </Container>
    );
  }

  if (role === 'user') {
    return (
        <Container>
          hi user
        </Container>
    );
  }

  return (
      <h1>hi from no one</h1>
  )
}

export default ProtectedRoute;
