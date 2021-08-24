import {DeliveryFormType, ShippingFormType} from "../../types/types";
import {OrderActionType} from "../types/OrderFormActionTypes";
import {
  ADD_DELIVERY_FORM_DETAILS,
  ADD_SHIPPING_FORM_DETAILS,
  DELETE_ORDER_FORM_DETAILS
} from "../constants/OrderFormConstants";

const initialState: storeTypes = {
  deliveryForm: null,
  shippingForm: null
}

interface storeTypes {
  deliveryForm: DeliveryFormType | null
  shippingForm: ShippingFormType | null
}

export const OrderFormReducer = (state: storeTypes = initialState, action: OrderActionType) => {
  switch (action.type) {
    case ADD_DELIVERY_FORM_DETAILS: {
      return {
        ...state,
        deliveryForm: action.payload
      };
    }
    case ADD_SHIPPING_FORM_DETAILS: {
      return {
        ...state,
        shippingForm: action.payload
      }
    }
    case DELETE_ORDER_FORM_DETAILS: {
      return {
        ...state,
        shippingForm: null, deliveryForm: null
      };
    }
    default: {
      return state;
    }
  }
}
