import {
  ADD_ELECTRONICS,
  ADD_FOOD,
  ADD_FRUITS,
  ADD_MEAT,
  ADD_PHARMACY,
  ADD_VEGETABLES,
  IMAGE_PRESIGNED,
  MARK_ADD_TO_CART,
  MARK_REMOVE_FROM_CART
} from "../constants/ProductConstants";
import {IProducts} from "../../types/types";

export interface MarkAddToCart {
  type: typeof MARK_ADD_TO_CART,
  payload: {
    id: string
  }
}

export interface MarkRemoveFromCart {
  type: typeof MARK_REMOVE_FROM_CART,
  payload: {
    id: string
  }
}

export interface ImagePreSigned {
  type: typeof IMAGE_PRESIGNED
  payload: {
    imageURL: string
    productID: string
  }
}

export interface AddVegetable {
  type: typeof ADD_VEGETABLES,
  payload: IProducts[]
}

export interface AddFruits {
  type: typeof ADD_FRUITS,
  payload: IProducts[]
}

export interface AddMeat {
  type: typeof ADD_MEAT,
  payload: IProducts[]
}

export interface AddPharmacy {
  type: typeof ADD_PHARMACY,
  payload: IProducts[]
}

export interface AddFood {
  type: typeof ADD_FOOD,
  payload: IProducts[]
}

export interface AddElectronics {
  type: typeof ADD_ELECTRONICS,
  payload: IProducts[]
}

export type ProductActionTypes =
    MarkAddToCart
    | MarkRemoveFromCart
    | AddElectronics
    | AddMeat
    | AddFood
    | AddFruits
    | AddVegetable
    | AddPharmacy
    | ImagePreSigned
