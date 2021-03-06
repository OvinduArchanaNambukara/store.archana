import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  CLEAR_CART,
  DELETE_FROM_CART,
  DISPLAY_CART_PREVIEW,
  SET_SUB_TOTAL,
  UPDATE_CART_ITEM
} from "../constants/CartConstants";
import {ICheckoutProduct} from "../../types/types";

export interface AddToCart {
  type: typeof ADD_TO_CART,
  payload: ICheckoutProduct
}

export interface DeleteFromCart {
  type: typeof DELETE_FROM_CART,
  payload: number
}

export interface DisplayCartPreview {
  type: typeof DISPLAY_CART_PREVIEW
  payload: boolean
}

export interface ChangeQuantity {
  type: typeof CHANGE_QUANTITY,
  payload: {
    index: number
    quantity: number
  }
}

export interface UpdateCartItem {
  type: typeof UPDATE_CART_ITEM,
  payload: {
    id: string
    quantity: number
  }
}

export interface SetSubTotal {
  type: typeof SET_SUB_TOTAL,
  payload: number
}

export interface ClearCart {
  type: typeof CLEAR_CART,
}


export type CartActionTypes =
    AddToCart
    | DeleteFromCart
    | DisplayCartPreview
    | ChangeQuantity
    | UpdateCartItem
    | SetSubTotal
    | ClearCart
