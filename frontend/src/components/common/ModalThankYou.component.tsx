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
  width: 100%;
  height: 280%;
  position: absolute;
  top: -60rem;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(12px);
  .children {
    background: var(--offwhite-text-color);
    border-radius: 2rem;
    width: 40%;
    h6,
    h2 {
      color: black;
    }
      @media screen and (min-width: 200px) and (max-width: 820px)  {
      width: 90%;
    }

  }
`;


