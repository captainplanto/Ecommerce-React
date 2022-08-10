import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import {
  REMOVE_FROM_CART,
  RESET_CART_PAGE,
  OPEN_CART,
  CLOSE_CART,
} from "../redux/features/cart";
import ButtonComponent from "../components/common/button.component";
import { URL } from "../const/constant";

import { Link } from "react-router-dom";
import { ICart } from "../type";
import { ICartAndCheckout } from "../type";
import BackDropDialog from "../components/common/BackDrop.component";
import CounterComponent from "../components/common/Counter.component";
import { FC, useCallback } from "react";
//{ totalPrice }
const ShoppingCart: FC<ICartAndCheckout> = () => {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.cart);
  const cartQty = useAppSelector((state) => state.cart);
  const cartRender = useCallback(() => {
    return (
      <BackDropDialog
        open={openModal.open}
        style={{ top: "-12rem", right: window.innerWidth > 480 ? "-55vw" : "" }}
        onClose={() => dispatch(OPEN_CART())}
      >
        {cartQty.cartItem.length > 0 ? (
          <Container>
            <section>
              <div className="cart-length">
                <h1>Cart({cartQty.cartItem.length})</h1>
                <button
                  onClick={() => dispatch(RESET_CART_PAGE())}
                  className="cart-remove-item-btn"
                >
                  REMOVE ALL
                </button>
              </div>

              {cartQty.cartItem &&
                cartQty.cartItem.length > 0 &&
                cartQty.cartItem.map(
                  ({ id, name, price, image, quantity }, index) => (
                    <Main key={id}>
                      <CounterComponent
                        cartCount={0}
                        id={id}
                        name={name}
                        price={price}
                        image={image.desktop}
                        showCart={true}                     />
                    </Main>
                  )
                )}

              <Link to={"/checkout"}>
                <ButtonComponent
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                  onClick={() => dispatch(CLOSE_CART())}
                >
                  CHECKOUT
                </ButtonComponent>
              </Link>
            </section>
          </Container>
        ) : (
          <Container>
            <section>
              <NoCart>
                <h1>Your Cart is Empty </h1>
                <p>Start shopping to add item(s) into your cart </p>
                <Link to={"/"}>
                  <ButtonComponent onClick={() => dispatch(CLOSE_CART())}>
                    Continue Shopping
                  </ButtonComponent>
                </Link>
              </NoCart>
            </section>
          </Container>
        )}
      </BackDropDialog>
    );
  }, [cartQty.cartItem, dispatch, openModal.open]);

  return <>({cartRender()})</>;
};

export default ShoppingCart;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  padding: 2rem;
  border-radius: 8px;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 80vw;
  }
  .cart-remove-item-btn {
    outline: none;
    border: none;
    background: none;
    :hover {
      cursor: pointer;
    }
  }
  section {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    height: 50vh;
    img {
      width: 5rem;
      border-radius: var(--border-radius);
      object-fit: contain;
    }
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

    .cart-length {
      display: flex;
      justify-content: space-between;
    }
  }
  .totalqty-checkout {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;
const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  align-items: center;
  gap: 2rem;
  .image-name-price {
    display: flex;
    align-items: center;
    gap: 1rem;
    div {
      width: 50%;
    }
  }
`;
const NoCart = styled.div`
  padding: 1.2rem;
  text-align: center;
  p {
    margin: 1rem 0 1rem 0;
  }
`;

/*


 <div className="counter-styling">
                        <h3 onClick={() => dispatch(DECREASE_QTY(id))}>-</h3>
                        <h5> {quantity}</h5>

                        <h3 onClick={()=> dispatch(INCREASE_QTY(quantity))}>+</h3>
                      </div>




  <div className="counter-styling">
                      <h3 onClick={() => dispatch(DECREASE_QTY())}>-</h3>
                      <h5> {cartQty.count}</h5>
                      <h3 onClick={() => dispatch(INCREASE_QTY(id))}>+</h3>
                    </div>




 <div className="image-name-price">
                        <img src={URL + image.desktop} alt="product-jpg" />
                        <div>
                          <h1>{name.slice(0, 4)}</h1>
                          <h2>{price * cartCount}</h2>
                        </div>
                      </div>

                      <CounterComponent
                        id={id}
                        //   cartCount={cartCount}
                        //  stepDown={stepDown}
                        //  stepUp={stepUp}
                      />



*/
