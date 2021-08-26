import React from "react";
import {AiOutlineFileDone, BiEdit} from "react-icons/all";

const Actions: React.FC = () => {

  return (
      <React.Fragment>
        <BiEdit className='text-warning'/>
        <AiOutlineFileDone className='text-success'/>
      </React.Fragment>
  );
}

export default Actions;
