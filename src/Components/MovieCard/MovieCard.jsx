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

const MovieCard = ({ data }) => {
  const history = useHistory()

  const {id, title, vote_average, poster_path } = data

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
    <MovieCardContainer
      onClick={() => history.push(`/movie/${id}`)}
      image={image}
    >
      <ItemInfo>
        <ItemTitle>{title} </ItemTitle>

        <ItemRating>
          <ItemRatingImage src={StarIcon} />
          <ItemRatingValue>{vote_average}/10</ItemRatingValue>
        </ItemRating>
      </ItemInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
