import {IProduct, IProducts} from "../types/types";
import cottonWood from "../assets/images/phamasy/cotton.webp";
import asamodagam from "../assets/images/phamasy/asamodagam.webp";
import K95 from "../assets/images/phamasy/k95.webp";
import panadol from "../assets/images/phamasy/panadol.webp";
import piriton from "../assets/images/phamasy/piriton.webp";
import plaster from "../assets/images/phamasy/plaster.webp";
import sanitizer from "../assets/images/phamasy/sanitizer.webp";
import sidalepa from "../assets/images/phamasy/sidalepa.webp";


export const pharmacyList: IProduct[] = [
  {
    product: {id: "0041", name: "Cotton-Wood", image: cottonWood, currentPrice: 75, oldPrice: 85},
    inCart: false
  }, {
    product: {id: "0042", name: "K95-Mask", image: K95, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0043", name: "Piriton", image: piriton, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0044", name: "Plaster", image: plaster, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0045", name: "Asamodagam", image: asamodagam, currentPrice: 35, oldPrice: 45},
    inCart: false
  }, {
    product: {id: "0442", name: "Panadol", image: panadol, currentPrice: 35, oldPrice: null},
    inCart: false
  },
  {
    product: {id: "0443", name: "Sidalepa", image: sidalepa, currentPrice: 35, oldPrice: 45},
    inCart: false
  },
  {
    product: {id: "0444", name: "Sanitizer", image: sanitizer, currentPrice: 35, oldPrice: null},
    inCart: false
  },
];

export const PharmacyProducts: IProducts = {
  category: "Pharmacy",
  productDetails: pharmacyList
}
