import { configureStore } from "@reduxjs/toolkit";
import userRequestReducer from "./reducers/userRequestReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    userRequest: userRequestReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
