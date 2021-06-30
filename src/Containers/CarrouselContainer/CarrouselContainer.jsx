import React from 'react'
import Carrousel from '../../Components/Carrousel/Carrousel.jsx'
import MovieCard from '../../Components/MovieCard/MovieCard.jsx'
import { CategoryTitle } from './CarrouselContainer'

const CarrouselContainer = () => {
  const hola = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

  return (
    <>
      <CategoryTitle>Featured</CategoryTitle>
      <Carrousel>
        {hola.map((item) => (
          <MovieCard key={item} id={item} />
        ))}
      </Carrousel>
    </>
  )
}

export default CarrouselContainer
