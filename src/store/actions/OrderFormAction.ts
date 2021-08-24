import {
  AddDeliveryFormDetailsType,
  AddShoppingFormDetailsType,
  DeleteOrderFormDetailsType
} from "../types/OrderFormActionTypes";
import {
  ADD_DELIVERY_FORM_DETAILS,
  ADD_SHIPPING_FORM_DETAILS,
  DELETE_ORDER_FORM_DETAILS
} from "../constants/OrderFormConstants";
import {DeliveryFormType, ShippingFormType} from "../../types/types";

export const addDeliveryFormDetails = (deliveryDetails: DeliveryFormType): AddDeliveryFormDetailsType => {
  return {
    type: ADD_DELIVERY_FORM_DETAILS,
    payload: deliveryDetails
  }
}

export const addShoppingFormDetails = (shoppingDetails: ShippingFormType | null): AddShoppingFormDetailsType => {
  return {
    type: ADD_SHIPPING_FORM_DETAILS,
    payload: shoppingDetails
  }
}

export const deleteOrderFormDetails = (): DeleteOrderFormDetailsType => {
  return {
    type: DELETE_ORDER_FORM_DETAILS,
    payload: null
  }
}
