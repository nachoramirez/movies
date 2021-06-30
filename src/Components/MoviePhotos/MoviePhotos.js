import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const MoviePhotosContainer = styled(Container)`
  margin: 10px;
  justify-content: flex-start;
`

export const MovieImages = styled.div`
  height: 300px;
  width: 300px;
  margin: 0 20px;
  border-radius: 10px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`

export const MoviePhotosTitle = styled.h1`
    margin: 10px 40px;
    color: white;
`