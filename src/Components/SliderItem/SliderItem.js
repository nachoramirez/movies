import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const SliderItemContainer = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 27, 91, 0.6), rgba(0, 27, 91, 0.6)),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const SliderInfo = styled(Container)`
  padding: 20px 10%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const SliderInfoTitle = styled.h1`
  font-size: 4.1rem;
  font-weight: bolder;
  margin: 20px 0;

  @media (max-width: 768px)  {
    font-size: 3.1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const SliderInfoDescription = styled.p`
  font-size: 1.4rem;
  text-align: justify;
  @media (max-width: 768px) {
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const SliderNumbers = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`

export const RatingImage = styled.img`
  height: 44px;
  margin-right: 10px;
`

export const SliderNumbersValues = styled.h1`
  margin: 8px 20px 20px 0px;
  font-size: 1.8rem;
`

export const ViewMoreButton = styled.button`
  margin-top: 40px;
  background-color: #9bf2d6;
  border: none;
  border-radius: 50px;
  width: 250px;
  height: 70px;
  display: inline-block;
  cursor: pointer;
  color: #001b5b;
  font-size: 1.4rem;
  font-weight: 700;
`
