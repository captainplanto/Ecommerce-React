import React, { useRef, useEffect, FC } from "react";
import scrollReveal from "scrollreveal";
import styled from "styled-components";
//import "./ScrollReveal.css";

interface ScrollRevealProps {
  style?: object;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, style }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        delay: 500,
        cleanup: true,
        easing: "ease-in-out",
        origin: "left",
        distance: "250px",
       //  desktop:true,
        mobile: false,
       
      });
  }, []);

  return (
    <Scroll
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </Scroll>
  );
};

export default ScrollReveal;

const Scroll = styled.section``;
