import React from "react";
import {AiOutlineFileDone, BiEdit} from "react-icons/all";

type ActionPropsType = {
  orderStatus: boolean
}

const Actions: React.FC<ActionPropsType> = (props) => {
  const {orderStatus} = props;

  return (
      <React.Fragment>
        {!orderStatus && <BiEdit className='text-warning'/>}
        {orderStatus && <AiOutlineFileDone className='text-success'/>}
      </React.Fragment>
  );
}

export default Actions;
