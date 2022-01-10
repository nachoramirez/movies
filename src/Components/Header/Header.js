import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const HeaderContainer = styled(Container)`
  background-color: #001b5b;
  color: #9bf2d6;
  justify-content: space-between;
  padding: 4px 10px;
  margin: 10px 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`
export const NavBarContainer = styled(Container)`
  justify-content: right;
  width: 60%;

  @media (max-width: 768px) {
    background-color: rgba(0, 27, 91, 0.89);
    top: 10px;
    height: 90vh;
    width: 100%;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    z-index: ${(props) => (props.isOpen ? 10 : -10)} ;
    position: absolute;
    flex-direction: column;
    padding-top: 160px;
    transition: opacity 400ms ease-out, z-index 500ms;
  }
`

export const NavBarItem = styled.h2`
  margin: 0 15px;
  transition: 300ms linear;
  cursor: pointer;
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

export const MenuButton = styled.img`
  visibility: hidden;
  height: 0;
  z-index: 11;
  @media (max-width: 768px) {
    visibility: visible;
    position: absolute;
    right: 15px;
    top: 20px;
    height: 40px;
    width: 40px;
  }
`

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 10px;
    z-index: 11;
  }
`

export const Search = styled.form`
  display: flex;
  justify-content: space-between;
  background: none;
  margin-left: 5em;
  height: 25px;
  width: 400px;
  padding: 5px 15px 5px 25px;
  text-decoration: none;
  border: 2px solid #9bf2d6;
  border-radius: 45px;
  background: none;

  @media (max-width: 768px) {
    z-index: 10;
    position: absolute;
    top: 100px;
    left: 5%;
    margin: 0 auto;
    width: 80%;
    height: 50px;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 500ms ease-out;
  }
`

export const SearchInput = styled.input`
  border: none;
  background: none;
  font-size: 1.3rem;
  color: #9bf2d6;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #9bf2d6;
  }
`
export const SearchButton = styled.input`
  height: 50%;
  align-self: center;
`
