import {categoryTypes} from "../types/types";
import all from "../assets/images/categories/all.webp";
import grocery from "../assets/images/categories/grocery.webp";
import pharmacy from "../assets/images/categories/pharmacy.webp";
import food from "../assets/images/categories/food.webp";
import electronic from "../assets/images/categories/electronic.webp";

export const CategoryList: categoryTypes[] = [
  {
    image: all,
    name: 'All',
    isActive: true
  },
  {
    image: grocery,
    name: 'Grocery',
    isActive: false
  },
  {
    image: pharmacy,
    name: 'Pharmacy',
    isActive: false
  },
  {
    image: food,
    name: 'Food',
    isActive: false
  },
  {
    image: electronic,
    name: 'Electronic',
    isActive: false
  }
];
