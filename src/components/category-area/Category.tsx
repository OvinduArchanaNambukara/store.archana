import React, {CSSProperties, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {categoryClickStyles} from "../../custom-styles/custom-category-click-styles";

type CategoryProps = {
  name: string,
  image: string
}

const Category: React.FC<CategoryProps> = (props) => {
  const [styles, setStyles] = useState<CSSProperties>({});
  const [isClicked, setIsClicked] = useState(true);

  /**
   * when clicked set custom styles to div
   * @author Ovindu
   */
  const handleOnClick = () => {
    if (isClicked) {
      setStyles(categoryClickStyles);
      setIsClicked(false);
    } else {
      setStyles({});
      setIsClicked(true);
    }
  }

  return (
      <Col className='category text-center mt-2 px-1 px-md-2' xs={2}>
        <div onClick={handleOnClick} style={styles}>
          <Image src={props.image} alt={props.name} fluid={true}/>
          <p className='m-1'>{props.name}</p>
        </div>
      </Col>
  );
}

export default Category;
