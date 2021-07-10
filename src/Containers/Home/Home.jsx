import React from 'react'
import Slider from '../../Components/Slider/Slider.jsx'
import useCallApi from '../../hooks/useCallApi.js'
import Loading from '../../Components/Loading/Loading.jsx'

import CarroselContainer from '../CarrouselContainer/CarrouselContainer.jsx'

const Home = () => {
  const nowPlaying = useCallApi(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=ec4b3e3a8cd0222860f2fbc8738e8731'
  )
  const trending = useCallApi(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=ec4b3e3a8cd0222860f2fbc8738e8731'
  )

  const popular = useCallApi(
    'https://api.themoviedb.org/3/movie/popular?api_key=ec4b3e3a8cd0222860f2fbc8738e8731'
  )

  const topRated = useCallApi(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=ec4b3e3a8cd0222860f2fbc8738e8731'
  )

  const isLoading =
    nowPlaying.results === undefined ||
    trending.results === undefined ||
    popular.results === undefined ||
    topRated.results === undefined

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Slider slideItems={nowPlaying.results.slice(0, 5)} />
      <CarroselContainer name="Trending" data={trending.results} />
      <CarroselContainer name="Popular" data={popular.results} />
      <CarroselContainer name="Top rated" data={topRated.results} />
    </>
  )
}

export default Home
