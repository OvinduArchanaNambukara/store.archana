import React from "react";
import {BiEdit, BiTrash} from "react-icons/all";

const Actions: React.FC = () => {
  return (
      <React.Fragment>
        <BiEdit className='text-warning'/>
        <BiTrash className='text-danger mx-2'/>
      </React.Fragment>
  );
}

export default Actions;
