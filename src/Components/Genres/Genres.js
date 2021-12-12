import styled from 'styled-components'

export const GenresContainer = styled.div`
  position: relative;
  display: inline-block;
`
export const GenresContent = styled.div`
  position: absolute;
  display: ${(props) => (props.display ? 'flex' : 'none')};
  width: 600px;
  justify-content: space-around;
  align-self: center;
  flex-wrap: wrap;
  border-radius: 65px;
  padding: 10px 30px;
  background-color: white;
  z-index: 1;
  transform: translateX(-40%);
`

export const GenresTitle = styled.h2`
  margin: 0 15px;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    font-size: 1.75rem;
  }
`

export const GenreName = styled.p`
  color: black;
  margin-left: 10px;
  cursor: pointer;

&:hover{
  color: #001b5b;
  font-weight: bolder;
}
`

export const GenreDivition = styled.p`
  color: black;
  margin-left: 10px;
`
