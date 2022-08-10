import React from "react";
import BackgroundComponent from "./Background.component";
import ButtonComponent from "./button.component";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FeaturedProductThree = () => {
  return (
    <Parent>
      <img src={"/assets/home/desktop/image-earphones-yx1.jpg"} alt="images" />
      <ParentA>
        <div className="text-content">
          <div>
            <h1>YX1 EARPHONES</h1>
            <Link to="product/1">
              <ButtonComponent style={button}>SEE PRODUCT</ButtonComponent>
            </Link>
          </div>
        </div>
      </ParentA>
    </Parent>
  );
};

export default FeaturedProductThree;

const ParentA = styled(BackgroundComponent)`
  width: 50%;
  @media screen and (max-width: 820px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Parent = styled.div`
  display: flex;
  margin-top: 8rem;
  justify-content: center;
  gap: 2rem;
  img {
    border-radius: var(--border-radius);
    width: 50%;
    @media screen and (max-width: 820px) {
      width: 50%;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
  @media screen and (max-width: 820px) {
    gap: 2rem;
  }

  @media screen and (max-width: 480px) {
    display: block;
  }
  .text-content {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 10rem;

    @media screen and (max-width: 480px) {
      margin-top: 2.5rem;
    }

    h1 {
      font-size: 2.5rem;
      padding-bottom: 1.2rem;
      letter-spacing: 0.2rem;

      @media screen and (max-width: 480px) {
        padding: 3rem 0 2rem 0;
        font-size: 2rem;
      }
    }
  }
`;
const button = {
  color: "var( --primary-hover-black)",
  border: "1px solid var(--border-outline)",
  background: "none",
  fontWeight: "800",
  marginBottom: "4rem",
};
