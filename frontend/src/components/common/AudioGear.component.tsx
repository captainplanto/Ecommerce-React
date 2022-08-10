import React, { FC } from "react";
import styled from "styled-components";
import { IStyle } from "../../type";
import ScrollReveal from "../../scrollreveal/ScrollReveal";
const AudioGearComponent: FC<IStyle> = ({ style }) => {
  return (
    <ScrollReveal>
      <Container style={{ ...style }}>
        <div className="content-container">
          <h1>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <img
          src={
            window.innerWidth < 768
              ? "/assets/shared/mobile/image-best-gear.jpg"
              : window.innerWidth < 821
              ? "/assets/shared/tablet/image-best-gear.jpg"
              : window.innerWidth > 821
              ? "/assets/shared/desktop/image-best-gear.jpg"
              : ""
          }
          alt="images"
        />
      </Container>
    </ScrollReveal>
  );
};
export default AudioGearComponent;
const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 820px) {
    display: block;
  }

  img {
    width: 49%;
    object-fit: contain;
    order: 2;
    border-radius: var(--border-radius);
    @media screen and (max-width: 820px) {
      order: 1;
      width: 100%;
    }
  }

  .content-container {
    width: 40%;
    order: 1;
    @media screen and (max-width: 820px) {
      order: 2;
      width: 100%;
      text-align: center;
      margin-bottom: 5rem;
    }

    h1,
    span {
      font-size: 3.5rem;
      @media screen and (max-width: 820px) {
        font-size: 2.9rem;
      }
      margin-bottom: 2rem;
      letter-spacing: 2px;
      span {
        color: var(--primary-Orange);
      }
    }

    p {
      font-size: 1.3rem;
      color: var(--Line-stroke);
      line-height: 2.5rem;
    }
  }
`;
