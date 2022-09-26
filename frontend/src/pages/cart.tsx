import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import { RESET_CART_PAGE, OPEN_CART, CLOSE_CART } from "../redux/features/cart";
import ButtonComponent from "../components/common/button.component";
import { Link } from "react-router-dom";

import BackDropDialog from "../components/common/BackDrop.component";
import CounterComponent from "../components/common/Counter.component";

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.cart);
  const cartQty = useAppSelector((state) => state.cart);
  const { totalAmount } = useAppSelector((state) => state.cart);
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

            {cartQty.cartItem && cartQty.cartItem.length > 0
              ? cartQty.cartItem.map(
                  ({ id, name, price, unit, image }, index) => (
                    <Main key={id}>
                      <CounterComponent
                        unit={unit}
                        id={id}
                        name={name}
                        price={price}
                        image={image}
                        showCart={true}
                      />
                    </Main>
                  )
                )
              : ""}

            <div className="totalqty-checkout">
              <h1>Total: </h1>
              <p>€ {totalAmount}</p>
            </div>
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
