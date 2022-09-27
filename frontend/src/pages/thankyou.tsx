import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundComponent from "../components/common/Background.component";
import ButtonComponent from "../components/common/button.component";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import { ICart } from "../type";

import { Modal } from "@nextui-org/react";
import { EMPTY_CART_AFTER_PAYMENT } from "../redux/features/cart";
import ModalThankYouComponent from "../components/common/ModalThankYou.component";

interface IThankYou {
  grandTotal?: number;
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
}
const ThankYouPage: FC<IThankYou> = ({
  grandTotal,
  openModal,
  setOpenModal,
}) => {
  const cartQty = useAppSelector((state) => state.cart);
  const { totalAmount, shipping, tax } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handler = () => {
    setOpenModal(!openModal);
  };

  return (
    <Link to={"/"}>
      <ThankYouModal
        width={
          window.innerWidth > 821
            ? "40vw"
            : window.innerWidth <= 820
            ? "90vw"
            : ""
        }
        // blur={true}
        aria-labelledby="modal-title"
        open={openModal}
        onClose={handler}
      >
        <Modal.Body>
          <OuterContainer>
            <div className="heading">
              <h1>THANK YOU FOR YOUR ORDER</h1>
              <h6>You will receive an email confirmation shortly</h6>
            </div>
            <InnerContainer>
              <BackgroundComponent style={{ width: "100%" }}>
                <div>
                  {cartQty.cartItem
                    .slice(0, 1)
                    .map(({ id, name, price, image, unit }: ICart) => (
                      <summary key={id}>
                        <div className="image-name-price">
                          <div className="Image-cartqty">
                            <img src={image.desktop} alt="product-jpg" />
                            <div>
                              <h1>{name}</h1>
                              <h2>{price}</h2>
                            </div>
                          </div>
                          <h2>x{unit}</h2>
                        </div>
                        {cartQty.cartItem.length - 1 === 0 ? (
                          ""
                        ) : (
                          <h5 style={{color:'black'}}>
                            and {cartQty.cartItem.length - 1} other{" "}
                            {cartQty.cartItem.length - 1 > 1 ? "items" : "item"}
                          </h5>
                        )}
                      </summary>
                    ))}
                </div>
              </BackgroundComponent>
              <div>
                <BackgroundComponent
                  style={{
                    background: "black",
                    color: "white",
                    padding: "3rem",
                    width: "100%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  <h1>GRAND TOTAL</h1>
                  <span className="grand-total">€{Math.round(totalAmount + shipping + tax)}</span>
                </BackgroundComponent>
              </div>
            </InnerContainer>
            <Link to={"/"}>
              <ButtonComponent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                  width: "100%",
                }}
                onClick={() => dispatch(EMPTY_CART_AFTER_PAYMENT())}
              >
                BACK TO HOME
              </ButtonComponent>
            </Link>
          </OuterContainer>
        </Modal.Body>
      </ThankYouModal>
    </Link>
  );
};

export default ThankYouPage;
const ThankYouModal = styled(ModalThankYouComponent)`
  width: 100%;
`;
const OuterContainer = styled.div`
  margin: 0 auto;
  width:90%;
  padding: 4rem;
  .heading {
    width: 60%;
    h1 {
      font-size: 2.5rem;
      letter-spacing: 2px;
      color:black;
    }
    h6 {
      color:color:black;
    }
    @media screen and (max-width: 820px) {
      width: 55%;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  .image-name-price {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-right: 2rem;
    justify-content: space-between;
    .Image-cartqty {
      display: flex;
      align-items: center;
    }
  }
  summary {
    h5 {
      text-align: center;
    }
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

const InnerContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 2rem 0 2rem 0;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;
