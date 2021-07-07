import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const ProductWrapper = styled.div`
  color: black;
  text-decoration: none;
  text-align: center;

  img {
    width: 12em;
    height: 12em;
  }

  p {
    &.product-name {
      color: white;
    }

    &.product-price {
      color: pink;
    }
  }
`;

export const CreateButtonStyled = styled.button`
  color: yellowgreen;
  background-color: green;
  &:hover {
    color: gray;
    background-color: grey;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: fuchsia;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    background-color: greenyellow
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const SignupButton = styled(Link)`
  width: 8rem;
`;

export const Logo = styled(Link)`
  img {
    width: 8rem;
  }
`;

export const NavStyled = styled.nav`
  background-color: purple;
`;

export const NavItem = styled(NavLink)`
  color: peru;
  padding: 0.25em 1em;

  &.active {
    color: powderblue;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: grey;
  color: gray;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const BakeryItemImage = styled.img`
  width: 20em;
`;
