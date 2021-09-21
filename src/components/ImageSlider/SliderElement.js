import styled from "styled-components";
import About from "../../images/about-jahe.png";

export const SliderContainer = styled.div`
  /* background: #28df99; */
  padding: 50px;
  display: flex;
  justify-content: center;
`;

export const SliderWrapp = styled.div`
  width: 100vw;
  padding: 50px 84px;
  z-index: 0;
`;

export const SlideKonten = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
`;

export const SlideImage = styled.img`
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  @media screen and (max-width: 468px) {
    height: 250px;
    width: 250px;
    border-radius: 8px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
