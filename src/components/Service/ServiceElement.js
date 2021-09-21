import styled from "styled-components";

export const ServiceContainer = styled.div`
  height: 740px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: #f9f9f9; */
  background: ${({ bgColor }) => (bgColor ? "#f9f9f9" : "#f9f9f9 ")};

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 500px) {
    height: 1300px;
  }
`;

export const ServiceWrapp = styled.div`
  max-width: 1000px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 56px;
  padding: 0 80px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 0 20px;
    grid-gap: 50px;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  background: #f9f9f9;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  min-height: 300px;
  padding: 30px;
  border: 1px solid #d3e0ea;
  box-shadow: 0 0.4px 5.2px -2px rgba(0, 0, 0, 0.031),
    0 1px 21.8px -2px rgba(0, 0, 0, 0.044),
    0 1.9px 51.2px -2px rgba(0, 0, 0, 0.055),
    0 3.4px 71.6px -2px rgba(0, 0, 0, 0.066),
    0 6.3px 80px -2px rgba(0, 0, 0, 0.079), 0 15px 82px -2px rgba(0, 0, 0, 0.11);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 676px) {
    max-height: 300px;
    /* max-width: 300px; */
    padding: 0 auto;
  }

  /* &:hover {
    transform: scale(1.08);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;

export const ServiceIcon = styled.img`
  height: 280px;
  width: 280px;
  margin-bottom: 34px;
`;

export const ServiceH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #000;

  @media screen and (max-width: 660px) {
    font-size: 2rem;
    margin-top: 100px;
  }
`;

export const ServiceTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;
`;
