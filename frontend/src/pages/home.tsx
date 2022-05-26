import React from "react";
import HeaderComponent from "../components/common/Header.component";
import CategoryComponent from "../components/common/Category.component";
import FeaturedProduct from "../components/common/ProductFeatureOne.component";
import FeaturedProductTwo from "../components/common/ProductFeatureTwo.component";
import FeaturedProductThree from "../components/common/ProductFeatureThree.component";
import AudioGearComponent from "../components/common/AudioGear.component";
import styled from "styled-components";
import FooterComponent from "../components/common/Footer.component";
import CartPage from "./cart";
import BackDropDialog from "../components/common/BackDrop.component";

const Homepage = () => {
  return (
    <div>
      <HeaderComponent />
      <WidthStyle>
        <CategoryComponent />
        <FeaturedProduct />
        <FeaturedProductTwo />
        <FeaturedProductThree />
        <AudioGearComponent />
      </WidthStyle>
      <FooterComponent />
     
     
    </div>
  );
};

export default Homepage;
const WidthStyle = styled.div`
  width: 75%;
  @media screen and (max-width: 820px) {
    width: 85%;
  }
  margin: 0 auto;
`;
