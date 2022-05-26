import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";
import {
  REMOVE_FROM_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  RESET_CART_PAGE,
  OPEN_CART,
  CLOSE_CART,
} from "../redux/features/cart";
import ButtonComponent from "../components/common/button.component";
import { URL } from "../const/constant";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { ICart } from "../type";
import { ICartAndCheckout } from "../type";
import BackDropDialog from "../components/common/BackDrop.component";

const ShoppingCart = ({ totalPrice }: ICartAndCheckout) => {
  console.log(totalPrice);
  const dispatch = useAppDispatch();
  const cartQty = useAppSelector((state) => state.cart);
  const openModal = useAppSelector((state) => state.cart);

  return (
    <>
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

              {cartQty.cartItem.map(({ id, name, price, image }: ICart) => (
                <div key={id}>
                  <Main>
                    <div className="image-name-price">
                      <img src={URL + image.desktop} alt="product-jpg" />
                      <div>
                        <h1>{name.slice(0, 4)}</h1>
                        <h2>{price * cartQty.count}</h2>
                      </div>
                    </div>
                    <div>
                      <div className="counter-styling">
                        <h3 onClick={() => dispatch(DECREASE_QTY(id))}>-</h3>
                        <h5> {cartQty.count}</h5>

                        <h3 onClick={() => dispatch(INCREASE_QTY(id))}>+</h3>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch(REMOVE_FROM_CART(id))}
                      className="delete-item-button"
                    >
                      <DeleteIcon />
                    </button>
                  </Main>
                </div>
              ))}
              <div className="totalqty-checkout">
                <h1>Total: </h1>
                <p>€ {totalPrice}</p>
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
    </>
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
    width: 90vw;
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
