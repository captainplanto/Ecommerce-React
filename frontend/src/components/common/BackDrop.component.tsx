import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { FC} from "react";
import { SimpleDialogProps } from "../../type";
import { useAppDispatch, useAppSelector } from "../../redux/stores/hooks";
import { CLOSE_CART} from "../../redux/features/cart";
import styled from "styled-components";

const BackDropDialog: FC<SimpleDialogProps> = ({
  style,
  children,
  ...props
}) => {
  const openModal = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Dialogs
      open={openModal.open}
      style={style}
      onClose={() => dispatch(CLOSE_CART())}
     
    >
      {children}
    </Dialogs>
  );
};

export default BackDropDialog;

const Dialogs = styled(Dialog)`
`;
