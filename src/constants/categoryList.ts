import {categoryTypes} from "../types/types";
import all from "../assets/images/categories/all.webp";
import grocery from "../assets/images/categories/grocery.webp";
import pharmacy from "../assets/images/categories/pharmacy.webp";
import food from "../assets/images/categories/food.webp";
import electronic from "../assets/images/categories/electronic.webp";

export const CategoryList: categoryTypes[] = [
  {
    image: all,
    name: 'All'
  },
  {
    image: grocery,
    name: 'Grocery'
  },
  {
    image: pharmacy,
    name: 'Pharmacy'
  },
  {
    image: food,
    name: 'Food'
  },
  {
    image: electronic,
    name: 'Electronic'
  }
];
