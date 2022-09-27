import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HeadphonesBatteryOutlinedIcon from "@mui/icons-material/HeadphonesBatteryOutlined";
import SpeakerOutlinedIcon from "@mui/icons-material/SpeakerOutlined";
import EarbudsBatteryOutlinedIcon from "@mui/icons-material/EarbudsBatteryOutlined";
import CartBadgeComponent from "../common/CartBadge.component";
import { useAppDispatch } from "../../redux/stores/hooks";
import { OPEN_CART } from "../../redux/features/cart";
import { Link } from "react-router-dom";

export const MobileNavComponent = () => {
  const dispatch = useAppDispatch();

  const navIcons = [
    {
      id: 1,
      name: "HOME",
      icons: <HomeOutlinedIcon />,
      path: "/",
    },
    {
      id: 2,
      name: "HEADPHONES",
      icons: <HeadphonesBatteryOutlinedIcon />,
      path: "/headphones",
    },
    {
      id: 3,
      name: "SPEAKERS",
      icons: <SpeakerOutlinedIcon />,
      path: "/speakers",
    },
    {
      id: 4,
      name: "EARPHONES",
      icons: <EarbudsBatteryOutlinedIcon />,
      path: "/earphones",
    },

    {
      id: 5,
      name: "CART",
      icons: (
        <div onClick={() => dispatch(OPEN_CART())}>
          <CartBadgeComponent>
            <img src={"/assets/shared/desktop/icon-cart.svg"} alt="cart Icon" />
          </CartBadgeComponent>
        </div>
      ),
    },
  ];

  return (
    <Container>
      <div className="navItems">
        {navIcons.map(({ id, name, icons, path }) => (
          <Link to={path ? path : ""} key={id}>
            <li>{icons}</li>
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .navItems {
    background: var(--primary-hover-black);
    position: fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    padding: 10px;
    li {
      color: white;
    }
  }
`;
