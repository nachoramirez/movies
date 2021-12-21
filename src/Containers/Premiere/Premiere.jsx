import React from 'react'
import { useHistory } from 'react-router-dom'
import { PremiereContainer, PremiereTitle } from './Premiere'

import SearchResults from '../../Components/SearchResults/SearchResults.jsx'
import Loading from '../../Components/Loading/Loading.jsx'
import useCallApi from '../../hooks/useCallApi'


const Premiere = () => {
  window.scrollTo(0, 0)
  const history = useHistory()

  const API = `https://api.themoviedb.org/3/movie/upcoming`

  const PremiereResponse = useCallApi({
    api: API,
    params: {
      api_key: 'ec4b3e3a8cd0222860f2fbc8738e8731',
    },
    updater: history.location.search,
  })

  return PremiereResponse.results === undefined ? (
    <Loading />
  ) : (
    <PremiereContainer>
      <>
        <PremiereTitle>PREMIERE</PremiereTitle>
        <SearchResults results={PremiereResponse.results} />
      </>
    </PremiereContainer>
  )
}

export default Premiere
