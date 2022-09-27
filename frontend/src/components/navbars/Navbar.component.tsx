import styled from "styled-components";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { FC, ReactChild, ReactNode } from "react";
import CartBadgeComponent from "../common/CartBadge.component";
import { useAppSelector, useAppDispatch } from "../../redux/stores/hooks";
import CartPage from "../../pages/cart";
import { ICartAndCheckout } from "../../type";
import { OPEN_CART } from "../../redux/features/cart";
import { MobileNavComponent } from "./MobileNav.component";

const NavItems: { name: string; path: string; id: number }[] = [
  { name: "HOME", path: "/", id: 1 },
  { name: "HEADPHONES", path: "/headphones", id: 2 },
  { name: "SPEAKERS", path: "/speakers", id: 3 },
  { name: "EARPHONES", path: "/earphones", id: 4 },
];

interface INav extends ICartAndCheckout {
  style?: object;
  zIndex?: number;
  color?: string;
  children?: ReactChild | ReactNode;
  className?: string;
  marginBottom?: string;
}

const Navbar: FC<INav> = ({
  style,
  zIndex,
  color,
  children,
  className,
  marginBottom,

  ...props
}) => {
  const openModal = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const navBar = NavItems.map(({ name, path, id }) => (
    <Link to={path} key={id}>
      <li style={{ color: "white" }}> {name}</li>
    </Link>
  ));

  return (
    <Container>
      <div className="desktop_show">
        <NavList
          role="navigation"
          aria-label="Main"
          style={{ backgroundColor: color, marginBottom, ...style }}
          className={className}
        >
          <img src={"/assets/shared/desktop/logo.svg"} alt="website logo" />
          <ul>{navBar}</ul>

          <div onClick={() => dispatch(OPEN_CART())}>
            <CartBadgeComponent>
              <img
                src={"/assets/shared/desktop/icon-cart.svg"}
                alt="cart Icon"
              />
            </CartBadgeComponent>
          </div>
        </NavList>
        <List
          sx={{ mt: 40, width: "77%", margin: "4rem auto" }}
          component="nav"
          aria-label="Nav-bar-nav"
        >
          <Divider />
        </List>
        {children}
        {openModal.open ? <CartPage /> : ""}
      </div>

      <div className="mobile_show">
        <div
          style={{ backgroundColor: color, marginBottom, ...style }}
          className={className}
        >
          {children}
          <MobileNavComponent />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  .desktop_show {
    @media screen and (max-width: 820px) {
      display: none;
    }
  }
  .mobile_show {
    background: red !important;
    @media screen and (min-width: 821px) {
      display: none;
    }
  }
`;

const NavList = styled.div`
  width: 100%;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  img {
    object-fit: contain;
  }
  ul {
    width: 22%;
    justify-content: space-between;
    letter-spacing: 2px;
    display: flex;
    list-style: none;
    color: var(--white-text-color);
    li {
      :hover {
        color: var(--primary-Orange) !important;
        cursor: pointer;
      }
    }
  }
  a {
    list-style: none;
    text-decoration: none;
    color: var(--white-text-color);
  }
`;
