import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../features/cart";
import formReducer from "../features/checkout";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
