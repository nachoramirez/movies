import styled from "styled-components";
import { Container } from "../Containers";

export const SearchPageContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270 px, 1fr));
  align-items: center;
`;

export const SearchTile = styled.h1`
  padding-left: 20px;
  align-self: start;
  color: white;
  font-size: 1.9rem;
`;

export const Image = styled.img`
  height: 40vh;
  justify-self: center;
`;
