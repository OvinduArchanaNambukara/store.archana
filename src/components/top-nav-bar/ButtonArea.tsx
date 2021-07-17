import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {setLogInButtonStatus} from "../../store/actions/StatusActions";

const ButtonArea: React.FC = () => {
  const isLogIn: boolean = useSelector((state: RootState) => state.statusReducer.isLogIn);
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * when log out click set route to /  path and set log in button status false in redux store
   * @author Ovindu
   */
  const handleOnLogOutClick = () => {
    history.push('/');
    dispatch(setLogInButtonStatus(false));
  }

  /**
   * when click set Route to / path
   * @author Ovindu
   */
  const handleOnLogInClick = () => {
    history.push('/login');
  }

  /**
   * when click route to /register path
   * @author Ovindu
   */
  const handleOnRegisterClick = () => {
    history.push('/register');
  }

  return (
      <React.Fragment>
        {
          !isLogIn &&
          <Button className='my-md-2 py-md-0' onClick={handleOnRegisterClick}>Register</Button>
        }
        {
          !isLogIn &&
          <Button className='border-0 my-md-2 py-md-0 ml-md-1 mt-1 mb-1' onClick={handleOnLogInClick}>Log in</Button>
        }
        {
          isLogIn &&
          <Button className='border-0 my-md-2 py-md-0 ml-md-1 mt-1 mb-1' onClick={handleOnLogOutClick}>Log out</Button>
        }
      </React.Fragment>
  );
}

export default ButtonArea;
