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
