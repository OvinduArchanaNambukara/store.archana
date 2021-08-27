import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import axios from "axios";

type ItemImageProps = {
  image: string
  tokenKey: string
  id: string
}

const getImage = async (key: string) => {
  const res = await axios.post('https://api.bitsandbytes.me/getImage', {key: key});
  return res.data;
}

const ProductImage: React.FC<ItemImageProps> = (props) => {
  const {tokenKey} = props;
  const [imgSrc, setImgSrc] = useState('/');

  useEffect(() => {
    //getImage(tokenKey).then((data) => setImgSrc(data))
  }, [tokenKey]);

  return (
      <Image src={imgSrc} width={45}/>
  );
}

export default ProductImage;
