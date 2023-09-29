import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const ValuesWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const ValuesTitle = styled("h5")`
  font-size: 17px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  font-weight: bold;
`;

export const MinPara = styled("p")`
  font-size: 13px;
  font-weight: bold;
`;

export const ValuesPara = styled("p")`
  font-size: 15px;
`;


