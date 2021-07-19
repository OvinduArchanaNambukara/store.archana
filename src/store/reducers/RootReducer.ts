import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {CartReducer} from "./CartReducer";
import {ProductReducer} from "./ProductReducer";
import {StatusReducer} from "./StatusReducer";
import {CategoriesReducer} from "./CategoriesReducer";

export const rootReducer = combineReducers({
  productReducer: ProductReducer,
  cartReducer: CartReducer,
  statusReducer: StatusReducer,
  categoriesReducer: CategoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools())
