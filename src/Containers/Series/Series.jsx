import React from 'react'
import Slider from '../../Components/Slider/Slider.jsx'
import useCallApi from '../../hooks/useCallApi.js'
import Loading from '../../Components/Loading/Loading.jsx'

import CarroselContainer from '../CarrouselContainer/CarrouselContainer.jsx'

const Series = () => {
  window.scrollTo(0, 0)
  const onTheAir = useCallApi({
    api: 'https://api.themoviedb.org/3/tv/on_the_air?api_key=ec4b3e3a8cd0222860f2fbc8738e8731',
    params: {},
  })

  const popular = useCallApi({
    api: 'https://api.themoviedb.org/3/tv/popular?api_key=ec4b3e3a8cd0222860f2fbc8738e8731',
    params: {},
  })

  const topRated = useCallApi({
    api: 'https://api.themoviedb.org/3/tv/top_rated?api_key=ec4b3e3a8cd0222860f2fbc8738e8731',
    params: {},
  })

  const isLoading =
    onTheAir.results === undefined ||
    popular.results === undefined ||
    topRated.results === undefined

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <CarroselContainer name="On the Air" data={onTheAir.results} />
      <CarroselContainer name="Popular" data={popular.results} />
      <CarroselContainer name="Top rated" data={topRated.results} />
    </>
  )
}

export default Series
