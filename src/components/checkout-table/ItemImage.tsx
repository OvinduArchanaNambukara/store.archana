import React from 'react';

type CartImageProps = {
  image: string
}

const ItemImage: React.FC<CartImageProps> = (props) => {
  const {image} = props;

  return (
      <img className='tr-image' src={image} alt={`${image}`}/>
  )
}

export default ItemImage;
