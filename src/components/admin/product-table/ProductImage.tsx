import React, {useEffect} from "react";
import {Image} from "react-bootstrap";
import {getImagePreSignedUrls} from "../../../store/actions/ProductAction";
import {useDispatch} from "react-redux";

type ItemImageProps = {
  image: string
  tokenKey: string
  id: string
}

const ProductImage: React.FC<ItemImageProps> = (props) => {
  const {image, tokenKey, id} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(image)
    if (image !== tokenKey) {
      return;
    }
    dispatch(getImagePreSignedUrls(tokenKey, id));
  }, []);

  return (
      <Image src={image} width={45}/>
  );
}

export default ProductImage;
