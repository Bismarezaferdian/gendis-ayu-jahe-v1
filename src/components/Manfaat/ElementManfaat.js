import styled from "styled-components";

export const ManfaatContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  /* min-height: 240px; */
  /* margin-left: 80px;
  margin-right: 80px; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ManfaatWrapp = styled.div`
  /* background: red; */
  display: grid;
  justify-content: center;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 15px;
  margin: 0 auto;
`;
export const ManfaatCard = styled.div`
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  min-height: 140px;
  max-width: 40;
  padding: 1rem;
  box-shadow: 0 0.4px 5.2px -2px rgba(0, 0, 0, 0.031),
    0 1px 21.8px -2px rgba(0, 0, 0, 0.044),
    0 1.9px 51.2px -2px rgba(0, 0, 0, 0.055),
    0 3.4px 71.6px -2px rgba(0, 0, 0, 0.066),
    0 6.3px 80px -2px rgba(0, 0, 0, 0.079), 0 15px 82px -2px rgba(0, 0, 0, 0.11);
`;

export const TextDesc = styled.p``;
