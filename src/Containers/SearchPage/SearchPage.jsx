import React from 'react'
import { useHistory } from 'react-router-dom'
import { SearchPageContainer, SearchTile, Image } from './SearchPage'
import { Container } from '../Containers'

import SearchResults from '../../Components/SearchResults/SearchResults.jsx'
import Loading from '../../Components/Loading/Loading.jsx'
import ButtonPages from '../../Components/ButtonPages/ButtonPages.jsx'
import useCallApi from '../../hooks/useCallApi'
import useQuery from '../../hooks/useQuery'

import LogoSurprised from '../../static/LogoSurprised.svg'

const SearchPage = () => {
  window.scrollTo(0, 0)
  let query = useQuery()
  const history = useHistory()

  const searchName = query.get('q')
  const page = query.get('page')
  const API = `https://api.themoviedb.org/3/search/movie`

  const searchResponse = useCallApi({
    api: API,
    params: {
      api_key: 'ec4b3e3a8cd0222860f2fbc8738e8731',
      query: searchName,
      page: page === undefined ? 1 : page,
    },
    updater: history.location.search,
  })

  return searchResponse.results === undefined ? (
    <Loading />
  ) : (
    <SearchPageContainer>
      {searchResponse.results.length === 0 ? (
        <Container column>
          <Image src={LogoSurprised} />
          <SearchTile center> Not results for the search: {searchName}</SearchTile>
        </Container>
      ) : (
        <>
          <SearchTile>Your Search results: {searchName}</SearchTile>
          <SearchResults results={searchResponse.results} />
          <ButtonPages
            totalPages={searchResponse.total_pages}
            currentPage={searchResponse.page}
            name={searchName}
            pathName={'search'}
          />
        </>
      )}
    </SearchPageContainer>
  )
}

export default SearchPage
