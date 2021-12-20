import React from 'react'
import { useHistory } from 'react-router-dom'
import { GenresPageContainer, SearchTile } from './GenresPage'

import SearchResults from '../../Components/SearchResults/SearchResults.jsx'
import Loading from '../../Components/Loading/Loading.jsx'
import ButtonPages from '../../Components/ButtonPages/ButtonPages.jsx'
import useCallApi from '../../hooks/useCallApi'
import useQuery from '../../hooks/useQuery'

// import LogoSurprised from '../../static/LogoSurprised.svg'

const GenresPage = () => {
  let query = useQuery()
  const history = useHistory()

  const genreId = query.get('q')
  const page = query.get('page')
  const API = 'https://api.themoviedb.org/3/discover/movie'

  const genreName = history.location.pathname.substring(7)

  const genreResponse = useCallApi({
    api: API,
    params: {
      api_key: 'ec4b3e3a8cd0222860f2fbc8738e8731',
      with_genres: genreId,
      page: page === undefined ? 1 : page,
    },
    updater: history.location.search,
  })


  return genreResponse.results === undefined ? (
    <Loading />
  ) : (
    <GenresPageContainer>
      <SearchTile> {genreName}</SearchTile>
      <SearchResults results={genreResponse.results} />
      <ButtonPages
        totalPages={genreResponse.total_pages}
        currentPage={genreResponse.page}
        name={genreId}
        pathName={`genre/${genreName}`}
      />
    </GenresPageContainer>
  )
}

export default GenresPage
