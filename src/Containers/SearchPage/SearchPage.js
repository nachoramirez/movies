import styled from "styled-components";

export const SearchPageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const SearchTile = styled.h1`
  padding-left: 20px;
  align-self: ${props => props.center ? 'center':'start'};
  color: white;
  font-size: 1.9rem;
`;

export const Image = styled.img`
  height: 40vh;
  justify-self: center;
`;
