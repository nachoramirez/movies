import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const MovieInfoContainer = styled(Container)`
  justify-content: space-between;
  padding: 0 20px 0 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Category = styled.button`
  height: 70px;
  width: 170px;
  background: none;
  border-radius: 50px;
  border: 2px solid #9bf2d6;
  cursor: pointer;
  margin: 5px 10px;

  @media (max-width: 768px) {
    height: 70px;
    width: 95%;
    margin: 10px 0;
  }
`


export const MoreInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 600px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    padding: 0;
  }
`

export const CategoryTitle = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
`
