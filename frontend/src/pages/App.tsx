import { FC, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/home";
import Speakers from "./category/speakers";
import Earphones from "./category/earphones";
import Headphones from "./category/headphones";
import ShoppingCart from "./cart";
import Productrender from "../pages/product";
import Checkout from "./checkout";
import { ICartAndCheckout } from "../type";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../redux/stores/hooks";
import { SET_CART_DB } from "../redux/features/cart";
import {
  CALCULATE_TAX,
  GET_CART_COUNT,
  GET_SHIPPING,
  GET_SUBTOTAL,
  GET_TOTAL_AMOUNT,
} from "../redux/features/cart";
const App: FC<ICartAndCheckout> = () => {
  const dispatch = useAppDispatch();
  const getItemInDb = window.localStorage.getItem("userCart");
  useEffect(() => {
     const itemInDb = getItemInDb ? JSON.parse(getItemInDb) : [];
    
     dispatch(SET_CART_DB(itemInDb));
    dispatch(GET_CART_COUNT());
    dispatch(GET_TOTAL_AMOUNT());
    dispatch(GET_SHIPPING());
    dispatch(GET_SUBTOTAL());
    dispatch(CALCULATE_TAX());
  }, [dispatch, getItemInDb]);

  return (
    <StyleApp>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/product/:id" element={<Productrender />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <button onClick={() => window.scrollTo(0, 0)}>Anthony</button>
    </StyleApp>
  );
};

export default App;

const StyleApp = styled.div`
  button {
    scroll: smooth;
  }
`;
