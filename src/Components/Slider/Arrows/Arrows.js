import styled from 'styled-components'

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? `right: 40px` : `left: 25px`)};
  height: 50px;
  width: 50px;

  cursor: pointer;

  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
`

export const ArrowImage = styled.img`
  &:focus {
    outline: 0;
  }
`
