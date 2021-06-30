import styled from 'styled-components'

export const CarrouselContainer = styled.div`
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`

export const CarrouselWrapper = styled.div`
  display: flex;
  position: relative;
  transform: translate3d(${(props) => -props.distance}px, 0, 0);
  transition: transform 300ms cubic-bezier(0.64, -0.04, 0.26, 0.94) 100ms;
`
export const CarrouselArrows = styled.img`
  position: absolute;
  top: 35%;
  ${(props) => (props.direction === 'right' ? `right: 0` : `left: 0`)};
  height: 100px;
  width: 50px;
  cursor: pointer;
  transition: transform ease-in 0.1s;

  &:hover{
    transform: scale(1.1);
  }
`
