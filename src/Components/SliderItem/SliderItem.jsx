import React from 'react'
import { useHistory } from 'react-router'
import {
  SliderItemContainer,
  SliderInfo,
  SliderInfoTitle,
  SliderInfoDescription,
  SliderNumbers,
  ViewMoreButton,
  RatingImage,
  SliderNumbersValues,
} from './SliderItem'

import Star from '../../static/Star.svg'

export const SliderItem = ({ data }) => {
  const history = useHistory()

  const { id, title, vote_average, backdrop_path, overview,release_date } = data

  const image = `https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
    <SliderItemContainer image={image}>
      <SliderInfo>
        <SliderInfoTitle> {title}</SliderInfoTitle>
        <SliderInfoDescription>{overview}</SliderInfoDescription>
        <SliderNumbers>
          <RatingImage src={Star} />
          <SliderNumbersValues>{vote_average}</SliderNumbersValues>
          <SliderNumbersValues> {release_date}</SliderNumbersValues>
        </SliderNumbers>
        <ViewMoreButton onClick={() => history.push(`/movies/movie/${id}`)}>
          View More
        </ViewMoreButton>
      </SliderInfo>
    </SliderItemContainer>
  )
}

export default SliderItem
