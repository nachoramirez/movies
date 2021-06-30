import React from 'react'
import {
  SliderItemContainer,
  SliderInfo,
  SliderInfoTitle,
  SliderInfoDescription,
  SliderNumbers,
  ViewMoreButton,
  RatingImage,
  SliderNumbersValues
} from './SliderItem'

import Star from '../../static/Star.svg'

export const SliderItem = ({ image }) => {
  return (
    <SliderItemContainer image={image}>
      <SliderInfo>
        <SliderInfoTitle> Fast & Furious 7</SliderInfoTitle>
        <SliderInfoDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies elit, in non. Eget aliquam nunc felis, tempor. Risus libero,
          dictum velit, venenatis. Ultrices faucibus egestas auctor lectus
          mattis tempus. Eleifend at nascetur vel consectetur arcu pellentesque
          dignissim. Malesuada sed sed neque semper enim malesuada. Ultricies et
          a ac bibendum diam amet.
        </SliderInfoDescription>
        <SliderNumbers>
          <RatingImage src={Star}/>
          <SliderNumbersValues>8.5</SliderNumbersValues>
          <SliderNumbersValues> 2h 20m</SliderNumbersValues>
        </SliderNumbers>
        <ViewMoreButton>
          View More
        </ViewMoreButton>
      </SliderInfo>
    </SliderItemContainer>
  )
}

export default SliderItem
