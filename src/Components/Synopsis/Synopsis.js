import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const SynopsisContainer = styled(Container)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 15px;
  border-radius: 5px;
  height: 65vh;
  background-image: linear-gradient(0deg, #001b5b 20.17%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.img});
  background-size: cover;
  color: white;
  padding: 40px;
  text-align: justify;

  @media (max-width: 768px) {
    background-position: center;
    margin: 0;
  }
`
export const MovieTitle = styled.h1`
  margin: 0;
  font-size: 2.9rem;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 2.5rem;
  }
`

export const MovieSynopsis = styled.p`
  font-size: 1.3rem;

  @media (max-width: 768px) {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
