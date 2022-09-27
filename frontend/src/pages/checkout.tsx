import React, { FC, useEffect, useState } from "react";
import Navbar from "../components/navbars/Navbar.component";
import FooterComponent from "../components/common/Footer.component";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import CheckOutField from "../components/common/CheckOutField.component";
import { useAppSelector, useAppDispatch } from "../redux/stores/hooks";
import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_NUMBER,
  CHANGE_ADDRESS,
  CHANGE_COUNTRY,
  CHANGE_REGION,
  CHANGE_ZIPCODE,
} from "../redux/features/checkout";
import ButtonComponent from "../components/common/button.component";

import { ICart } from "../type";
import { ICartAndCheckout } from "../type";
import ThankYouPage from "./thankyou";
import CounterComponent from "../components/common/Counter.component";


const CheckOut: FC<ICartAndCheckout> = ({ grandTotal }) => {
  const value = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const cartQty = useAppSelector((state) => state.cart);
  const [validate, setValidate] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { shipping, totalAmount, tax } = useAppSelector((state) => state.cart);


 

  const validateInfo = () => {
    if (
      value.name.length <= 1 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email) ||
      isNaN(value.number) ||
      value.address.length <= 1 ||
      value.country === "" ||
      isNaN(value.zipCode)
    ) {
      setError("Check all inputs and make sure its filled properly.");
    } else {
      setValidate(!validate);
      setError("");
      setOpenModal(!openModal);
    }
  };
  return (
    <OuterContainer>
      <Navbar style={{ background: "black" }} />
      <Link to={"/"}>
        <h1 className="go-back">Go Back</h1>
      </Link>
      <CheckoutContainer>
        <main>
          <h1>CHECKOUT</h1>
          <h4>BILLING DETAILS</h4>
          <form>
            <div className="billing-details">
              <div className="name-field">
                <CheckOutField
                  type="text"
                  name="Name"
                  value={value.name}
                  onChange={(e) => dispatch(CHANGE_NAME(e))}
                  style={{ width: "100%" }}
                  placeholder="Ikulayo Charles"
                />
              </div>
              <div className="email-field">
                <CheckOutField
                  type="text"
                  name="Email-address"
                  value={value.email}
                  onChange={(e) => dispatch(CHANGE_EMAIL(e))}
                  style={{ width: "100%" }}
                  placeholder="charles@gmail.com"
                />
              </div>
              <div className="phone-field">
                <CheckOutField
                  type="number"
                  name="Phone-number"
                  value={value.number}
                  onChange={(e) => dispatch(CHANGE_NUMBER(e))}
                  style={{ width: "100%" }}
                  placeholder="+491506784634"
                />
              </div>
              <h1>{error}</h1>
            </div>

            <h4>SHIPPING DETAILS</h4>
            <div className="shipping-details">
              <div className="address-field">
                <CheckOutField
                  type="text"
                  name="Address"
                  value={value.address}
                  onChange={(e) => dispatch(CHANGE_ADDRESS(e))}
                  style={{ width: "99%" }}
                  placeholder="109, Zoologischer Garten"
                />
              </div>
              <div className="zipcode-field">
                <CheckOutField
                  type="number"
                  name="Zip Code"
                  value={value.zipCode}
                  onChange={(e) => dispatch(CHANGE_ZIPCODE(e))}
                  style={{ width: "100%" }}
                  placeholder="10023"
                />
              </div>
              <div className="city-field">
                <h2>Region</h2>
                <RegionDropdowns
                  country={value.country}
                  name="Region"
                  value={value.region}
                  onChange={(val) => dispatch(CHANGE_REGION(val))}
                />
              </div>

              <div className="country-field">
                <h2>Country</h2>
                <CountryDropdowns
                  name="Country"
                  value={value.country}
                  onChange={(val) => dispatch(CHANGE_COUNTRY(val))}
                />
              </div>
            </div>
          </form>
        </main>

        <div className="checkout-summary">
          <h1 className="h1">SUMMARY</h1>
          <div>
            {cartQty.cartItem.map(({ id, name, price, unit, image }: ICart) => (
              <>
                <CounterComponent
                  unit={unit}
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  showCart={false}
                  showCheckoutContent={true}
                />
              </>
            ))}
            <div className="checkout-pricing-details">
              <div style={pricingCheckout}>
                <p>TOTAL </p>
                <span>€ {Math.round(totalAmount)} </span>
              </div>

              <div style={pricingCheckout}>
                <p>SHIPPING </p>
                <span>€ {Math.round(shipping)}</span>
              </div>

              <div style={pricingCheckout}>
                <p>VAT(INCLUDED) </p>
                <span>€ {Math.round(tax)}</span>
              </div>

              <div style={pricingCheckout}>
                <p>GRAND TOTAL </p>
                <span className="grand-total">
                  €{Math.round(totalAmount + shipping + tax)}
                </span>
              </div>
            </div>

            {!validate ? (
              <ButtonComponent
                onClick={() => {
                  validateInfo();
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  margin: "0 auto",
                  marginTop: "3rem",
                  justifyContent: "center",
                }}
              >
                CONTINUE AND PAY
              </ButtonComponent>
            ) : (
              <ButtonComponent
                style={{
                  width: "100%",
                  display: "flex",
                  margin: "0 auto",
                  marginTop: "3rem",
                  justifyContent: "center",
                }}
              >
                CONTINUE AND PAY
              </ButtonComponent>
            )}
          </div>
        </div>
      </CheckoutContainer>
      {openModal && (
        <ThankYouPage
          grandTotal={grandTotal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <FooterComponent />
    </OuterContainer>
  );
};
export default CheckOut;
const OuterContainer = styled.div`
  margin-top: 8rem;
  a {
    text-decoration: none;
  }
  .go-back {
    color: black;
    font-size: 1.2rem;
    margin-left: 3rem;

    :hover {
      color: var(--primary-Orange);
    }
  }
`;
const CheckoutContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    width: 90%;
    display: block;
  }
  .checkout-summary {
    background: var(--white-text-color);
    border-radius: 1rem;
    padding: 1.5rem;
    @media screen and (max-width: 820px) {
      width: 90%;
      margin: 0 auto;
      border-radius: 0;
    }
    .h1 {
      font-size: 3rem;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }
  }
  main {
    width: 55%;
    border-radius: 1rem;
    background: var(--white-text-color);
    padding: 2rem;
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 820px) {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 3rem;
      border-radius: 0;
    }
    .billing-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 50px;
      grid-row-gap: 20px;
      margin-bottom: 4rem;
      .name-field {
        grid-area: 1 / 1 / 2 / 2;
      }
      .email-field {
        grid-area: 1 / 2 / 2 / 3;
      }
      .address-field {
        grid-area: 2 / 1 / 3 / 3;
      }
      h1 {
        color: red;
        font-size: 1rem;
        text-align: justify;
      }
      @media screen and (max-width: 480px) {
        display: block;
        .email-field {
          margin: 2rem 0 2rem 0;
        }
      }
    }

    .shipping-details {
      display: grid;
      @media screen and (max-width: 480px) {
        display: block;
        .zipcode-field {
          margin: 2rem 0 2rem 0;
        }
      }

      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;

      .address-field {
         {
          grid-area: 1 / 1 / 2 / 3;
        }
      }
      .zipcode-field {
         {
          grid-area: 2 / 1 / 3 / 2;
        }
      }
      .city-field {
         {
          grid-area: 2 / 2 / 3 / 3;
        }
        h2 {
          margin-bottom: 4px;
        }
      }
      .country-field {
         {
          grid-area: 3 / 1 / 4 / 3;
        }
        h2 {
          margin-bottom: 4px;
        }
      }
    }

    h1 {
      font-size: 3rem;
      letter-spacing: 2px;
      margin-bottom: 3rem;
    }
    h4 {
      color: var(--primary-Orange);
      letter-spacing: 2px;
      margin-bottom: 3rem;
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
const CountryDropdowns = styled(CountryDropdown)`
  outline: none;
  width: 20vw;
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  border-radius: var(--border-radius);
  border: 1px solid var(--primary-gray-color);
  padding: 1.5rem;
`;

const RegionDropdowns = styled(RegionDropdown)`
  outline: none;
  width: 21vw;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  border-radius: var(--border-radius);
  border: 1px solid var(--primary-gray-color);
  padding: 1.5rem 2rem 1.5rem 1.5rem;
  margin-bottom: 2rem;
`;
const pricingCheckout = {
  display: "flex",
  margin: "0 auto",
  justifyContent: "space-between",
  alignItems: "center",
};
