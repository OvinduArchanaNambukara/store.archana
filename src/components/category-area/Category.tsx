import React, {CSSProperties, useEffect, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {categoryClickStyles} from "../../custom-styles/custom-category-click-styles";
import {useHistory, useLocation, useRouteMatch} from "react-router-dom";

type CategoryProps = {
  name: string
  image: string
}

const Category: React.FC<CategoryProps> = (props) => {
  const [styles, setStyles] = useState<CSSProperties>({});
  const {name, image} = props;
  const history = useHistory();
  const {url, path} = useRouteMatch();
  const {pathname} = useLocation();

  /**
   * according to current path change category style
   */
  useEffect(() => {
    if (pathname === `${path}/${name}`) {
      setStyles(categoryClickStyles);
    } else {
      setStyles({});
    }
  }, [pathname])

  /**
   *When click change location to nested route
   */
  const handleOnClick = () => {
    history.push(`${url}/${name}`);
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
