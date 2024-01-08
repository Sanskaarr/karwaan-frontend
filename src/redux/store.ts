import { configureStore } from "@reduxjs/toolkit";
import userRequestReducer from "./reducers/userRequestReducer";
import userReducer from "./reducers/userReducer";
import ProductReducer from "./reducers/ProductReducer";
import ProductReqestReducer from "./reducers/ProductReqestReducer";

export const store = configureStore({
  reducer: {
    userRequest: userRequestReducer,
    user: userReducer,
    product: ProductReducer,
    productRequest: ProductReqestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
