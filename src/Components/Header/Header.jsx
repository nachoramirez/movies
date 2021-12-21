import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  HeaderContainer,
  NavBarContainer,
  NavBarItem,
  Logo,
  // HomeLogo,
  // NavBarHome,
  Search,
  SearchInput,
  SearchButton,
} from "./Header";
import Genres from "../Genres/Genres.jsx";

// import HomeIcon from "../../static/HomeIcon.svg";
import SearchIcon from "../../static/SearchIcon.svg";
import LogoImage from "../../static/Logo.svg";

const Header = () => {
  const history = useHistory();
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/movies/search?q=${value}`);
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => history.push("/movies")} src={LogoImage} />
      <NavBarContainer>
        {/* <NavBarHome onClick={() => history.push('/')}>
          <HomeLogo src={HomeIcon} />
          <NavBarItem>Home</NavBarItem>
        </NavBarHome> */}
        <NavBarItem onClick={() => history.push('/movies/premiere/')}>Premiere</NavBarItem>
        <NavBarItem onClick={() => history.push('/movies/series/')}>Series</NavBarItem>
        <Genres>Genres</Genres>
      </NavBarContainer>
      <Search onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
        <SearchButton src={SearchIcon} type="image" onClick={handleSubmit} />
      </Search>
    </HeaderContainer>
  );
};

export default Header;
