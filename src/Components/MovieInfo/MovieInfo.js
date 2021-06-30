import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const MovieInfoContainer = styled(Container)`
  justify-content: space-between;
  padding: 0 20px 0 40px;
`
export const Category = styled.button`
  height: 60px;
  width: 150px;
  background: none;
  border-radius: 50px;
  border: 2px solid #9bf2d6;
  color: white;
  font-weight: 300;
  font-size: 22px;
  margin: 1px 10px;
  cursor: pointer;
`
export const MoreInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 500px;
`
export const Info = styled.h1`
  color: white;
  margin: 40px 0 0 0;
  padding-bottom: 15px;
  border-bottom: 4px solid #9bf2d6;
  font-size: 1.6rem;
`

export const Trailer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 40%;
  padding-left: 20px;
  height: 100%;
`
