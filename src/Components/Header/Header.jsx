import React from 'react'
import {
  HeaderContainer,
  NavBarContainer,
  NavBarItem,
  Logo,
  HomeLogo,
  NavBarHome,
  Search,
  SearchInput,
  SearchButton
} from './Header'

import { useHistory } from 'react-router-dom'

import HomeIcon from '../../static/HomeIcon.svg'
import SearchIcon from '../../static/SearchIcon.svg'

const Header = () => {

  const history = useHistory()

  return (
    <HeaderContainer>
      <Logo src='' />
      <NavBarContainer>
        <NavBarHome onClick={() => history.push('/')}>
          <HomeLogo src={HomeIcon} />
          <NavBarItem>Home</NavBarItem>
        </NavBarHome>
        <NavBarItem>Premiere</NavBarItem>
        <NavBarItem>Series</NavBarItem>
        <NavBarItem>Genres</NavBarItem>
        <Search>
          <SearchInput type="text" placeholder="Search..."></SearchInput>
          <SearchButton src={SearchIcon}/>
        </Search>
      </NavBarContainer>
    </HeaderContainer>
  )
}

export default Header
