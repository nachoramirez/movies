import styled from 'styled-components'

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 85vh;
  width: 100%;
  margin: 0 auto;
  filter: drop-shadow(0px 9px 4px rgba(0, 0, 0, 0.25));
`

export const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px );
  transition: transform ease-in-out ${(props) => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display:flex;
`

export const Dot = styled.span`
  padding: ${props => props.active ? '5px 20px' : '3px 10px '};
  margin-right: 10px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #9bf2d6;
  transition: 0.45s;
`

export const DotsContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`