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

import ImageNotFound from '../../static/ImageNotFound.svg'
import StarIcon from '../../static/Star.svg'

const MovieCard = ({ data }) => {
  const history = useHistory()

  const { id, title, vote_average, poster_path, name } = data

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : ImageNotFound

  return (
    <MovieCardContainer
      onClick={() =>name === undefined ? history.push(`/movie/${id}`) : history.push(`/tv/${id}`) }
      image={image}
    >
      <ItemInfo>
        <ItemTitle>{title || name} </ItemTitle>

        <ItemRating>
          <ItemRatingImage src={StarIcon} />
          <ItemRatingValue>{vote_average}/10</ItemRatingValue>
        </ItemRating>
      </ItemInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
