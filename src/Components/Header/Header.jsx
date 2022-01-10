import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  HeaderContainer,
  NavBarContainer,
  NavBarItem,
  Logo,
  MenuButton,
  Search,
  SearchInput,
  SearchButton,
} from './Header'

import Genres from '../Genres/Genres.jsx'

import SearchIcon from '../../static/SearchIcon.svg'
import LogoImage from '../../static/Logo.svg'
import MenuIcon from '../../static/MenuIcon.svg'
import Close from '../../static/Close.svg'

const Header = () => {
  const history = useHistory()
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    value !== '' && history.push(`/movies/search?q=${value}`)
    setIsOpen(false)
  }

  return (
    <HeaderContainer>
      <Logo onClick={() => history.push('/movies')} src={LogoImage} />
      <NavBarContainer isOpen={isOpen}>
        <NavBarItem
          onClick={() => {
            setIsOpen(false)
            history.push('/movies/premiere/')
          }}
        >
          Premiere
        </NavBarItem>
        <NavBarItem
          onClick={() => {
            setIsOpen(false)
            history.push('/movies/series/')
          }}
        >
          Series
        </NavBarItem>
        <Genres isOpen={isOpen} openFunction={setIsOpen}>
          Genres
        </Genres>
      </NavBarContainer>
      <Search isOpen={isOpen} onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
        <SearchButton src={SearchIcon} type="image" onClick={handleSubmit} />
      </Search>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        src={isOpen ? Close : MenuIcon}
      />
    </HeaderContainer>
  )
}

export default Header
