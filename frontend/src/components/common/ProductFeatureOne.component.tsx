import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
//import speakerImage from "../../assets/home/tablet/image-speaker-zx9.png";
//import pattern from "../../assets/home/desktop/pattern-circles.svg";
import ButtonComponent from "./button.component";

const FeaturedProduct = () => {
  return (
    <Background>
      <img
        src={"/assets/home/desktop/pattern-circles.svg"}
        alt="Background-PatternImage"
        className="pattern-image"
      />
      <div className="image-text">
        <img src="/assets/home/tablet/image-speaker-zx9.png" alt="Featured-Product" />
        <div className="text-button">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to ='product/6'>
          <ButtonComponent
            style={{
              backgroundColor: "var(--primary-hover-black)",
              color: "var(--white-text-color)",
              fontWeight: "500",
            }}
          >
            SEE PRODUCT
          </ButtonComponent>
          </Link>
        </div>
      </div>
    </Background>
  );
};

export default FeaturedProduct;
const Background = styled.div`
  height: 44rem;
  position: relative;
  background: var(--primary-Orange);
  margin-top: 15rem;
  border-radius: 5px;
  @media screen and (min-width: 200px) and (max-width: 820px) {
    .pattern-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .image-text {
    position: absolute;
    top: 12rem;
    gap: 15rem;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @media screen and (min-width: 200px) and (max-width: 820px) {
      display: block;
      top: 4rem;
      text-align: center;
      img {
        height: 10rem;
      }
    }

    .text-button {
      width: 30%;
      h1 {
        font-size: 6rem;
        color: var(--white-text-color);
        line-height: 6rem;
      }
      p {
        color: var(--white-text-color);
        padding: 2rem 0 2rem 0;
        font-size: 1.3rem;
      }
      @media screen and (min-width: 200px) and (max-width: 820px) {
        width: 80%;
        margin: 0 auto;
        padding-top:2rem;
        h1 {
          font-size: 4rem;
          line-height: 5rem;
        }
      }
        @media screen and (min-width: 540px) and (max-width: 820px) {
        width: 54%;
      
        }
      }
    }
  }
`;
