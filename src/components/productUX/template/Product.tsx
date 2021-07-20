import React, {useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {ICheckoutProduct, IProduct} from "../../../types/types";
import Name from "./Name";
import CurrentPrice from "./CurrentPrice";
import OldPrice from "./OldPrice";
import Quantity from "./Quantity";
import AddToCartBtn from "./AddToCartBtn";
import {useDispatch} from "react-redux";
import {addToCart, updateCartItem} from "../../../store/actions/CartActions";
import {markAddToCart} from "../../../store/actions/ProductAction";

type ProductProps = {
  productDetails: IProduct
  index: number
}

const Product: React.FC<ProductProps> = (props) => {
  const dispatch = useDispatch();
  const {name, image, oldPrice, currentPrice, id} = props.productDetails.product;
  const {inCart} = props.productDetails;
  const [quantity, setQuantity] = useState<null | number>(null);

  /**
   * create ICheckout Product item and add to redux store cartItems[]
   * set inCart:true in that product
   * @author Ovindu
   */
  const handleOnAddToCartClick = () => {
    if (quantity) {
      const item: ICheckoutProduct = {
        quantity: quantity,
        product: {
          id: id,
          name: name,
          image: image,
          oldPrice: oldPrice,
          currentPrice: currentPrice
        }
      }
      dispatch(addToCart(item));
      dispatch(markAddToCart(id));
    }
  }

  /**
   * when update click set that new quantity in cart item in redux store cartItem[]
   * @author Ovindu
   */
  const handleOnUpdateClick = () => {
    if (quantity) {
      dispatch(updateCartItem(id, quantity));
    }
  }

  return (
      <Col md={4} lg={3} xs={6} className='px-md-2 mb-3 px-1'>
        <div className='product px-3 py-4'>
          <Row className='justify-content-center'>
            <Col xs="auto">
              <Image src={image} placeholder="carrot" loading='lazy' fluid={true}/>
            </Col>
          </Row>
          <Name name={name}/>
          <Row className='justify-content-center'>
            <CurrentPrice currentPrice={currentPrice}/>
            {oldPrice && <OldPrice oldPrice={oldPrice}/>}
          </Row>
          <Row>
            <Quantity quantity={setQuantity} inCart={inCart} id={id}/>
            <AddToCartBtn onAddToCartClick={handleOnAddToCartClick} inCart={inCart}
                          onUpdateClick={handleOnUpdateClick}/>
          </Row>
        </div>
      </Col>
  )
}

export default Product;
