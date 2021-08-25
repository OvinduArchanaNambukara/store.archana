import {gql} from "@apollo/client";

export const ADD_PRODUCT = gql`
   mutation($name: String!, $image: String!, $currentPrice: Int!, $key: String!, $qty: String!, $category: String!, $old_price: Int) {
    addProduct(name: $name, image: $image, current_price: $currentPrice, key: $key, qty: $qty, category: $category, old_price: $old_price) {
    _id
    }
  }
`;

export const SIGN_IN = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const SIGN_UP = gql`
  mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signUp(email: $email, password: $password, first_name: $firstName, last_name: $lastName)
  }
`;

export const ADD_ORDER = gql`
  mutation($order: CreateOrder!) {
    createOrder(order: $order) {
      _id
    } 
  }
`;
