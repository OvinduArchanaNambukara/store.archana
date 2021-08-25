import React from "react";
import {Image} from "react-bootstrap";

type CropImageType = {
  src: string;
}

const CroppedImage: React.FC<CropImageType> = (props) => {
  const {src} = props;

  return (
      <React.Fragment>
        <Image src={src}/>
      </React.Fragment>
  );
}

export default CroppedImage;
