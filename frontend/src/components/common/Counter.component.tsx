import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/stores/hooks";
import { URL } from "../../const/constant";
import {
  CALCULATE_TAX,
  DECREASE_QTY,
  GET_CART_COUNT,
  GET_SHIPPING,
  GET_SUBTOTAL,
  GET_TOTAL_AMOUNT,
  INCREASE_QTY,
  REMOVE_FROM_CART,
} from "../../redux/features/cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICart } from "../../type";
const CounterComponent: FC<ICart> = ({
  id,
  name,
  image,
  price,
  unit,
  showCart,
  showCheckout,
  showCheckoutContent,
  ...props
}) => {
  const { subAmount, totalCount, shipping, totalAmount, tax } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_CART_COUNT());
    dispatch(GET_TOTAL_AMOUNT());
    dispatch(GET_SHIPPING());
    dispatch(GET_SUBTOTAL());
    dispatch(CALCULATE_TAX());
  }, [dispatch]);

  if (showCart) {
    return (
      <>
        <div className="image-name-price">
          <img src={image?.desktop} alt="product-jpg" />
          <div>
            <h1>{name?.slice(0, 4)}</h1>
            <h2>{price * unit}</h2>
          </div>
        </div>
        <Counter>
          <div className="counter-styling">
            <h3
              onClick={() => {
                dispatch(DECREASE_QTY(id));
                dispatch(GET_CART_COUNT());
                dispatch(GET_TOTAL_AMOUNT());
                dispatch(GET_SUBTOTAL());
                dispatch(CALCULATE_TAX());
                dispatch(GET_SHIPPING());
              }}
            >
              -
            </h3>
            <h5> {unit}</h5>

            <h3
              onClick={() => {
                dispatch(INCREASE_QTY(id));
                dispatch(GET_CART_COUNT());
                dispatch(GET_TOTAL_AMOUNT());
                dispatch(GET_SUBTOTAL());
                dispatch(CALCULATE_TAX());
                dispatch(GET_SHIPPING());
              }}
            >
              +
            </h3>
          </div>
        </Counter>
        <button
          onClick={() => {
            dispatch(REMOVE_FROM_CART(id));
            dispatch(GET_CART_COUNT());
            dispatch(GET_TOTAL_AMOUNT());
            dispatch(GET_SUBTOTAL());
            dispatch(CALCULATE_TAX());
            dispatch(GET_SHIPPING());
          }}
          className="delete-item-button"
        >
          <DeleteIcon />
        </button>
      </>
    );
  } else {
    return (
      <Container>
        {showCheckoutContent && (
          <summary>
            <div className="image-name-price">
              <div className="Image-cartqty">
                <img src={URL + image.desktop} alt="product-jpg" />
                <div>
                  <h1>{name}</h1>
                  <h2>{price * unit}</h2>
                </div>
              </div>
              <h2>x{unit}</h2>
            </div>
            <div className="checkout-pricing-details">
              <div style={pricingCheckout}>
                <p>TOTAL </p>
                <span>€ {totalAmount} </span>
              </div>

              <div style={pricingCheckout}>
                <p>SHIPPING </p>
                <span>€ {shipping}</span>
              </div>

              <div style={pricingCheckout}>
                <p>VAT(INCLUDED) </p>
                <span>€ {tax}</span>
              </div>

              <div style={pricingCheckout}>
                <p>GRAND TOTAL </p>
                <span className="grand-total">€{totalAmount}</span>
              </div>
            </div>
          </summary>
        )}
      </Container>
    );
  }
};
export default CounterComponent;
const Container = styled.div`
  .image-name-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    .Image-cartqty {
      display: flex;
      align-items: center;
    }
  }

  summary {
    margin-bottom: 1rem;
    img {
      width: 90px;
      object-fit: contain;
      border-radius: var(--border-radius);
      margin-right: 1rem;
    }
  }
  .checkout-pricing-details {
    margin-top: 4rem;

    p,
    span {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    span {
      font-weight: 800;
    }
    .grand-total {
      color: var(--primary-Orange);
    }
  }
`;

const Counter = styled.div`
  .counter-styling {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    gap: 2rem;
    margin-right: 1rem;
    background: var(--primary-gray-color);
    padding: 0.7rem;
    align-items: center;
  }
`;
const pricingCheckout = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "center",
};
