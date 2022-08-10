import React from "react";
import styled from "styled-components";
import BackgroundComponent from "./Background.component";

const BannerExtra = () => {
  return (
    <Banner>
      <BackgroundComponent
        style={{
          background: "var( --border-outline)",
          color: "var( --white-text-color)",
          padding: "3rem",
        }}
      >
        Thank in advance for shopping with us. We hope to see you again
      </BackgroundComponent>
    </Banner>
  );
};

export default BannerExtra;
const Banner = styled.div`
  z-index: 0;
`;
