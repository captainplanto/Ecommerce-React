import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../stores/store";
import { ICartDetails } from "../../type";
import { start } from "repl";

const initialState: ICartDetails = {
  cartItem: [],
  count: 1,
  open: false,
  thankYou: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<any>) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItem = [...state.cartItem, action.payload];
      } else if (existingItem) {
        console.log("item in cart already");
      }
    },

    REMOVE_FROM_CART: (state, action: PayloadAction<number>) => {
      const removeItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.cartItem = removeItem;
    },

    RESET_CART_PAGE: (state) => {
      state.cartItem = [];
    },

    DECREASE_QTY: (state, action: PayloadAction<number>) => {
      const findProduct = state.cartItem.findIndex((item) => item.id === action.payload);
    //state.cartItem=[...state.cartItem, findProduct];
     console.log(findProduct)
      if (state.cartItem[findProduct]) {
        if (state.count > 1) {
          state.count = state.count - 1;
        }
      }
    },

    INCREASE_QTY: (state, action: PayloadAction<number>) => {
      const findProduct = state.cartItem.findIndex((item) => item.id === action.payload);
      console.log(findProduct)
      if(state.cartItem[findProduct]){
      state.count = state.count + 1;
       } else if(!state.cartItem[findProduct]){
         console.log('item doesnt match')
       }
    },

    OPEN_CART: (state) => {
      if (state.cartItem.length > 0) {
        state.open = !state.open;
      }
    },
    CLOSE_CART: (state) => {
      state.open = false;
    },

    OPEN_THANK_YOU_PAGE: (state) => {
      state.thankYou = !state.thankYou;
    },

    EMPTY_CART_AFTER_PAYMENT: (state) => {
      state.cartItem = [];
      state.count = 0;
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  RESET_CART_PAGE,
  OPEN_CART,
  CLOSE_CART,
  OPEN_THANK_YOU_PAGE,
  EMPTY_CART_AFTER_PAYMENT,
} = cartSlice.actions;

export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;
