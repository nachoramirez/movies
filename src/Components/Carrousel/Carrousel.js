import styled from 'styled-components'

export const CarrouselContainer = styled.div`
  padding: 60px 0;
  overflow: hidden;
  position: relative;
`

export const CarrouselWrapper = styled.div`
  display: flex;
  transform: translate3d(${(props) => -props.distance}px, 0, 0);
  transition: transform ${(props) => props.transition}ms
    cubic-bezier(0.64, -0.04, 0.26, 0.94);
`
export const CarrouselArrows = styled.img`
  position: absolute;
  top: 35%;
  ${(props) => (props.direction === 'right' ? `right: 0` : `left: 0`)};
  height: 100px;
  width: 50px;
  cursor: pointer;
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`
export const CarrouselDot = styled.span`
  padding: ${props => props.selected ? '14px' : '8px'};
  margin-right: 10px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.44);
  border: 1px solid #9bf2d6;
  transition: 0.45s;
  cursor: pointer;
`

export const CarrouselDotsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 15px;
  bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`
