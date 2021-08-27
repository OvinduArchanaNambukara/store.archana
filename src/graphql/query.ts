import {gql} from "@apollo/client";

export const GET_VEGETABLES = gql`
   query{
    getVegetableProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        key
        qty
      }
    }
  }
`;

export const GET_FRUITS = gql`
   query{
    getFruitProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        key
        qty
      }
    }
  }
`;

export const GET_MEAT = gql`
   query{
    getMeatProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        key
        qty
      }
    }
  }
`;

export const GET_PHARMACY = gql`
   query{
    getPharmacyProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        key
        qty
      }
    }
  }
`;

export const GET_FOOD = gql`
   query{
    getFoodProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        key
        qty
      }
    }
  }
`;

export const GET_ELECTRONICS = gql`
   query{
    getElectronicProducts {
      category_name
      products {
        _id
        current_price
        old_price
        name
        key
        qty
      }
    }
  }
`;

export const GET_ALL_PENDING_ORDERS = gql`
  query{
    getAllPendingOrders {
      _id
      user_id
      date
      discount
      sub_total
      payment_method
      status
      order_list {
        _id
        name
        unit_price
        qty
        price
      }
      delivery {
        address
        full_name
        city
        country
        postal_code
        email
        tel
      }
      shipping {
        address
        full_name
        city
        country
        postal_code
        instructions
        tel
      }
    }
  }
`;

export const GET_ALL_COMPLETED_ORDERS = gql`
  query{
    getAllCompletedOrders {
      _id
      user_id
      date
      discount
      sub_total
      payment_method
      status
      order_list {
        _id
        name
        unit_price
        qty
        price
      }
      delivery {
        address
        full_name
        city
        country
        postal_code
        email
        tel
      }
      shipping {
        address
        full_name
        city
        country
        postal_code
        instructions
        tel
      }
    }
  }
`;

export const GET_USER_PENDING_ORDERS = gql`
  query Query {
    getUserPendingOrders {
      _id
      user_id
      date
      discount
      sub_total
      payment_method
      status
      order_list {
        _id
        name
        unit_price
        qty
        price
      }
      delivery {
        address
        full_name
        city
        country
        postal_code
        email
        tel
      }
      shipping {
        address
        full_name
        city
        country
        postal_code
        instructions
        tel
      }
    }
  }
`;

export const GET_USER_COMPLETE_ORDERS = gql`
  query Query {
    getUserCompletedOrders {
      _id
      user_id
      date
      discount
      sub_total
      payment_method
      status
      order_list {
        _id
        name
        unit_price
        qty
        price
      }
      delivery {
        address
        full_name
        city
        country
        postal_code
        email
        tel
      }
      shipping {
        address
        full_name
        city
        country
        postal_code
        instructions
        tel
      }
    }
  }
`;

