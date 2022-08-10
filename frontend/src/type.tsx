import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface IData {
  count: number;
  quantity: number;
  category: string;
  image: any;
  id: number;
  slug: string;
  features: string;
  description: string;
  name: string;
  price: number;
  new: boolean;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; desktop: string; tablet: string };
    id: number;
  }[];
}

//This below type has been used for checkout.tsx file. You can navigate to the link via /pages/checkout.tsx
export interface IForm {
  name: string;
  email: string;
  number: number;
  address: string;
  zipCode: number;
  region: string;
  country: string;
}

//This type below  has been used for CheckoutInputComponent.tsx file. You can navigate to the link via the common componentfolder inside src folder;
export interface ICheckoutForm {
  type?: HTMLInputTypeAttribute;
  style?: object;
  border?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: any;
  width?: string;
  outline?: string;
  borderRadius?: number;
  placeholder: string;
  name?: string;
  onSubmit?: () => void;
}

//This type below  has been used for Checkout.tsx  page file and the cartPage file. You can navigate to the link via the pages folderinside src folder;

export interface ICart {
  id: number;
  name: string;
  price: number;
  image: { desktop: string };
  quantity: number;
}

//This type below  was used because we had to calculate the totalPrice which was used on two different pages, instead of copying codes, the calculation was done in App.tsx and pass down as props to cart.tsx and checkout.tsx.

export interface ICartAndCheckout {
  totalPrice?: number;
  totalShipping?: number;
  totalVAT?: number;
  grandTotal?: number;
  openModal?: boolean;
  setOpenModal?: (arg: boolean) => void;
     stepUp?:()=>void;
    stepDown?:()=>void;
    cartCount?:number;
}

//This type below  was used in CartSLICE, It's the types that holds the carSlice state. navigate to cart.tsx slice in redux store to see how it's used.
export interface ICartDetails extends SimpleDialogProps {
  cartItem: {
    id: number;
    image: { desktop: string };
    price: number;
    name: string;
    quantity: number;
  }[];
  thankYou: boolean;
  count: number;
  newCart: {
    id: number;
    image: { desktop: string };
    price: number;
    name: string;
    quantity: number;
  }[];
  deletedItem: [];









}

// Interface for MarginBottom settings for components rendered in collection components
export interface IStyle {
  style?: object;
}

export interface SimpleDialogProps {
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
  children?: ReactNode;
  style?: object;
}
