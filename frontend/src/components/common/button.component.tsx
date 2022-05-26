import * as React from "react";
import { FC } from "react";
import styled from "styled-components";

interface IButton {
  children: string;
  style?: object;
  onClick?: any;
  onClose?: ()=>void;
  type?: 'submit' | 'reset' |'reset';
   onSubmit?:()=>void;
}

const ButtonComponent: FC<IButton> = ({
  children,
  style,
  onClick,
  onClose,
  type,
  onSubmit,
  ...props
}) => {
  return (
    <Button style={{ ...style }} onClick={onClick} type={type} onSubmit={onSubmit}>
      {children}
    </Button>
  );
};

export default ButtonComponent;

const Button = styled.button`
  padding: 1.5rem;
  letter-spacing: 2px;
  background-color: var(--primary-Orange);
  border: none;
  color: var(--white-text-color);
  font-weight: 500;
  transition:all 0.4s ease;
  :hover {
    background-color: var(--primary-Orange-hover);
    cursor: pointer;
  }
`;
