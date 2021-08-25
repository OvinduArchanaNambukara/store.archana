import {
  DeliveryFormType,
  ICheckoutProduct,
  OrderDeliveryType,
  OrderProductListType,
  OrderShippingType,
  OrderType,
  ShippingFormType
} from "../types/types";

const createOrderItemList = (cartList: ICheckoutProduct[]): OrderProductListType[] => {
  const orderList: OrderProductListType[] = cartList.map((item: ICheckoutProduct) => {
    return {
      _id: item.product.id,
      name: item.product.name,
      unit_price: item.product.currentPrice.toString() + item.product.qty,
      qty: item.quantity.toString() + item.product.qty,
      price: item.quantity * item.product.currentPrice
    }
  });
  return orderList;
}

const createDeliveryInfo = (deliveryDetails: DeliveryFormType): OrderDeliveryType => {
  return {
    full_name: deliveryDetails.fullName,
    country: deliveryDetails.country,
    city: deliveryDetails.city,
    postal_code: deliveryDetails.postalCode,
    address: deliveryDetails.address,
    email: deliveryDetails.email,
    tel: deliveryDetails.countryCode + deliveryDetails.contactNo,
    instructions: deliveryDetails.deliveryInstructions
  }
}

const createShippingInfo = (shippingDetails: ShippingFormType): OrderShippingType => {
  return {
    full_name: shippingDetails.name,
    address: shippingDetails.address,
    postal_code: shippingDetails.postalCode,
    tel: shippingDetails.countryCode + shippingDetails.contactNumber,
    country: shippingDetails.country,
    city: shippingDetails.city
  }
}

const createShippingInfoDelivery = (deliveryDetails: DeliveryFormType): OrderShippingType => {
  return {
    full_name: deliveryDetails.fullName,
    address: deliveryDetails.address,
    postal_code: deliveryDetails.postalCode,
    tel: deliveryDetails.countryCode + deliveryDetails.contactNo,
    country: deliveryDetails.country,
    city: deliveryDetails.city
  }
}

export const processOrderDetails = (deliveryDetails: DeliveryFormType, shippingDetails: ShippingFormType | null,
                                    cartList: ICheckoutProduct[], isShipping: boolean | null, subtotal: number): OrderType => {
  if (isShipping && shippingDetails) {
    return {
      order_list: createOrderItemList(cartList),
      date: new Date().toString(),
      discount: 45,
      payment_method: deliveryDetails.payment_method,
      sub_total: subtotal,
      delivery: createDeliveryInfo(deliveryDetails),
      shipping: createShippingInfo(shippingDetails)
    }
  } else {
    return {
      order_list: createOrderItemList(cartList),
      date: new Date().toString(),
      discount: 45,
      payment_method: deliveryDetails.payment_method,
      sub_total: subtotal,
      delivery: createDeliveryInfo(deliveryDetails),
      shipping: createShippingInfoDelivery(deliveryDetails)
    }
  }
}
