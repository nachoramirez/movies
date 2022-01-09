import styled from 'styled-components'

export const SearchResultsContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 17%);

  @media (max-width: 768px){
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fill, 45%);
  }
`

export const SearchCard = styled.div`
  margin: 10px 4px;
  width: 100%;
  aspect-ratio: 1/1.5;
`
