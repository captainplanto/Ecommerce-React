import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/stores/hooks";
import { URL } from "../../const/constant";
import { REMOVE_FROM_CART } from "../../redux/features/cart";
import DeleteIcon from "@mui/icons-material/Delete";
interface ICount {
  cartCount?: number;
  id: number;
  name?: string;
  price?: number;
  image?: string;
  showCart?: boolean;
  showCheckout?: boolean;
  showCheckoutContent?: boolean;
}

const CounterComponent: FC<ICount> = ({
  id,
  name,
  image,
  price,
  showCart,
  showCheckout,
  showCheckoutContent,
  ...props
}) => {
  const [totalPrice, setTotalPrice] = useState<number>();
  const dispatch = useAppDispatch();
  const cartQty = useAppSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(1);
  const [totalShipping, setTotalShipping] = useState<number>();
  const [totalVAT, setTotalVAT] = useState<number>();
  const [grandTotal, setGrandTotal] = useState<number>();

  useEffect(() => {
    const addition = (acc: number, currentValue: { price: number }) => {
      return acc + currentValue.price * cartQty.count;
    };
    setTotalPrice(cartQty.cartItem.reduce(addition, 0));

    if (totalPrice) {
      const shipping = parseInt(((totalPrice / 100) * 2).toFixed(2));
      setTotalShipping(shipping);
    }

    if (totalPrice) {
      const vat = parseInt(((totalPrice / 100) * 5).toFixed(2));
      setTotalVAT(vat);
    }
    if (totalPrice && totalShipping && totalVAT) {
      const grandPrice = totalPrice + totalShipping + totalVAT;
      setGrandTotal(grandPrice);
    }
  }, [cartQty.cartItem, cartQty.count, totalPrice, totalShipping, totalVAT]);

  const stepUp = () => {
    setCartCount(cartCount + 1);
  };

  const stepDown = () => {
    if (cartCount > 1) {
      setCartCount(cartCount - 1);
    }
  };

  if (showCart) {
    return (
      <>
        <div className="image-name-price">
          <img src={URL + image} alt="product-jpg" />
          <div>
            <h1>{name?.slice(0, 4)}</h1>
            <h2>{price && price * cartCount}</h2>
          </div>
        </div>
        <Counter>
          <div className="counter-styling">
            <h3 onClick={() => stepDown()}>-</h3>
            <h5> {cartCount}</h5>
            <h3 onClick={() => stepUp()}>+</h3>
          </div>
        </Counter>
        <button
          onClick={() => dispatch(REMOVE_FROM_CART(id))}
          className="delete-item-button"
        >
          <DeleteIcon />
        </button>
        <div className="totalqty-checkout">
          <h1>Total: </h1>
          <p>€ {totalPrice ? totalPrice : 0}</p>
        </div>
      </>
    );
  } else {
    return (
      <Container>
        {showCheckoutContent ? (
          <summary>
          <div className="image-name-price">
            <div className="Image-cartqty">
              <img src={URL + image} alt="product-jpg" />
              <div>
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
            </div>
            <h2>x{cartQty.count}</h2>
          </div>
          </summary>
        ) : (
          <div className="checkout-pricing-details">
            <div style={pricingCheckout}>
              <p>TOTAL </p>
              <span>€ {totalPrice} </span>
            </div>

            <div style={pricingCheckout}>
              <p>SHIPPING </p>
              <span>€ {totalShipping ? totalShipping : ""}</span>
            </div>

            <div style={pricingCheckout}>
              <p>VAT(INCLUDED) </p>
              <span>€ {totalVAT}</span>
            </div>

            <div style={pricingCheckout}>
              <p>GRAND TOTAL </p>
              <span className="grand-total">€{grandTotal}</span>
            </div>
          </div>
        )}
      </Container>
    );
  }
};
export default CounterComponent;
const Container =styled.div`
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
  `
















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

/*










   //<summary key={id}>
          <div className="image-name-price">
            <div className="Image-cartqty">
              <img src={URL + image} alt="product-jpg" />
              <div>
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
            </div>
            <h2>x{cartQty.count}</h2>
          </div>
     //   </summary>
        <div className="checkout-pricing-details">
          <div style={pricingCheckout}>
            <p>TOTAL </p>
            <span>€ {totalPrice} </span>
          </div>

          <div style={pricingCheckout}>
            <p>SHIPPING </p>
            <span>€ {totalShipping}</span>
          </div>

          <div style={pricingCheckout}>
            <p>VAT(INCLUDED) </p>
            <span>€ {totalVAT}</span>
          </div>

          <div style={pricingCheckout}>
            <p>GRAND TOTAL </p>
            <span className="grand-total">€{grandTotal}</span>
          </div>
        </div>

 //the function below calculates the shipping price at checkout.tsx the shipping === 2% of the totalPrice of goods.
  //the function below calculates the Vat price at checkout.tsx, the VAT=== 5% of the totalPrice of goods.
        */
