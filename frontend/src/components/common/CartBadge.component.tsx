import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useAppSelector } from "../../redux/stores/hooks";

interface ICart {
  children?: React.ReactNode;
}

const CustomizedBadges: React.FC<ICart> = ({ children }) => {
  const cartQty = useAppSelector((state) => state.cart);
  return (
    <IconButton aria-label="cart">
      <StyledBadge
        badgeContent={cartQty.cartItem.length > 0 ? cartQty.cartItem.length : "0"}
   
        color="error"
      >
        {children}
      </StyledBadge>
    </IconButton>
  );
};

export default CustomizedBadges;

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
