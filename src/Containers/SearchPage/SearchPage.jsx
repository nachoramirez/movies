import React from 'react'
import { useHistory } from 'react-router-dom'
import { SearchPageContainer, SearchTile, Image} from './SearchPage'

import SearchResults from '../../Components/SearchResults/SearchResults.jsx'
import Loading from '../../Components/Loading/Loading.jsx'
import useCallApi from '../../hooks/useCallApi'

import LogoSurprised from '../../static/LogoSurprised.svg'

const SearchPage = () => {
  const history = useHistory()

  const searchName = history.location.pathname.substring(8)
  const API = `https://api.themoviedb.org/3/search/movie?api_key=ec4b3e3a8cd0222860f2fbc8738e8731&query=${searchName}`

  const searchResponse = useCallApi(API, searchName)

  return searchResponse.results === undefined ? (
    <Loading />
  ) : (
    <SearchPageContainer>
      {searchResponse.results.length === 0 ? (
        <SearchPageContainer>
          <Image src={LogoSurprised} />
          <SearchTile> Not results for the search: {searchName}</SearchTile>
        </SearchPageContainer>
      ) : (
        <>
          <SearchTile>Your Search results: {searchName}</SearchTile>
          <SearchResults results={searchResponse.results} />)
        </>
      )}
    </SearchPageContainer>
  )
}

export default SearchPage
