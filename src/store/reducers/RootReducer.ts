import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {CartReducer} from "./CartReducer";
import {ProductReducer} from "./ProductReducer";
import {StatusReducer} from "./StatusReducer";
import {CategoriesReducer} from "./CategoriesReducer";
import {CallReducer} from "./CallReducer";
import {AdminReducer} from "./AdminReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  productReducer: ProductReducer,
  cartReducer: CartReducer,
  statusReducer: StatusReducer,
  categoriesReducer: CategoriesReducer,
  callReducer: CallReducer,
  adminReducer: AdminReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
