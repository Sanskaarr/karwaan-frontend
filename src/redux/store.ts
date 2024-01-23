import { configureStore } from "@reduxjs/toolkit";
import userRequestReducer from "./reducers/userRequestReducer";
import userReducer from "./reducers/userReducer";
import ProductReducer from "./reducers/ProductReducer";
import ProductReqestReducer from "./reducers/ProductReqestReducer";
import AddressReducer from "./reducers/AddressReducer";
import AddressReqestReducer from "./reducers/AddressReqestReducer";

export const store = configureStore({
  reducer: {
    userRequest: userRequestReducer,
    user: userReducer,
    product: ProductReducer,
    productRequest: ProductReqestReducer,
    address: AddressReducer,
    addressRequest: AddressReqestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
