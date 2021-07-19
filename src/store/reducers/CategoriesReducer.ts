import {categoryTypes} from "../../types/types";
import {CategoryList} from "../../constants/categoryList";
import {CategoryTypes} from "../types/CategoriesTypes";
import {CHANGE_CATEGORY} from "../constants/CategoriesConstants";

const initialState: storeType = {
  categories: CategoryList
}

interface storeType {
  categories: categoryTypes[]
}

export const CategoriesReducer = (state: storeType = initialState, action: CategoryTypes) => {
  switch (action.type) {
    case CHANGE_CATEGORY: {
      const categoryList: categoryTypes[] = state.categories.slice();
      categoryList.map((category: categoryTypes) => {
        if (category.name === action.payload.categoryName) {
          category.isActive = true;
        } else {
          category.isActive = false;
        }
      })
      return {
        ...state,
        categories: categoryList
      }
    }
    default:
      return state
  }
}
