import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const MovieCardContainer = styled(Container)`
  flex: 0 0 250px;
  height: 100%;
  border-radius: 20px;
  margin: 0 0 0 20px;
  transition: transform 300ms ease 100ms;
  transform-origin: center left;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.93) 17.09%,
      rgba(68, 69, 84, 0) 100%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    transform: scale(1.13);
  }

  &:hover ~ & {
    transform: translate3d(20%, 0, 0);
  }

  @media (max-width: 768px) {
    flex: 0 0 150px;
    height: 100%;
    border-radius: 20px;
  }
`

export const ItemInfo = styled.div`
  padding: 15% 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const ItemTitle = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ItemRatingImage = styled.img`
  height: 30px;
`

export const ItemRating = styled.div`
  display: flex;
  align-items: center;
`

export const ItemRatingValue = styled.h1`
  font-size: 1.5rem;
  margin: 0 10px;
`
