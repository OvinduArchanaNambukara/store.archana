import React from "react";
import {Image} from "react-bootstrap";

type ItemImageProps = {
  src: string
}

const ProductImage: React.FC<ItemImageProps> = (props) => {
  const {src} = props;

  return (
      <Image src={src} width={45}/>
  );
}

export default ProductImage;
