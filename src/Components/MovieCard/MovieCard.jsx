import React from 'react'
import {
  MovieCardContainer,
  ItemInfo,
  ItemTitle,
  ItemRatingImage,
  ItemRating,
  ItemRatingValue,
} from './MovieCard'
import { useHistory } from 'react-router-dom'

import StarIcon from '../../static/Star.svg'

const MovieCard = ({ id }) => {
  const image =
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTY8XcRK2qKQRYzRcBf_tEnrecd991e9Brr7vGPGfLCQqwIWCZ'

  const history = useHistory()

  return (
    <MovieCardContainer onClick={() => history.push(`/movie/${id}`)} image={image}>
      <ItemInfo>
        <ItemTitle>Cruella Cruella </ItemTitle>
        <p>Duracion: {id}h 40m</p>
        <ItemRating>
          <ItemRatingImage src={StarIcon} />
          <ItemRatingValue>7.4/10</ItemRatingValue>
        </ItemRating>
      </ItemInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
