import { configureStore, ThunkAction, Action, applyMiddleware } from "@reduxjs/toolkit";
import cartReducer from "../features/cart";
import formReducer from "../features/checkout";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
