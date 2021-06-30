import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const SynopsisContainer = styled(Container)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 15px;
  border-radius: 5px;;
  height: 65vh;
  background-image: linear-gradient(0deg, #001b5b 20.17%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.img});
  background-size: cover;
  color: white;
  padding: 40px;
  text-align: justify;
`
export const MovieTitle = styled.h1`
  margin: 0;
  font-size: 2.9rem;
`

export const MovieSynopsis = styled.p`
  font-size: 1.3rem;
`