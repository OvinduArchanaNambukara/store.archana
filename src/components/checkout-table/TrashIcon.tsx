import React from 'react';
import {BiTrashAlt} from "react-icons/all";
import {useDispatch} from "react-redux";
import {deleteFromCart} from "../../store/actions/CartActions";
import {markRemoveFromCart} from "../../store/actions/ProductAction";

type DeleteIconProps = {
  index: number
  id: string
}

const TrashIcon: React.FC<DeleteIconProps> = (props) => {
  const {index, id} = props;
  const dispatch = useDispatch();

  /**
   * on click delete that item in redux store cartItem[]
   * on click set inCart: false in redux store grocery[]
   * @author Ovindu
   */
  const handleOnDeleteClick = () => {
    dispatch(deleteFromCart(index));
    dispatch(markRemoveFromCart(id, false));
  }

  return (
      <BiTrashAlt onClick={handleOnDeleteClick}/>
  )
}

export default TrashIcon;
