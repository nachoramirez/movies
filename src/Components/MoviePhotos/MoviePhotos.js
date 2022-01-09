import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const MoviePhotosContainer = styled(Container)`
  margin: 10px;
  justify-content: flex-start;

  @media (max-width:768px){
    flex-direction: column;
  }
`

export const MovieImages = styled.div`
  height: 300px;
  width: 300px;
  margin: 0 20px;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px){
    margin: 20px;
  }

`

export const MoviePhotosTitle = styled.h1`
    margin: 10px 40px;
    color: white;
`