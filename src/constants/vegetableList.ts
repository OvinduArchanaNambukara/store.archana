import {IProduct, IProducts} from "../types/types";
import CarrotImg from "../assets/images/products/vegetable/carrot.webp";
import CabbageImg from "../assets/images/products/vegetable/cabbage.webp";
import EggplantImg from "../assets/images/products/vegetable/egg plant.webp";
import GarlicImg from "../assets/images/products/vegetable/garlic.webp";
import LeaksImg from "../assets/images/products/vegetable/leaks.webp";
import OnionImg from "../assets/images/products/vegetable/onion.webp";
import PotatoImg from "../assets/images/products/vegetable/potato.webp";

export const vegetableList: IProduct[] = [
  {
    product: {id: "0001", name: "Carrot", image: CarrotImg, currentPrice: 75, oldPrice: 85},
    inCart: false
  }, {
    product: {id: "0002", name: "Cabbage", image: CabbageImg, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0003", name: "Garlic", image: GarlicImg, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0004", name: "Leaks", image: LeaksImg, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0005", name: "Onion", image: OnionImg, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0006", name: "Potato", image: PotatoImg, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0007", name: "Egg Plant", image: EggplantImg, currentPrice: 75, oldPrice: 85},
    inCart: false
  },
];

export const VegetableProducts: IProducts =
    {
      category: "Vegetables",
      productDetails: vegetableList
    }



