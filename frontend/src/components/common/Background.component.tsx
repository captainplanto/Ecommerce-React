import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IBackgroundStyle {
  style?: object;
  children: ReactNode;
  className?: string;
}

const BackgroundComponent: FC<IBackgroundStyle> = ({
  style,
  children,
  className,
  ...props
}) => {
  return (
    <Background style={{ ...style }} className={className}>
      {children}
    </Background>
  );
};

export default BackgroundComponent;

const Background = styled.div`
  background: var(--primary-gray-color);
  width: 32rem;
  border-radius: var(--border-radius);
  @media screen and (max-width: 820px) {
    width: 15rem;
    height: 15rem;
  }

  @media screen and (max-width: 480px) {
    width: 99%;
  }
`;
