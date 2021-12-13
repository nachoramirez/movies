import styled from 'styled-components'

export const ButtonPagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 40%;
`

export const ButtonPage = styled.h1`
  color: ${(props) => (props.selected ? 'white' : 'white')};
  width: 20px;
  height: 20px;
  font-size: 20px;
  padding: 10px ;
  text-align: center;
  background: rgba(0, 160, 122, 0.35);
  border-radius: 100%;
  border: ${(props) => (props.selected ? 'solid white 2px' : 'rgba(0, 160, 122, 0.35)')};
  cursor: pointer;
  margin: 40px 0;
`

export const ButtonArrow = styled.img`
  height: 40px;
  cursor: pointer;
  margin: 40px 0;
`

// rgba(0, 0, 0, 0.44)