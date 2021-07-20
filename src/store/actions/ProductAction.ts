import {MarkAddToCart, MarkRemoveFromCart} from "../types/ProductActionTypes";
import {MARK_ADD_TO_CART, MARK_REMOVE_FROM_CART} from "../constants/ProductConstants";

export const markAddToCart = (index: number, category: string): MarkAddToCart => {
  return {
    type: MARK_ADD_TO_CART,
    payload: {
      index: index,
      category: category
    }
  }
}

export const markRemoveFromCart = (id: string, value: boolean): MarkRemoveFromCart => {
  return {
    type: MARK_REMOVE_FROM_CART,
    payload: {
      id: id,
      value: value
    }
  }
}

