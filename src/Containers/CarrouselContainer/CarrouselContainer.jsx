import React from 'react'
import Carrousel from '../../Components/Carrousel/Carrousel.jsx'
import MovieCard from '../../Components/MovieCard/MovieCard.jsx'
import { CategoryTitle } from './CarrouselContainer'

const CarrouselContainer = ({ data, name }) => {
  return (
    <>
      <CategoryTitle>{name}</CategoryTitle>
      <Carrousel>
        {data.map((item) => (
          <MovieCard key={item.id} data={item} />
        ))}
      </Carrousel>
    </>
  )
}

export default CarrouselContainer
