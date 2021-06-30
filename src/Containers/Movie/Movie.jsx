import React from 'react'


import Synopsis from '../../Components/Synopsis/Synopsis.jsx'
import MovieInfo from '../../Components/MovieInfo/MovieInfo.jsx'
import MoviePhotos from '../../Components/MoviePhotos/MoviePhotos.jsx'
import CarrouselContainter from '../CarrouselContainer/CarrouselContainer.jsx'

const Movie = () => {



  return (
    <>
      <Synopsis />
      <MovieInfo />
      <MoviePhotos />
      <CarrouselContainter/>
    </>
  )
}

export default Movie
