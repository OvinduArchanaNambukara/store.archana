import React from "react";
import {Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {displayCartPreview} from "../../store/actions/CartActions";
import {useDispatch} from "react-redux";

const Logo: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * change route to / and hide cart preview
   * @author Ovindu
   */
  const handleOnClick = () => {
    history.push('/');
    dispatch(displayCartPreview(false));
  }

  return (
      <Col className='my-auto' xs={4}>
        <p className='my-0 p-0 pl-md-4'>
          <span onClick={handleOnClick}>LOGO</span>
        </p>
      </Col>
  );
}

export default Logo;
