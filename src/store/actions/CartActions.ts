import {ICheckoutProduct} from "../../types/types";
import {
  AddToCart,
  ChangeQuantity,
  DeleteFromCart,
  DisplayCartPreview,
  SetSubTotal,
  UpdateCartItem
} from "../types/CartActionTypes";
import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_FROM_CART,
  DISPLAY_CART_PREVIEW,
  SET_SUB_TOTAL,
  UPDATE_CART_ITEM
} from "../constants/CartConstants";

export const addToCart = (item: ICheckoutProduct): AddToCart => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const deleteFromCart = (index: number): DeleteFromCart => {
  return {
    type: DELETE_FROM_CART,
    payload: index
  }
}

export const displayCartPreview = (value: boolean): DisplayCartPreview => {
  return {
    type: DISPLAY_CART_PREVIEW,
    payload: value
  }
}

export const changeQuantity = (index: number, quantity: number): ChangeQuantity => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      index: index,
      quantity: quantity
    }
  }
}

export const updateCartItem = (id: string, quantity: number): UpdateCartItem => {
  return {
    type: UPDATE_CART_ITEM,
    payload: {
      id: id,
      quantity: quantity
    }
  }
}

export const setSubTotal = (total: number): SetSubTotal => {
  return {
    type: SET_SUB_TOTAL,
    payload: total
  }
}
