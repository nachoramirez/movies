import React from 'react'
import { useHistory } from 'react-router'

import Synopsis from '../../Components/Synopsis/Synopsis.jsx'
import MovieInfo from '../../Components/MovieInfo/MovieInfo.jsx'
import MoviePhotos from '../../Components/MoviePhotos/MoviePhotos.jsx'
import CarrouselContainter from '../CarrouselContainer/CarrouselContainer.jsx'
import Loading from '../../Components/Loading/Loading.jsx'

import useCallApi from '../../hooks/useCallApi.js'

const Movie = () => {
  const history = useHistory()
  const path = history.location.pathname

  //the second value is the useEffect updater
  const data = useCallApi(
    `https://api.themoviedb.org/3${history.location.pathname}?api_key=ec4b3e3a8cd0222860f2fbc8738e8731&append_to_response=videos,images,similar,credits`,
    path
  )

  return data.id === undefined ? (
    <Loading />
  ) : (
    <>
      <Synopsis data={data} />
      <MovieInfo data={data} credits={data.credits} videos={data.videos} />
      <MoviePhotos photos={data.images.backdrops.slice(0, 5)} />
      <CarrouselContainter
        name="Similar"
        data={data.similar.results}
      />
    </>
  )
}

export default Movie
