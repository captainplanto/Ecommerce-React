import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm } from "../../type";
import { RootState } from "../stores/store";

const initialState: IForm = {
  name: "",
  email: "",
  number: parseInt(''),
  address: "",
  zipCode: parseInt(''),
  region: "",
  country: "",
  
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    CHANGE_NAME: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.name = action.payload.target.value;
    },

    CHANGE_EMAIL: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.email = action.payload.target.value;
    },

    CHANGE_NUMBER: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.number = parseInt(action.payload.target.value);
    },

    CHANGE_ADDRESS: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.address = action.payload.target.value;
    },

    CHANGE_ZIPCODE: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.zipCode = parseInt(action.payload.target.value);
    },

    CHANGE_REGION: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },

    CHANGE_COUNTRY: (
      state,
      action: PayloadAction<string>
      //   React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      state.country = action.payload;
    },
  },
});

export const {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_NUMBER,
  CHANGE_ADDRESS,
  CHANGE_COUNTRY,
  CHANGE_REGION,
  CHANGE_ZIPCODE,
} = formSlice.actions;

export const form = (state: RootState) => state.form;
export default formSlice.reducer;
