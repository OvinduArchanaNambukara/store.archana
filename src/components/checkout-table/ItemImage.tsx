import React from 'react';
import {Image} from "react-bootstrap";

type CartImageProps = {
  image: string
}

const ItemImage: React.FC<CartImageProps> = (props) => {
  const {image} = props;

  return (
      <Image className='tr-image' src={image} alt={`${image}`}/>
  )
}

export default ItemImage;
