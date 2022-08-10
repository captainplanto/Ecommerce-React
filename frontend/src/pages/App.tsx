import React, { FC, useEffect, useState } from "react";
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
import { useAppSelector } from "../redux/stores/hooks";

const App: FC<ICartAndCheckout> = () => {
  const cartQty = useAppSelector((state) => state.cart);
 /* const [totalPrice, setTotalPrice] = useState<number>();
  const [totalShipping, setTotalShipping] = useState<number>();
  const [totalVAT, setTotalVAT] = useState<number>();
  const [grandTotal, setGrandTotal] = useState<number>();

  useEffect(() => {
    //the function below calculates the total price at cart.tsx and was used at checkout.tsx as well.
    const addition = (acc: number, currentValue: { price: number }) => {
      return acc + currentValue.price * cartQty.count;
    };
    setTotalPrice(cartQty.cartItem.reduce(addition, 0));
      
    //the function below calculates the shipping price at checkout.tsx the shipping === 2% of the totalPrice of goods.
    if (totalPrice !== undefined) {
      const shipping = parseInt(((totalPrice / 100) * 2).toFixed(2));
      setTotalShipping(shipping);
    }
    //the function below calculates the Vat price at checkout.tsx, the VAT=== 5% of the totalPrice of goods.
    if (totalPrice !== undefined) {
      const vat = parseInt(((totalPrice / 100) * 5).toFixed(2));
      setTotalVAT(vat);
    }
    if (
      totalPrice !== undefined &&
      totalShipping !== undefined &&
      totalVAT !== undefined
    ) {
      const grandPrice = totalPrice + totalShipping + totalVAT;
      setGrandTotal(grandPrice);
    }
  }, [cartQty.cartItem, cartQty.count, totalPrice, totalShipping, totalVAT]);
  //const scrollToTop =window.scrollBy(0, 0)
  */
  return (
    <StyleApp>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/product/:id" element={<Productrender />} />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                           
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
              //  totalPrice={totalPrice}
               //// totalShipping={totalShipping}
               // totalVAT={totalVAT}
              //  grandTotal={grandTotal}
              />
            }
          />
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
