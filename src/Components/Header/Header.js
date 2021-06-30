import styled from 'styled-components'
import { Container } from '../../Containers/Containers'

export const HeaderContainer = styled(Container)`
  background-color: #001b5b;
  color: #9bf2d6;
  justify-content: space-between;
  padding: 4px 10px;
`
export const HomeLogo = styled.img`
  height: 20px;
  transition: 300ms linear;
`
export const NavBarContainer = styled(Container)`
  justify-content: space-around;
  padding: 15px 4px 15px 15px;
  width: 70%;
`

export const NavBarItem = styled.h2`
  margin: 0 15px;
  transition: 300ms linear;
  cursor: pointer;
  &:hover {
    font-size: 1.75rem;
  }
`
export const NavBarHome = styled.div`
  align-items: center;
  display: flex;
  margin: 0 15px;
  transition: 300ms linear;
  cursor: pointer;
  &:hover ${HomeLogo} {
    height: 1.75em;
  }
  &:hover ${NavBarItem} {
    font-size: 1.75rem;
  }
`
export const Logo = styled.img`
  height: 70px;
`

export const Search = styled.form`
  display: flex;
  justify-content: space-between;
  background: none;
  margin-left: 5em;
  height: 25px;
  width: 320px;
  padding: 5px 15px 5px 25px;
  text-decoration: none;
  border: 2px solid #9bf2d6;
  border-radius: 45px;
  background: none;
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
export const SearchButton = styled.img`
  height: 30px;
  align-self: flex-end;
`
