import React from 'react'
import Carrousel from '../../Components/Carrousel/Carrousel.jsx'
import MovieCard from '../../Components/MovieCard/MovieCard.jsx'
import { CategoryTitle } from './CarrouselContainer'

const CarrouselContainer = ({ data, name, width}) => {
  return (
    <>
      <CategoryTitle>{name}</CategoryTitle>
      <Carrousel width={width}>
        {data.map((item) => (
          <MovieCard key={item.id} data={item} />
        ))}
      </Carrousel>
    </>
  )
}

export default CarrouselContainer
