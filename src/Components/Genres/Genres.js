import styled from 'styled-components'

export const GenresContainer = styled.div`
  z-index: 8000;
  position: relative;
  display: inline-block;
  `
export const GenresContent = styled.div`
  position: absolute;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  width: 600px;
  justify-content: space-around;
  align-self: center;
  flex-wrap: wrap;
  border-radius: 65px;
  padding: 10px 30px;
  background-color: white;
  z-index: 1;
  transform: translateX(-40%);

  
  @media (max-width: 768px) {
    width: 150%;
    height: 320px;
    transform: translatex(-21.5%);
    border-radius: 65px;
  }
  `

export const GenresTitle = styled.h2`
  margin: 0 15px;
  cursor: pointer;
  transition: 500ms;
  font-size: ${(props) => (props.isActive ? '1.75em' : '1.5em')};
  &:hover {
    font-size: 1.75em;
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    &:hover {
      font-size: 4rem;
    }
  }
  `

export const GenreName = styled.p`
  color: black;
  margin-left: 10px;
  cursor: pointer;
  
  &:hover {
    color: #001b5b;
    font-weight: bolder;
  }
  `

export const GenreDivition = styled.p`
  color: black;
  margin-left: 10px;
  
  @media (max-width: 768px) {
    display: none;
  }
  `
