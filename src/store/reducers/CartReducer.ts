import {ICheckoutProduct} from "../../types/types";
import {CartActionTypes} from "../types/CartActionTypes";
import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_FROM_CART,
  DISPLAY_CART_PREVIEW,
  UPDATE_CART_ITEM
} from "../constants/CartConstants";

const initialState: cartStateType = {
  cartList: [],
  displayCartPreview: false
};

interface cartStateType {
  cartList: ICheckoutProduct[],
  displayCartPreview: boolean
}

export const CartReducer = (state: cartStateType = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartList: [...state.cartList, action.payload]
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cartList: state.cartList.filter(
            (item: ICheckoutProduct, index: number) =>
                index !== action.payload
        )
      }
    }
    case DISPLAY_CART_PREVIEW: {
      return {
        ...state,
        displayCartPreview: action.payload
      }
    }
    case CHANGE_QUANTITY: {
      const cartList: ICheckoutProduct[] = [...state.cartList];
      cartList[action.payload.index].quantity += action.payload.quantity;
      return {
        ...state,
        cartList: cartList
      }
    }
    case UPDATE_CART_ITEM: {
      const cartList: ICheckoutProduct[] = [...state.cartList];
      cartList.map((item: ICheckoutProduct) => {
        if (item.product.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
      })
      return {
        ...state,
        cartList: cartList
      }
    }
    default:
      return state;
  }
}
