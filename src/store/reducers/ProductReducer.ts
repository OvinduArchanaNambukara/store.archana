import {IProduct, IProducts} from "../../types/types";
import {ProductActionTypes} from "../types/ProductActionTypes";
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

const initialState: storeTypes = {
  food: [],
  electronic: [],
  pharmacy: [],
  vegetables: [],
  meat: [],
  fruits: []
}

export interface storeTypes {
  food: IProducts[]
  electronic: IProducts[]
  pharmacy: IProducts[]
  vegetables: IProducts[]
  fruits: IProducts[]
  meat: IProducts[]
}

export const ProductReducer = (state: storeTypes = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case MARK_ADD_TO_CART: {
      const vegetables = state.vegetables.slice();
      const fruits = state.fruits.slice();
      const meat = state.meat.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...vegetables, ...fruits, ...meat, ...electronic, ...pharmacy, ...food];

      all.map((value: IProducts) => {
        value.productDetails.map((product: IProduct) => {
          if (product.product.id === action.payload.id) {
            product.inCart = true;
            return;
          }
          return;
        });
      });
      return {
        ...state,
        vegetables: vegetables, meat: meat, fruits: fruits, pharmacy: pharmacy, electronic: electronic, food: food
      }
    }
    case MARK_REMOVE_FROM_CART: {
      const vegetables = state.vegetables.slice();
      const fruits = state.fruits.slice();
      const meat = state.meat.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...vegetables, ...fruits, ...meat, ...electronic, ...pharmacy, ...food];

      all.map((value: IProducts) => {
        value.productDetails.map((product: IProduct) => {
          if (product.product.id === action.payload.id) {
            product.inCart = false;
            return;
          }
          return;
        });
      })
      return {
        ...state,
        vegetables: vegetables, meat: meat, fruits: fruits, pharmacy: pharmacy, electronic: electronic, food: food
      }
    }
    case IMAGE_PRESIGNED: {
      const vegetables = state.vegetables.slice();
      const fruits = state.fruits.slice();
      const meat = state.meat.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...vegetables, ...fruits, ...meat, ...electronic, ...pharmacy, ...food];

      all.map((value: IProducts) => {
        value.productDetails.map((product: IProduct) => {
          if (product.product.id === action.payload.productID) {
            product.product.image = action.payload.imageURL;
            return;
          }
          return;
        });
      });
      return {
        ...state,
        vegetables: vegetables, meat: meat, fruits: fruits, pharmacy: pharmacy, electronic: electronic, food: food
      }
    }
    case ADD_VEGETABLES: {
      return {
        ...state,
        vegetables: action.payload
      }
    }
    case ADD_ELECTRONICS: {
      return {
        ...state,
        electronic: action.payload
      }
    }
    case ADD_FOOD: {
      return {
        ...state,
        food: action.payload
      }
    }
    case ADD_MEAT: {
      return {
        ...state,
        meat: action.payload
      }
    }
    case ADD_FRUITS: {
      return {
        ...state,
        fruits: action.payload
      }
    }
    case ADD_PHARMACY: {
      return {
        ...state,
        pharmacy: action.payload
      }
    }
    default:
      return state;
  }
}


