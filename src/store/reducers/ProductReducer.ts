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
      switch (action.payload.category) {
        case "Vegetables": {
          grocery[0].productDetails[action.payload.index].inCart = true;
          break;
        }
        case "Fruits": {
          grocery[1].productDetails[action.payload.index].inCart = true;
          break;
        }
        case "Meat": {
          grocery[2].productDetails[action.payload.index].inCart = true;
          break;
        }
        case "Pharmacy": {
          pharmacy[0].productDetails[action.payload.index].inCart = true;
          break;
        }
        case "Electronic": {
          electronic[0].productDetails[action.payload.index].inCart = true;
          break;
        }
        case "Food": {
          food[0].productDetails[action.payload.index].inCart = true;
          break;
        }
        default:
          break;
      }
      return {
        ...state,
        grocery: grocery, pharmacy: pharmacy, electronic: electronic, food: food
      }
    }
    case MARK_REMOVE_FROM_CART: {
      const tempList: IProducts[] = [...state.grocery];
      tempList[0].productDetails.map<void>((value: IProduct) => {
        if (value.product.id === action.payload.id) {
          value.inCart = action.payload.value;
        }
      })
      return {...state, grocery: tempList}
    }
    default:
      return state;
  }
}

