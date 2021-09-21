import styled from "styled-components";

export const KomposisiContainer = styled.div`
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 60px; */
  background: ${({ bgColor }) => (bgColor ? "#f9f9f9" : "#f9f9f9 ")};

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 500px) {
    height: 1300px;
  }
`;
export const KomposisiWrapp = styled.div`
  display: grid;
  margin-top: 120px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  margin: 20px 120px;
  grid-gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 80px;
    margin: 40px 20px;
    background: red;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 40px 20px;
    background: green;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  padding: 40px;
`;

export const KomposisiCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  min-height: 200px;

  /* border: 1px solid #d3e0ea;
  box-shadow: 0 0.4px 5.2px -2px rgba(0, 0, 0, 0.031),
    0 1px 21.8px -2px rgba(0, 0, 0, 0.044),
    0 1.9px 51.2px -2px rgba(0, 0, 0, 0.055),
    0 3.4px 71.6px -2px rgba(0, 0, 0, 0.066),
    0 6.3px 80px -2px rgba(0, 0, 0, 0.079), 0 15px 82px -2px rgba(0, 0, 0, 0.11); */

  @media screen and (max-width: 676px) {
    max-height: 300px;
    /* max-width: 300px; */
    padding: 0 auto;

    @media screen and (max-width: 1100px) {
      /* margin-top: 1px; */
    }
  }

  /* &:hover {
    transform: scale(1.08);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } 
  */
`;

export const TitleKomposisi = styled.h1`
  font-size: 18px;
  color: #1b1a17;
`;

export const DescKomposisi = styled.p`
  text-align: start;
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #252525;
`;
