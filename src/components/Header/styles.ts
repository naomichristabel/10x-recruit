import styled from "styled-components";
import { Link,  NavLink as BaseNavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

// export const NavLink = styled("div")`
//   display: inline-block;
//   text-align: center;
// `;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #303030;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const NavLink = styled(BaseNavLink)`
  display: flex-end;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  color: "#303030";
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  width: 203px;

  &.active {
    font-weight: bold;
  }

  &.hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .navbar{
      display:none;
    }
  }
`;

export const StyledLi = styled.li`
  list-style: none;
  display: inline-block;
  border-radius: 5px;

  &:hover,
  ${NavLink}.active {
    border-radius: 5px;
    color: rgb(228, 4, 4);
    text-underline-position: under;
  }
`;

// export const CustomNavLinkSmall = styled(NavLink)`
//   font-size: 1.2rem;
//   color: #303030;
//   transition: color 0.2s ease-in;
//   margin: 0.5rem 2rem;

//   @media only screen and (max-width: 768px) {
//     margin: 1.25rem 2rem;
//   }
// `;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;

  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

// export const Span = styled("span")`
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover,
//   &:active,
//   &:focus {
//     color: rgb(228, 4, 4);
//     text-underline-position: under;
//   }
// `;
