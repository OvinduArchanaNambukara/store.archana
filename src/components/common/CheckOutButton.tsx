import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {displayCartPreview} from "../../store/actions/CartActions";

type CheckOutButtonProps = {
  classname: string
}

const CheckOutButton: React.FC<CheckOutButtonProps> = (props) => {
  const dispatch = useDispatch();
  const {classname} = props;
  const history = useHistory();

  /**
   * change route to /checkout and hide cart preview
   * @author Ovindu
   */
  const handleOnClick = () => {
    history.push('/checkout');
    dispatch(displayCartPreview(false));
  }

  return (
      <Button className={classname} onClick={handleOnClick}>Check Out</Button>
  );
}

export default CheckOutButton;
