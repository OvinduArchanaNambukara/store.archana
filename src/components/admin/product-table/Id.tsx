import React from "react";
import {Alert} from "react-bootstrap";

type IdProps = {
  id: string
}

const Id: React.FC<IdProps> = (props) => {
  const {id} = props;

  return (
      <Alert variant='info' className='p-1 m-0 text-center'>
        <span className='product-id'>{id}</span>
      </Alert>

  );
}

export default Id;
