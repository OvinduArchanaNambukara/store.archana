import React, {CSSProperties, useEffect, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {categoryClickStyles} from "../../custom-styles/custom-category-click-styles";
import {useDispatch} from "react-redux";
import {changeCategory} from "../../store/actions/CategoriesActions";
import {useHistory, useRouteMatch} from "react-router-dom";

type CategoryProps = {
  name: string
  image: string
  isActive: boolean
}

const Category: React.FC<CategoryProps> = (props) => {
  const [styles, setStyles] = useState<CSSProperties>({});
  const {name, image, isActive} = props;
  const dispatch = useDispatch();
  let {path, url} = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (isActive) {
      setStyles(categoryClickStyles);
    } else {
      setStyles({});
    }
  }, [isActive]);


  const handleOnClick = () => {
    dispatch(changeCategory(name));
    history.push(`/${name}`);
  }

  return (
      <Col className='category text-center mt-2 px-1 px-md-2' xs={2}>
        <div onClick={handleOnClick} style={styles}>
          <Image src={image} alt={name} fluid={true}/>
          <p className='m-1'>{name}</p>
        </div>
      </Col>
  );
}

export default Category;
