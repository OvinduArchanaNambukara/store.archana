import {AdminCategoryOptionType, categoryTypes} from "../types/types";
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

export const categoryOptions: AdminCategoryOptionType[] = [
  {
    label: 'Vegetables',
    value: 'VEGETABLES',
    s3Path: 'vegetable',
    color: '#ffc107'
  },

  {
    label: 'Meat',
    value: 'MEAT',
    s3Path: 'meat',
    color: '#17a2b8'
  },

  {
    label: 'Fruits',
    value: 'FRUITS',
    s3Path: 'fruits',
    color: '#28a745'
  },

  {
    label: 'Electronics',
    value: 'ELECTRONICS',
    s3Path: 'electronic',
    color: '#dc3545'
  },

  {
    label: 'Pharmacy',
    value: 'PHARMACY',
    s3Path: 'phamasy',
    color: '#343a40'
  },

  {
    label: 'Foods',
    value: 'FOODS',
    s3Path: 'food',
    color: '#007bff'
  }
];

export const perOptions = [
  {
    label: "Kilograms(Kg)",
    value: "Kg"
  },
  {
    label: "Grams(g)",
    value: "g"
  },
  {
    label: "Numeric(num)",
    value: "num"
  }
];
