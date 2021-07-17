import {MARK_ADD_TO_CART, MARK_REMOVE_FROM_CART} from "../constants/ProductConstants";

export interface MarkAddToCart {
  type: typeof MARK_ADD_TO_CART,
  payload: {
    index: number
    value: boolean
  }
}

export interface MarkRemoveFromCart {
  type: typeof MARK_REMOVE_FROM_CART,
  payload: {
    id: string
    value: boolean
  }
}

export type ProductActionTypes = MarkAddToCart | MarkRemoveFromCart
