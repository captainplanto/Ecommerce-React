import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "../../components/common/Navbar.component";

interface ITitle{
 // isTrue?:boolean;
  isEarphone?:boolean;
  isSpeaker?:boolean;
  isHeadphone?:boolean;
}


const CategoryNavbarComponent:FC<ITitle> = ({isSpeaker, isEarphone, isHeadphone}) => {
  
  return (
  
    <Heading>
      <Navbar style={{ paddingBottom: "14rem", background: "black", zIndex: "-1" }}>
        <h1 className={window.innerWidth > 820 ? "heading-desktop" : "heading-mobile"} >
         { isHeadphone ? 'HEADPHONES' : isSpeaker ? 'SPEAKER' : isEarphone ? 'EARPHONES' :'' }
        </h1>
      </Navbar>
    </Heading>
  );
};
export default CategoryNavbarComponent;
const Heading = styled.div`
  .heading-desktop,
  heading-mobile {
    display: flex;
    justify-content: center;
    color: white;
    letter-spacing: 3px;
    font-size: 2.5rem;
  }

  .heading-mobile {
    margin-top: 12rem;
  }
`;
