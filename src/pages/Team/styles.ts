import styled from "styled-components";

export const CarouselContainer = styled("div")`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0 1rem;
}`

export const TaleContainer = styled("div")`
  position: relative;
  padding: 2rem 0 2rem;
  margin-bottom: 10%;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 0 1rem;
`

export const TaleTitle = styled("h6")`
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  text-align: center;
`;

export const TalePara = styled("p")`
  font-size: 15px;
  text-align: justify;
`;
