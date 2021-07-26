import React from "react";
import {Button, Col} from "react-bootstrap";
import {BiChevronLeft} from "react-icons/all";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {displayCartPreview} from "../../store/actions/CartActions";

const ContinueShoppingBtn: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /**
   * change route to / and hide cart preview
   */
  const handleOnClick = () => {
    history.push('/');
    dispatch(displayCartPreview(false));
  }

  return (
      <Col md={4} xl={2} lg={3} sm={6} className='px-0'>
        <Button variant='outline-secondary' className='continueShoppingBtn' onClick={handleOnClick}>
          <BiChevronLeft className='pb-1'/>Continue Shopping
        </Button>
      </Col>
  )
}

export default ContinueShoppingBtn;
