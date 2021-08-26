import React from "react";
import {AiOutlineFileDone, BiEdit} from "react-icons/all";
import {QueryOrderType} from "../../../types/types";

type ActionsProps = {
  orderStatus: boolean
  order: QueryOrderType
}

const Actions: React.FC<ActionsProps> = (props) => {
  const {orderStatus, order} = props;

  return (
      <React.Fragment>
        {!orderStatus && <BiEdit className='text-warning'/>}
        {orderStatus && <AiOutlineFileDone className='text-success'/>}
      </React.Fragment>
  );
}

export default Actions;
