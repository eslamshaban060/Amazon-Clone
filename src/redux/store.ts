import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import listReducer from "./slices/listSlice";
import cartReducer from "./slices/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productReducer,
      auth: authReducer,
      list: listReducer,
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// For client-side usage
const store = makeStore();
export default store;
