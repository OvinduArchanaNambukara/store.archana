import {ChangeCategory} from "../types/CategoriesTypes";
import {CHANGE_CATEGORY} from "../constants/CategoriesConstants";

export const changeCategory = (categoryName: string): ChangeCategory => {
  return {
    type: CHANGE_CATEGORY,
    payload: {
      categoryName: categoryName,
    }
  }
}
