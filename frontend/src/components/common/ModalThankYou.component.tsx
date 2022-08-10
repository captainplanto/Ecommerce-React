import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IBackdrop {
  children: ReactNode;
  style?: object;
  open: boolean;
  onClose: () => void;
  width: string;
}

const ModalThankYouComponent: FC<IBackdrop> = ({
  children,
  style,
  // open,
  //onClose,
  ...props
}) => {
  return (
    <Backdrop style={{ ...style }}>
      <div className="children">{children} </div>
    </Backdrop>
  );
};

export default ModalThankYouComponent;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  .children {
    background: var(  --offwhite-text-color);
    border-radius:5px;
    width: 40%;
    @media screen and (max-width: 820px) {
      width: 85%;
    }

     @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;
