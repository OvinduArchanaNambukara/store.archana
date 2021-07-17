import React, {useRef, useState} from "react";
import {Col, Container, Overlay, Popover, Row} from "react-bootstrap";
import CartPreviewDetails from "./CartPreviewDetails";
import CartItem from "./CartItem";
import EmptyCartPreview from "./EmptyCartPreview";
import CheckOutButton from "../common/CheckOutButton";
import CartIcon from "./CartIcon";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {ICheckoutProduct} from "../../types/types";
import {displayCartPreview} from "../../store/actions/CartActions";


const CartPreview: React.FC = () => {
  const CartItems: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.cartList);
  const displayCart: boolean = useSelector((state: RootState) => state.cartReducer.displayCartPreview);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const dispatch = useDispatch();
  let subTotal = 0;

  const handleClick = (event: any) => {
    dispatch(displayCartPreview(!displayCart));
    setTarget(event.target);
  };

  return (
      <div ref={ref}>
        <CartIcon handleClick={handleClick} itemCount={CartItems.length}/>
        <Overlay
            show={displayCart}
            target={target}
            placement="bottom-end"
            container={ref.current}
            rootClose={true}
            rootCloseEvent='mousedown'
        >
          <Popover id="popover-contained" className={CartItems.length === 0 ?
              `empty-cart-popover mt-2 mt-md-3 py-2 px-3` : `cart-preview-popover mt-2 mt-md-3 py-2`}>
            <Container className="cart-preview-container px-2">
              <Row className="cart-preview m-0 p-0">
                {CartItems.length === 0 ? <EmptyCartPreview/> :
                    <React.Fragment>
                      <Col xs={12} className="item-table">
                        {CartItems.map((item, index) => {
                          if (item.quantity) {
                            subTotal += item.quantity * item.product.currentPrice;
                            return (
                                <CartItem
                                    key={index}
                                    product={item.product}
                                    quantity={item.quantity}
                                    index={index}/>
                            );
                          }
                        })
                        }
                      </Col>
                      <Col xs={12} className="pr-4">
                        <CartPreviewDetails subTotal={subTotal} count={CartItems.length}/>
                      </Col>
                      <Col xs={12}>
                        <CheckOutButton
                            classname={"cart-checkout-btn px-5 py-2 mb-2 d-block d-sm-none float-right"}/>
                      </Col>
                    </React.Fragment>}
              </Row>
            </Container>
          </Popover>
        </Overlay>
      </div>
  );
}

export default CartPreview;
