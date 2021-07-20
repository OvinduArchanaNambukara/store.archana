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
      return state
    }
    default:
      return state
  }
}
