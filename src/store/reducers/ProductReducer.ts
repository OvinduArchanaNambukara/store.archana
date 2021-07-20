import {IProduct, IProducts} from "../../types/types";
import {ProductActionTypes} from "../types/ProductActionTypes";
import {MARK_ADD_TO_CART, MARK_REMOVE_FROM_CART} from "../constants/ProductConstants";
import {FruitProducts} from "../../constants/fruitsList";
import {FoodProducts} from "../../constants/foodList";
import {ElectronicProducts} from "../../constants/electronic";
import {PharmacyProducts} from "../../constants/pharmacyList";
import {VegetableProducts} from "../../constants/vegetableList";
import {MeatProducts} from "../../constants/meatList";

const initialState: storeTypes = {
  grocery: [VegetableProducts, FruitProducts, MeatProducts],
  food: [FoodProducts],
  electronic: [ElectronicProducts],
  pharmacy: [PharmacyProducts]
}

export interface storeTypes {
  grocery: IProducts[]
  food: IProducts[]
  electronic: IProducts[]
  pharmacy: IProducts[]
}

export const ProductReducer = (state: storeTypes = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case MARK_ADD_TO_CART: {
      const grocery = state.grocery.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...grocery, ...food, ...electronic, ...pharmacy];

      all.map((value) => {
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
        grocery: grocery, pharmacy: pharmacy, electronic: electronic, food: food
      }
    }
    case MARK_REMOVE_FROM_CART: {
      const grocery = state.grocery.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...grocery, ...food, ...electronic, ...pharmacy];

      all.map((value) => {
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
        grocery: grocery, food: food, electronic: electronic, pharmacy: pharmacy
      }
    }
    default:
      return state;
  }
}

