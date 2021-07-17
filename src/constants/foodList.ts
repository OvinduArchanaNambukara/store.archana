import {IProduct, IProducts} from "../types/types";
import burger from "../assets/images/products/food/burger.webp";
import cake from "../assets/images/products/food/cake.webp";
import iceCream from "../assets/images/products/food/Cone.webp";
import cupCake from "../assets/images/products/food/cupcake.webp";
import pie from "../assets/images/products/food/pie.webp";
import pizza from "../assets/images/products/food/pizza.webp";
import rice from "../assets/images/products/food/Rice.webp";

export const FoodList: IProduct[] = [
  {
    product: {id: "0101", name: "Burger", image: burger, currentPrice: 75, oldPrice: 85},
    inCart: false
  }, {
    product: {id: "0102", name: "Cake", image: cake, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0103", name: "Ice-Cream", image: iceCream, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0104", name: "Cup Cake", image: cupCake, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0105", name: "Pie", image: pie, currentPrice: 35, oldPrice: 45},
    inCart: false
  }, {
    product: {id: "0106", name: "Pizza", image: pizza, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0007", name: "Rice", image: rice, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
];

export const FoodProducts: IProducts =
    {
      category: "Food",
      productDetails: FoodList
    }

