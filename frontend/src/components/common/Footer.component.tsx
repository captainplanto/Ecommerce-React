import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import logo from "../../assets/shared/desktop/logo.svg";


const NavItems: { name: string; path: string }[] = [
  { name: "HOME", path: "/" },
  { name: "HEADPHONES", path: "/headphones" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "EARPHONES", path: "/earphones" },
];

const SocialMediaIcons: { icon: string; id: number }[] = [
  {
    id: 1,
    icon: "/assets/shared/desktop/icon-facebook.svg",
  },
  {
    id: 2,
    icon: "/assets/shared/desktop/icon-instagram.svg",
  },
  {
    id: 3,
    icon: "/assets/shared/desktop/icon-twitter.svg",
  },
];

const FooterComponent = () => {
   const navBar = NavItems.map(({ name, path}, index) => (
    <Link to={path} key={index}>
     <li > {name}</li>
    </Link>
   ))
 
  return (
    <Footer>
      <div className="inner-width">
        <NavList role="navigation" aria-label="Main">
          <img src={"/assets/shared/desktop/logo.svg"} alt="website logo" />
          <ul>{navBar}</ul>
        </NavList>
        <div className="paragraph-icon">
          <div className="paragraph">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>

          <SocialIconList role="navigation" aria-label="Main">
            <span className="tablet-copyright">
              Copyright 2021. All Rights Reserved
            </span>
            <div>
              {SocialMediaIcons.map(({ icon, id }) => (
                <img src={icon} alt="images" key={id} />
              ))}
            </div>
          </SocialIconList>
        </div>
        <span className="desktop-copyright">
          Copyright 2021. All Rights Reserved
        </span>
      </div>
     
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.div`
  .inner-width {
    width: 75%;
    @media screen and (max-width: 820px) {
      width: 95%;
    }
    justify-content: center;
    margin: 0 auto;
  }

  .paragraph-icon {
    display: flex;
    width: 100%;
    margin-bottom: 5rem;
    justify-content: space-between;
    @media screen and (max-width: 820px) {
      display: block;
    }
  }
  .paragraph {
    width: 45%;
    @media screen and (max-width: 820px) {
      width: 95%;
    }
    p {
      font-size: 1.1rem;
      line-height: 2rem;
    }
  }
  background: var(--border-outline);
  margin-top: 12rem;
  width: 100%;
  padding: 2rem 2rem 8rem 2rem;
  p {
    color: var(--primary-gray-color);
    @media screen and (max-width: 480px) {
      text-align: center;
    }
  }
  .desktop-copyright {
    color: var(--primary-gray-color);
    @media screen and (max-width: 820px) {
      display: none;
    }
  }
`;
const NavList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 5rem;
  @media screen and (max-width: 820px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
  img {
    object-fit: contain;
  }
  ul {
    width: 40%;
    justify-content: space-between;
    letter-spacing: 2px;
    display: flex;
    list-style: none;
    color: var(--white-text-color);
    li {
      :hover {
        color: var(--primary-Orange);
        cursor: pointer;
      }
    }
    @media screen and (max-width: 820px) {
      width: 60%;
      justify-content: space-between;
      margin-top: 4rem;
    }
    @media screen and (max-width: 480px) {
      display: block;
      width: 95%;
      li {
        margin-bottom: 3rem;
      }
    }
  }
     a{
     list-style: none;
     text-decoration:none;
     color: var(--white-text-color);
  }
`;
const SocialIconList = styled.div`
  align-self: flex-end;
  img {
    margin-left: 1rem;
    :hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 820px) {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  @media screen and (max-width: 820px) {
    margin-top: 3rem;
    display: block;
    text-align: center;
    width: 90%;
  }
  .tablet-copyright {
    display: none;
    @media screen and (max-width: 820px) {
      display: block;
      color: white;
    }
      @media screen and (max-width: 480px) {
    margin-bottom: 3rem;
  
  }
  }
 
`;
