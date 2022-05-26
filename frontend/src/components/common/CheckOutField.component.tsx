import React, { FC } from "react";
import styled from "styled-components";
import { ICheckoutForm } from "../../type";

const CheckoutInputComponent: FC<ICheckoutForm> = ({
  type,
  style,
  onChange,
  onSubmit,
  value,
  border,
  width,
  borderRadius,
  name,
  outline,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={name}>{name}</Label>
      <CheckoutInputField
        type={type}
        value={value}
        style={{ width, border, borderRadius, outline, ...style }}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default CheckoutInputComponent;

const CheckoutInputField = styled.input`
  outline: none;
  width: 20vw;
  padding: 1.5rem;
  margin-top: 6px;
  border-radius: var(--border-radius);
  border: 1px solid var(--primary-gray-color);
  ::placeholder {
    font-weight: 800;
  }
      &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
`;
const Label = styled.label`

font-weight:800;


`