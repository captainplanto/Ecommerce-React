import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/store";
import { ICartDetails } from "../../type";
import { toast } from "react-toastify";
const initialState: ICartDetails = {
  cartItem: [],
  subAmount: 0,
  totalCount: 0,
  totalAmount: 0,
  shipping: 0,
  tax: 0,
  open: false,
  thankYou: false,
  deletedItem: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<any>) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        toast.error("item in cart already");
      } else {
        state.cartItem = [...state.cartItem, action.payload];
        const carts = state.cartItem;
        window.localStorage.setItem("userCart", JSON.stringify(carts));
      }
    },

    SET_CART_DB: (state, action: PayloadAction<any>) => {
      state.cartItem = action.payload;
    },

    REMOVE_FROM_CART: (state, action: PayloadAction<number>) => {
      const removeItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.cartItem = removeItem;
      window.localStorage.setItem("userCart", JSON.stringify(removeItem));
    },

    RESET_CART_PAGE: (state) => {
      state.cartItem = [];
      window.localStorage.removeItem("userCart");
    },
    INCREASE_QTY: (state, action: PayloadAction<number>) => {
      let index = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItem[index].unit++;
    },

    DECREASE_QTY: (state, action: PayloadAction<number>) => {
      let index = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItem[index].unit === 1) {
        state.cartItem[index].unit = 1;
      } else {
        state.cartItem[index].unit--;
      }
    },

    GET_CART_COUNT: (state) => {
      let cartCount = state.cartItem.reduce((total, item) => {
        return item.unit + total;
      }, 0);
      state.totalCount = cartCount;
    },

    GET_SUBTOTAL: (state) => {
      state.subAmount = state.cartItem.reduce((acc, item) => {
        return acc + item.price * item.unit;
      }, 0);
    },
    CALCULATE_TAX: (state) => {
      let totalTax = (18 / 100) * state.subAmount;
      state.tax = totalTax;
    },
    GET_SHIPPING: (state) => {
      let totalShipping = (25 / 100) * state.subAmount;
      state.shipping = totalShipping;
    },

    GET_TOTAL_AMOUNT: (state) => {
      state.totalAmount = state.subAmount;
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
      window.localStorage.removeItem("userCart");
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  CALCULATE_TAX,
  GET_TOTAL_AMOUNT,
  GET_SUBTOTAL,
  GET_CART_COUNT,
  RESET_CART_PAGE,
  OPEN_CART,
  CLOSE_CART,
  SET_CART_DB,
  GET_SHIPPING,
  OPEN_THANK_YOU_PAGE,
  EMPTY_CART_AFTER_PAYMENT,
} = cartSlice.actions;

export const cart = (state: AppState) => state.cart;

export default cartSlice.reducer;

/*

        const getItemInDb = window.localStorage.getItem("userCart");
        const itemInDb = getItemInDb ? JSON.parse(getItemInDb) : "";
        state.cartItem = itemInDb;



*/
