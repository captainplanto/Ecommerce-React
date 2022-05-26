import Background from "../../components/common/Background.component";
import styled from "styled-components";
//import iconArrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { FC } from "react";
import {  IStyle } from "../../type";

const categoriesInfo: { id: number; category: string; image: string, path:string }[] = [
  {
    id: 1,
    category: "HEADPHONES",
    image: "/assets/shared/desktop/image-headphones.png",
    path: '/headphones',
  },

  {
    id: 2,
    category: "SPEAKERS",
    image: "/assets/shared/desktop/image-speakers.png",
      path: '/speakers',
  },

  {
    id: 3,
    category: "EARPHONES",
    image: "/assets/shared/desktop/image-earphones.png",
      path: '/earphones',
  },
];


const CategoryComponent:FC<IStyle> = ({style, ...props}) => {


  return (
    <>
      <Category  style={{ ...style}}>
        {categoriesInfo.map(({ id, category, image, path }) => (
          <div className="space-div" key={id}>
            <StyleBackground  >
              <Image
                src={image}
                alt="Category-images"
                aria-label="Category-Images"
              />
              <div className="title">
                <h1>{category}</h1>
                <Link to ={path}><div className="view-category">
                  <h4>SHOP</h4>
                  <img src={'/assets/shared/desktop/icon-arrow-right.svg'} alt="View product" />
                </div></Link>
              </div>
            </StyleBackground>
          </div>
        ))}
      </Category>
    </>
  );
};
export default CategoryComponent;

const Category = styled.div`
  .space-div {
    @media screen and (max-width: 480px) {
      margin-top: 10rem;
    }
  }
  display: flex;
  gap: 3rem;
  margin-top: 8rem;
  text-align: center;
  justify-content: center;
  .view-category {
    padding-top: 18px;
    img {
      object-fit: contain;
    }
    h4 {
      color: black;
      letter-spacing: 1.5px;
      :hover {
        color: var(--primary-Orange);
        cursor: pointer;
      }
    }
  }
  h1 {
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 820px) {
    gap: 6rem;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
  .title {
    transform: translate(0, -60px);
    @media screen and (max-width: 480px) {
      transform: translate(0, -80px);
    }
  }
`;

const Image = styled.img`
  height: 150px;
  object-fit: contain;
  transform: translate(0, -60px);
`;


const StyleBackground =styled(Background)`
@media screen and (max-width:480px){

width:100%;



}


`