import { FC } from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/common/button.component";
import CategoryComponent from "../../components/common/Category.component";
import AudioGearComponent from "../../components/common/AudioGear.component";
import FooterComponent from "../../components/common/Footer.component";
import { Link } from "react-router-dom";
import { IData } from "../../type";
import { URL } from "../../const/constant";
interface ICollect {
  data: IData[];
}
const Collection: FC<ICollect> = ({ data }) => {
  return (
    <>
      <HeadPhoneContainer>
        <div className="category-container">
          {data?.map(
            ({
              category,
              image,
              id,
              name,
              description,
              price,
              new: boolean,
              includes,
              gallery,
              others,
              slug,
              features,
            }: IData) => (
              <div key={id} className="catego">
                <div className="category">
                  <img
                    src={
                      window.innerWidth > 820
                        ? image.desktop
                        : window.innerWidth > 480
                        ?  image.tablet
                        :  image.mobile
                    }
                    alt="category"
                  />

                  <div className="name-description">
                    <div className="h1-div">
                      <h1 className="product-name">{name.toUpperCase()}</h1>
                    </div>
                    <p>{description}</p>

                    <Link to={`/product/${id}`}>
                      <ButtonComponent>SEE PRODUCT</ButtonComponent>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <WidthStyle>
          <CategoryComponent style={{ marginBottom: "20rem" }} />
          <AudioGearComponent style={{ marginBottom: "20rem" }} />
        </WidthStyle>
        <FooterComponent />
      </HeadPhoneContainer>
    </>
  );
};

export default Collection;
const HeadPhoneContainer = styled.div`
  margin-top: 6rem;
  h1 {
    text-align: center;
    font-size: 2rem;
  }
  .product-name {
    text-align: justify;
  }

  .category-container {
    margin-top: 25rem;
  }

  .category {
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    padding-bottom: 10rem;
    img {
      width: 500px;
      object-fit: contain;
      border-radius: var(--border-radius);
      @media screen and (max-width: 820px) {
        width: 90vw;
      }
    }
    .name-description {
      width: 35%;

      .h1-div {
        width: 55%;
        h1 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          letter-spacing: 2px;
        }
      }
      p {
        font-size: 1.2rem;
        margin-bottom: 3rem;
      }

      @media screen and (max-width: 820px) {
        width: 80vw;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        .h1-div {
          margin: 0 auto;
          h1 {
            text-align: center;
            margin-top: 4rem;
          }
        }
      }
    }

    @media screen and (max-width: 820px) {
      width: 95%;
      display: block;
      padding-bottom: 18rem;

      text-align: center;
    }
  }
`;

const WidthStyle = styled.div`
  width: 75%;
  @media screen and (max-width: 820px) {
    width: 85%;
  }
  margin: 0 auto;
`;
