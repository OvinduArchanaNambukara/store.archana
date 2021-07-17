import {IProduct, IProducts} from "../types/types";
import Blender from "../assets/images/products/electronic/blender.webp";
import CofeeMaker from "../assets/images/products/electronic/cofee maker.webp";
import iron from "../assets/images/products/electronic/iron.webp";
import macbook from "../assets/images/products/electronic/macbook.webp";
import microwave from "../assets/images/products/electronic/microwave.webp";
import refregirator from "../assets/images/products/electronic/refregirator.webp";
import mobile from "../assets/images/products/electronic/mobile.webp";

export const electronicList: IProduct[] = [
  {
    product: {id: "0501", name: "Blender", image: Blender, currentPrice: 75, oldPrice: 85},
    inCart: false
  }, {
    product: {id: "0502", name: "Coffee-Maker", image: CofeeMaker, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0503", name: "Iron", image: iron, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0504", name: "Note 10+", image: mobile, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0505", name: "Mac Book", image: macbook, currentPrice: 35, oldPrice: 45},
    inCart: false
  }, {
    product: {id: "0506", name: "Microwave", image: microwave, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0507", name: "Refrigerators", image: refregirator, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
];

export const ElectronicProducts: IProducts =
    {
      category: "Electronic",
      productDetails: electronicList
    }

