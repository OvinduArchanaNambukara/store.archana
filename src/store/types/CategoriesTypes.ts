import {CHANGE_CATEGORY} from "../constants/CategoriesConstants";


export interface ChangeCategory {
  type: typeof CHANGE_CATEGORY
  payload: {
    categoryName: string
  }
}

export type CategoryTypes = ChangeCategory;
