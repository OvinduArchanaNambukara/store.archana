export interface categoryTypes {
  image: string
  name: string
}

export interface searchOptionTypes {
  label: string
  value: string
}

export interface dataProductType {
  id: number
  item: JSX.Element
  name: string
  qty: JSX.Element
  unitPrice: JSX.Element
  amount: JSX.Element
  deleteIcon: JSX.Element
}

export interface IProducts {
  category: string
  productDetails: IProduct[]
}

export interface Item {
  id: string
  name: string
  image: string
  currentPrice: number
  oldPrice: number | null
}

export interface IProduct {
  product: Item,
  inCart: boolean
}

export interface ICheckoutProduct {
  quantity: number
  product: Item
}

export interface countryOptionTypes {
  label: string
  name: string
  value: string
  flag: string
  code: string
}

export interface categoryTypes {
  image: string
  name: string
}

export interface categoryTypes {
  image: string
  name: string
}

export interface IProducts {
  category: string
  productDetails: IProduct[]
}

export interface Item {
  id: string
  name: string
  image: string
  currentPrice: number
  oldPrice: number | null
  qty: string
  key: string
}

export interface IProduct {
  product: Item,
  inCart: boolean
}

export interface ICheckoutProduct {
  quantity: number
  product: Item
}

export interface IOrderDetails {
  orderId: string,
  total: number,
  date: string
}

export interface QueryItem {
  _id: string
  current_price: number
  old_price: number
  key: string
  name: string
  qty: string
}

export interface QueryItems {
  category_name: string
  products: QueryItem[]
}

export interface GetFoodProducts {
  getFoodProducts: QueryItems
}

export interface GetElectronicProducts {
  getElectronicProducts: QueryItems
}

export interface GetVegetableProducts {
  getVegetableProducts: QueryItems
}

export interface GetMeatProducts {
  getMeatProducts: QueryItems
}

export interface GetFruitProducts {
  getFruitProducts: QueryItems
}

export interface GetPharmacyProducts {
  getPharmacyProducts: QueryItems
}


export interface AdminProductTableListType {
  item: JSX.Element
  oldPrice: JSX.Element
  name: string
  currentPrice: JSX.Element
  id: JSX.Element
  category: JSX.Element
  actions: JSX.Element
}

export interface AdminCategoryOptionType {
  label: string
  value: string
  s3Path: string
  color: string
}

export interface DeliveryFormType {
  fullName: string
  address: string
  city: string
  postalCode: string
  country: string
  countryCode: string
  contactNo: string
  email: string
  payment_method: string
  deliveryInstructions: string
  password: string
  retypeEmail: string
  checkButton: boolean
}

export interface ShippingFormType {
  name: string
  address: string
  city: string
  postalCode: string
  country: string
  countryCode: string
  contactNumber: string
}

export interface OrderType {
  date: string
  discount: number
  order_list: OrderProductListType[]
  payment_method: string
  sub_total: number,
  delivery: OrderDeliveryType
  shipping: OrderShippingType
}

export interface OrderDeliveryType {
  full_name: string
  country: string
  city: string
  postal_code: number
  address: string
  email: string
  tel: string
  instructions: string
}

export interface OrderShippingType {
  city: string
  country: string
  address: string
  postal_code: number
  full_name: string
  tel: string
}

export interface OrderProductListType {
  _id: string
  name: string
  unit_price: string
  qty: string
  price: number
}

