import {
  AddElectronics,
  AddFood,
  AddFruits,
  AddMeat,
  AddPharmacy,
  ImagePreSigned,
  MarkAddToCart,
  MarkRemoveFromCart
} from "../types/ProductActionTypes";
import {
  ADD_ELECTRONICS,
  ADD_FOOD,
  ADD_FRUITS,
  ADD_MEAT,
  ADD_PHARMACY,
  ADD_VEGETABLES,
  IMAGE_PRESIGNED,
  MARK_ADD_TO_CART,
  MARK_REMOVE_FROM_CART
} from "../constants/ProductConstants";
import {IProduct, IProducts, QueryItem, QueryItems} from "../../types/types";
import {Dispatch} from "redux";
import {RootState, store} from "../reducers/RootReducer";
import axios from "axios";

export const markAddToCart = (id: string): MarkAddToCart => {
  return {
    type: MARK_ADD_TO_CART,
    payload: {
      id: id
    }
  }
}

export const markRemoveFromCart = (id: string, value: boolean): MarkRemoveFromCart => {
  return {
    type: MARK_REMOVE_FROM_CART,
    payload: {
      id: id
    }
  }
}

export const imagePreSinged = (imageURL: string, productID: string): ImagePreSigned => {
  return {
    type: IMAGE_PRESIGNED,
    payload: {
      imageURL: imageURL,
      productID: productID
    }
  }
}

export const addVegetables = (inventory: IProducts[]) => {
  return {
    type: ADD_VEGETABLES,
    payload: inventory
  }
}

export const addFruits = (inventory: IProducts[]): AddFruits => {
  return {
    type: ADD_FRUITS,
    payload: inventory
  }
}

export const addPharmacy = (inventory: IProducts[]): AddPharmacy => {
  return {
    type: ADD_PHARMACY,
    payload: inventory
  }
}

export const addMeat = (inventory: IProducts[]): AddMeat => {
  return {
    type: ADD_MEAT,
    payload: inventory
  }
}

export const addFood = (inventory: IProducts[]): AddFood => {
  return {
    type: ADD_FOOD,
    payload: inventory
  }
}

export const addElectronic = (inventory: IProducts[]): AddElectronics => {
  return {
    type: ADD_ELECTRONICS,
    payload: inventory
  }
}

/**
 * check product in cart or not
 * @author Ovindu
 * @param product
 */
const checkInTheCart = (product: QueryItem): boolean => {
  const cartItemList = store.getState().cartReducer.cartList;
  if (!cartItemList || cartItemList.length === 0) {
    return false;
  }
  for (const iCheckoutProduct of cartItemList) {
    if (iCheckoutProduct.product.id === product._id) {
      return true;
    }
  }
  return false;
}

/**
 * In here if current state of the image not equal to the key, do not change the current state.
 * @author Ovindu
 * @param array
 * @param id
 * @param key
 */
const checkImage = (array: IProduct[], id: string, key: string): string => {
  for (const iProduct of array) {
    if (iProduct.product.id === id) {
      if (iProduct.product.image !== key) {
        return iProduct.product.image;
      }
    }
  }
  return key;
}

/**
 * In here create product list according the category from query data.
 * @author Ovindu
 * @param products
 * @param categoryName
 * @param currentState
 */
const createProductList = async (products: QueryItem[], categoryName: string, currentState: IProducts[]) => {
  const items: IProduct[] = [];
  products.map((item: QueryItem) => {
    items.push({
      inCart: checkInTheCart(item),
      product: {
        name: item.name,
        oldPrice: item.old_price,
        currentPrice: item.current_price,
        id: item._id,
        qty: item.qty,
        image: currentState[0] ? checkImage(currentState[0].productDetails, item._id, item.key) : item.key,
        key: item.key
      }
    });
  })
  const productData: IProducts[] = [{category: categoryName, productDetails: items}];
  return productData;
}

/**
 * This function is a redux thunk function. In here according to category name pass parameters to,
 * createProductList(params) and after receive that list to product data, dispatch the function.
 * @author Ovindu
 * @param data
 */
export const processQueryData = (data: QueryItems) => async (dispatch: Dispatch, getState: () => RootState) => {
  switch (data.category_name) {
    case "Fruits": {
      const productData = await createProductList(data.products, data.category_name, getState().productReducer.fruits);
      dispatch(addFruits(productData));
      break;
    }
    case "Electronics": {
      const productData = await createProductList(data.products, data.category_name, getState().productReducer.electronic);
      dispatch(addElectronic(productData));
      break;
    }
    case "Pharmacy": {
      const productData = await createProductList(data.products, data.category_name, getState().productReducer.pharmacy);
      dispatch(addPharmacy(productData));
      break;
    }
    case "Vegetables": {
      const productData = await createProductList(data.products, data.category_name, getState().productReducer.vegetables);
      dispatch(addVegetables(productData));
      break;
    }
    case "Food": {
      const productData = await createProductList(data.products, data.category_name, getState().productReducer.food);
      dispatch(addFood(productData));
      break;
    }
    case "Meat": {
      const productData = await createProductList(data.products, data.category_name, getState().productReducer.meat);
      dispatch(addMeat(productData));
      break;
    }
    default:
      break;
  }
}

/**
 * This is a redux thunk function. In here request preSigned url from the backend. After receive it dispatch the function.
 * @author Ovindu
 * @param key
 * @param productID
 */
export const getImagePreSignedUrls = (key: string, productID: string) => async (dispatch: Dispatch) => {
  const res = await axios.post('https://api.bitsandbytes.me/getImage', {key: key});
  dispatch(imagePreSinged(res.data, productID));
}


