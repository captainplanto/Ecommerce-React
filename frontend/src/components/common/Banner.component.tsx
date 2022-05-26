import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./button.component";
//import BannerExtra from "./BannerExtra.component";
import { Link } from "react-router-dom";

const Banner = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <BannerStyle>
      <img
        src={
          window.innerWidth > 820
            ? "/assets/home/desktop/image-hero.jpg"
            : window.innerWidth > 480
            ? "/assets/home/tablet/image-header.jpg"
            : "/assets/home/mobile/image-header.jpg"
        }
        alt={"hero-banner"}
      />
      <OutterDiv >
        <div className="inner-div">
          <div className="flex-one">
            <h6>New Product</h6>
            <h1>XX 99 MARK II HEADPHONES</h1>
            <h2>
              Experience Natural, lifelike Audio and exceptional buid quality
              made for the passionate music enthusiast.
            </h2>

            <Link to={"/product/3"}>
              <ButtonComponent>SEE PRODUCT</ButtonComponent>
            </Link>
          </div>

          <div className="extra-banner-text" onClick={() => setState(!state)}>
            <div>
            <div>
            {/*{!state && <BannerExtra />}
              <img
                src={"/assets/home/desktop/icon-plus-banner.png"}
                alt="iconplus"
              />*/} 
              </div>
            </div>
          </div>
         
        </div>
       
      </OutterDiv>
    </BannerStyle>
  );
};

export default Banner;

const BannerStyle = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -2;
    position: relative;
    top: 0;
  }
`;

const OutterDiv = styled.div`
  margin-left: 12%;
  @media screen and (min-width: 200px) and (max-width: 820px) {
    text-align: center;
    margin-left: 0;
  }
  margin-top: 10rem;
  .inner-div {
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin: 0 auto;
    position: absolute;
    top: 20rem;
    width: 50%;
    @media screen and (max-width: 1500px) {
      width: 80%;
    }
    @media screen and (max-width: 820px) {
      width: 99%;
      text-align: center;
      justify-content: center;
    }

    @media screen and (max-width: 480px) {
      width: 99%;
    }
    .extra-banner-text {
      align-self: center;
      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }

      @media screen and (max-width: 820px) {
        display: none;
      }
    }
    .flex-one {
      width: 46%;
      @media screen and (min-width: 200px) and (max-width: 480px) {
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
      }

      @media screen and (min-width: 481px) and (max-width: 820px) {
        width: 65%;
        justify-content: center;
        text-align: center;
      }

      @media screen and (min-width: 821px) and (max-width: 1500px) {
        width: 45%;
      }
    }
    h1 {
      color: var(--white-text-color);
      font-size: 4rem;
      font-weight: 500;
      letter-spacing: 3px;
      word-wrap: break-word;
      @media screen and (min-width: 200px) and (max-width: 820px) {
        word-wrap: normal;
      }
      line-height: 4rem;
      padding: 1.5rem 0;
    }

    h2 {
      word-wrap: break-word;
      font-size: 1.2rem;
      font-weight: 400;
      padding-bottom: 2rem;
    }

    h2,
    h6 {
      color: var(--primary-gray-color);
    }

    h6 {
      letter-spacing: 9px;
      font-size: 1.5rem;
      font-weight: 100;
    }
  }
`;
