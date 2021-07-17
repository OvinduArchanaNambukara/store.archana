import {IProduct, IProducts} from "../types/types";
import CarrotImg from "../assets/images/products/vegetable/carrot.jpg";
import CabbageImg from "../assets/images/products/vegetable/cabbage.jpg";
import EggplantImg from "../assets/images/products/vegetable/eggplant.jpg";
import GarlicImg from "../assets/images/products/vegetable/garlic.jpg";
import LeaksImg from "../assets/images/products/vegetable/leaks.jpg";
import OnionImg from "../assets/images/products/vegetable/onion.jpg";
import PotatoImg from "../assets/images/products/vegetable/potato.jpg";

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



