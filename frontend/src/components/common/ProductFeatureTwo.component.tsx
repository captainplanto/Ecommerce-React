import React from "react";
import styled from "styled-components";
import ButtonComponent from "./button.component";
import background from "../../assets/home/desktop/image-speaker-zx7.jpg";
import backgroundTablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import backgroundMobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";

const FeaturedProductTwo = () => {
  return (
    <OuterDiv>
      <img src="/assets/home/desktop/image-speaker-zx7.jpg" alt="backgroundImage" className="desktop-image" />
      <img
        src={"/assets/home/tablet/image-speaker-zx7.jpg"/*backgroundTablet*/}
        alt="backgroundImage"
        className="tablet-image"
      />
      <img
        src={"/assets/home/mobile/image-speaker-zx7.jpg"/*backgroundMobile*/}
        alt="backgroundImage"
        className="mobile-image"
      />
      <div className="inner-content">
        <h1>ZX7 SPEAKER</h1>
       <Link to='product/5'> <ButtonComponent style={button}>SEE PRODUCT</ButtonComponent> </Link>
      </div>
    </OuterDiv>
  );
};
export default FeaturedProductTwo;
const OuterDiv = styled.div`
  position: relative;
  margin-top: 8rem;
  img {
    width: 100%;
    border-radius: var(--border-radius);
  }
  .tablet-image {
    display: none;
  }
   .mobile-image {
    display: none;
  }
  @media screen and (max-width: 820px) {
    .tablet-image {
      display: block;
    }
    .desktop-image {
      display: none;
    }
    .mobile-image{
       display: none;
    }
  }
  @media screen and (max-width: 480px) {
    .desktop-image {
      display: none;
    }
    .tablet-image {
      display: none;
    }
    .mobile-image{
    display: block;
    } 
  }

  .inner-content {
    position: absolute;
    width: 40%;
    top: 8rem;
    @media screen and (max-width: 820px) {
      top: 9rem;
     left:3rem;
    }

      @media screen  and (max-width: 480px) {
      top: 12rem;
      width: 80%;
       left:0;
     
    }
    text-align: center;
    h1 {
      font-size: 2.5rem;
      letter-spacing: 4px;
      padding-bottom: 2rem;
    }
  }
`;

const button = {
  color: "var( --primary-hover-black)",
  border: "1px solid var(--border-outline)",
  background: "none",
  fontWeight: "800",
};
