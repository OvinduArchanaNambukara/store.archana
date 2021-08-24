import {
  ADD_DELIVERY_FORM_DETAILS,
  ADD_SHIPPING_FORM_DETAILS,
  DELETE_ORDER_FORM_DETAILS
} from "../constants/OrderFormConstants";
import {DeliveryFormType, ShippingFormType} from "../../types/types";

export interface AddDeliveryFormDetailsType {
  type: typeof ADD_DELIVERY_FORM_DETAILS
  payload: DeliveryFormType
}

export interface AddShoppingFormDetailsType {
  type: typeof ADD_SHIPPING_FORM_DETAILS
  payload: ShippingFormType | null
}

export interface DeleteOrderFormDetailsType {
  type: typeof DELETE_ORDER_FORM_DETAILS
  payload: null
}

export type OrderActionType = AddDeliveryFormDetailsType | DeleteOrderFormDetailsType | AddShoppingFormDetailsType;
