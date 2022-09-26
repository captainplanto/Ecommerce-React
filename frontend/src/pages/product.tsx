import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar.component";
import styled from "styled-components";
import ButtonComponent from "../components/common/button.component";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import CategoryComponent from "../components/common/Category.component";
import AudioGearComponent from "../components/common/AudioGear.component";
import FooterComponent from "../components/common/Footer.component";

import {
  ADD_TO_CART,
  CALCULATE_TAX,
  DECREASE_QTY,
  GET_CART_COUNT,
  GET_SUBTOTAL,
  GET_TOTAL_AMOUNT,
  INCREASE_QTY,
} from "../redux/features/cart";
import { useAppDispatch, useAppSelector } from "../redux/stores/hooks";

import { IData } from "../type";
import { Link, useParams } from "react-router-dom";
import { URL } from "../const/constant";
const Productrender = () => {
  const { data, loading } = useFetch({ api: "/seeding/data.json" });
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState<IData>();
  const { totalCount } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (id && data) {
      const resp = data.find((item) => item.id === parseInt(id));
      setProduct(resp);
    }
  }, [id, data]);

  if (loading || product === undefined) {
    return <CircularProgress />;
  } else {
    const {
      image,
      id,
      name,
      description,
      price,
      unit,
      includes,
      gallery,
      others,
      features,
    }: IData = product;

    return (
      <HeadPhoneContainer>
        <Navbar style={{ backgroundColor: "black" }} />
        <WidthStyle>
          <div className="category-container">
            <div key={id}>
              <div className="category">
                <img
                  src={
                    window.innerWidth > 820
                      ? image.desktop
                      : window.innerWidth > 480
                      ? URL + image.tablet
                      : image.mobile
                  }
                  alt="category"
                />
                <div className="name-description">
                  <div className="h1-div">
                    <h1 className="product-name">{name.toUpperCase()}</h1>
                  </div>
                  <p>{description}</p>
                  <h2>$ {price}</h2>
                  <div className="counter-cart">
                    <div className="counter-styling">
                      <h3
                        onClick={() => {
                          dispatch(DECREASE_QTY(id));
                          dispatch(GET_CART_COUNT());
                          dispatch(GET_TOTAL_AMOUNT());
                          dispatch(GET_SUBTOTAL());
                          dispatch(CALCULATE_TAX());
                        }}
                      >
                        -
                      </h3>
                      <h5>{totalCount}</h5>
                      <h3
                        onClick={() => {
                          dispatch(INCREASE_QTY(id));
                          dispatch(GET_CART_COUNT());
                          dispatch(GET_TOTAL_AMOUNT());
                          dispatch(GET_SUBTOTAL());
                          dispatch(CALCULATE_TAX());
                        }}
                      >
                        +
                      </h3>
                    </div>
                    <ButtonComponent
                      onClick={() =>
                        dispatch(ADD_TO_CART({ id, image, price, unit }))
                      }
                    >
                      ADD TO CART
                    </ButtonComponent>
                  </div>
                </div>
              </div>
              <div className="product-features">
                <div className="feature">
                  <h1>FEATURES</h1>
                  <p>{features}</p>
                </div>
                <div className="mobile-display">
                  <h1>IN THE BOX</h1>
                  <div>
                    {includes.map(({ quantity, item }, index) => (
                      <div>
                        <li key={item}>
                          <span>{quantity}x</span> {item}
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/*   Grid images for each products is being rendered here; the styled component for this as well is at the end of this page   */}

              <GridContainer>
                <div className="div-1">
                  <img
                    src={
                      window.innerWidth > 820
                        ? URL + gallery.third.desktop
                        : window.innerWidth > 480
                        ? URL + gallery.third.tablet
                        : gallery.third.mobile
                    }
                    alt="grid"
                  />
                </div>
                <div className="div-2">
                  <img
                    src={
                      window.innerWidth > 820
                        ? URL + gallery.first.desktop
                        : window.innerWidth > 480
                        ? URL + gallery.first.tablet
                        : gallery.first.mobile
                    }
                    alt="grid"
                  />
                </div>
                <div className="div-3">
                  <img
                    src={
                      window.innerWidth > 820
                        ? URL + gallery.second.desktop
                        : window.innerWidth > 480
                        ? URL + gallery.second.tablet
                        : gallery.second.mobile
                    }
                    alt="grid"
                  />
                </div>
              </GridContainer>

              <Others>
                <h1>YOU MAY ALSO LIKE</h1>
                <OthersContainer>
                  {others.map(({ name, image, slug }) => (
                    <div>
                      <img
                        src={
                          window.innerWidth > 820
                            ? URL + image.desktop
                            : window.innerWidth > 480
                            ? URL + image.tablet
                            : image.mobile
                        }
                        alt="others-images"
                      />
                      <p>{name}</p>
                      <Link to={`/product/${slug}/${id}`}>
                        <ButtonComponent>SEE PRODUCT</ButtonComponent>
                      </Link>
                    </div>
                  ))}
                </OthersContainer>
              </Others>
            </div>
          </div>

          <CategoryComponent />
          <AudioGearComponent />
        </WidthStyle>
        <FooterComponent />
      </HeadPhoneContainer>
    );
  }
};

export default Productrender;
const HeadPhoneContainer = styled.div`
  margin-top: 16rem;
  h1 {
    text-align: center;
    font-size: 2rem;
  }
  .product-name {
    text-align: left;
  }
  .heading-desktop {
    color: white;
    margin-top: 4rem;
    letter-spacing: 4px;
  }

  .heading-mobile {
    color: white;
    margin-top: 10rem;
    letter-spacing: 3px;
  }
  .category-container {
    margin-top: 25rem;

    margin: 0 auto;
  }

  .category {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    padding-bottom: 8rem;
    img {
      width: 500px;
      object-fit: contain;
      @media screen and (max-width: 820px) {
        width: 250px;
        object-fit: contain;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
        object-fit: contain;
      }
    }

    @media screen and (max-width: 820px) {
      width: 100%;
      justify-content: space-between;
    }

    @media screen and (max-width: 480px) {
      display: block;
      width: 100%;
    }

    .name-description {
      width: 35%;
      @media screen and (max-width: 820px) {
        width: 50%;
      }
      @media screen and (max-width: 480px) {
        width: 90%;
      }
      .h1-div {
        width: 65%;
        h1 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          letter-spacing: 3px;
        }
      }
      p {
        font-size: 1.2rem;
        margin-bottom: 3rem;
      }
      .counter-cart {
        width: 80%;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 820px) {
          gap: 1rem;
          width: 80%;
        }
      }
      .counter-styling {
        width: 10rem;
        justify-content: space-around;
        display: flex;
        align-items: center;
        background: var(--primary-gray-color);
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  .product-features {
    width: 90%;

    display: flex;
    margin-bottom: 8rem;
    justify-content: space-between;
    font-size: 2rem;
    .feature {
      width: 60%;

      p {
        font-size: 1.2rem;
        line-height: 2.5rem;
        white-space: pre-line;
        vertical-align: bottom;
      }
    }
    h1 {
      text-align: left;
    }
    .mobile-display {
      ul {
        list-style: none;
        line-height: 2.5rem;
        li {
          font-size: 1.2rem;
        }

        span {
          color: var(--primary-Orange);
          margin-right: 1rem;
        }
      }
      @media screen and (max-width: 820px) {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin-top: 4rem;
      }
    }

    @media screen and (max-width: 820px) {
      display: block;
      .feature {
        width: 100%;
      }
    }
  }
`;

const WidthStyle = styled.div`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 820px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const GridContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  margin-bottom: 8rem;
  margin-top: 8rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
  }
  .div-1 {
    grid-area: 1 / 2 / 3 / 3;
    img {
      object-fit: contain;
      border-radius: var(--border-radius);
      @media screen and (max-width: 820px) {
        width: 100%;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }
  .div-2 {
    grid-area: 1 / 1 / 2 / 2;
    img {
      object-fit: contain;
      border-radius: var(--border-radius);
      @media screen and (max-width: 820px) {
        width: 100%;
      }
      @media screen and (max-width: 480px) {
        width: 100%;

        margin: 2rem 0 2rem 0;
      }
    }
  }
  .div-3 {
    grid-area: 2 / 1 / 3 / 2;

    img {
      border-radius: var(--border-radius);
      object-fit: contain;

      @media screen and (max-width: 820px) {
        width: 100%;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }
`;

const Others = styled.div`
  margin-top: 10rem;
  h1 {
    margin-bottom: 4rem;
    font-size: 2.5rem;
    font-weight: 800;
  }
`;

const OthersContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 12rem;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    width: 100%;
  }

  img {
    width: 350px;
    object-fit: contain;
    margin-bottom: 2rem;
    border-radius: var(--border-radius);
    @media screen and (max-width: 820px) {
      width: 15rem;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-top: 4rem;
    }
  }
  p {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 4px;
    margin-bottom: 2rem;
    @media screen and (max-width: 480px) {
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
  }
`;
