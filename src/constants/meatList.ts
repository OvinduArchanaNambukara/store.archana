import {IProduct, IProducts} from "../types/types";
import bairaha from "../assets/images/meat/bairaha.webp";
import chickendramstick from "../assets/images/meat/chickendrumstick.webp";
import chickenwings from "../assets/images/meat/chickenwings.webp";
import hurulla from "../assets/images/meat/hurulla.webp";
import linna from "../assets/images/meat/linna.webp";
import paraw from "../assets/images/meat/paraw.webp";
import prawns from "../assets/images/meat/prawns.webp";
import tuna from "../assets/images/meat/tuna.webp";

export const meatList: IProduct[] = [
  {
    product: {id: "0061", name: "Bairaha", image: bairaha, currentPrice: 75, oldPrice: 85},
    inCart: false
  }, {
    product: {id: "0062", name: "Chicken", image: chickendramstick, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0063", name: "Wings", image: chickenwings, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0064", name: "Hurulla", image: hurulla, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0065", name: "Linna", image: linna, currentPrice: 35, oldPrice: 45},
    inCart: false
  }, {
    product: {id: "0082", name: "Prawns", image: prawns, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0083", name: "Paraw", image: paraw, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0084", name: "Tuna", image: tuna, currentPrice: 35, oldPrice: null},
    inCart: false
  },
];

export const MeatProducts: IProducts =
    {
      category: "Meat",
      productDetails: meatList
    }

