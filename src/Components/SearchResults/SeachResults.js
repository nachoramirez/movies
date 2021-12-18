import styled from "styled-components";
import { Container } from "../../Containers/Containers";

export const SearchResultsContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 17%);
`;

export const SearchCard = styled.div`
  margin: 20px 7px;
  width: 100%;
  height: 34vh;
`;
