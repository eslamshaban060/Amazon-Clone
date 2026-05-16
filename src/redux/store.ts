import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import listReducer from "./slices/listSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  list: listReducer,
  cart: cartReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// For client-side usage (only used in non-SSR contexts)
const store = makeStore();
export default store;
