import React, { useState } from 'react'
import { SliderContainer, SliderContent, Dot, DotsContainer } from './Slider'
import SliderItem from '../SliderItem/SliderItem.jsx'
import Arrows from './Arrows/Arrows.jsx'

const Slider = ({ slideItems }) => {
  const getWidth = () => window.innerWidth

  const [activeIndex, setActiveIndex] = useState(0)
  const [translate, setTranslate] = useState(0)
  const transition = 0.5

  const nextSlide = () => {
    if (activeIndex === slideItems.length - 1) {
      setActiveIndex(0)
      setTranslate(0)
    } else {
      setActiveIndex(activeIndex + 1)
      setTranslate((activeIndex + 1) * getWidth())
    }
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(slideItems.length - 1)
      setTranslate((slideItems.length - 1) * getWidth())
    } else {
      setActiveIndex(activeIndex - 1)
      setTranslate((activeIndex - 1) * getWidth())
    }
  }

  const dotSlide = (i) => {
    setActiveIndex(i)
    setTranslate(
      (activeIndex > i
        ? activeIndex - (activeIndex - i)
        : activeIndex < i
        ? activeIndex + (i - activeIndex)
        : activeIndex) * getWidth()
    )
  }

  return (
    <SliderContainer>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slideItems.length}
      >
        {slideItems.map((item) => (
          <SliderItem key={item.id} data={item} />
        ))}
      </SliderContent>
      <Arrows handleClick={() => nextSlide()} direction={'right'} />
      <Arrows handleClick={() => prevSlide()} direction={'left'} />
      <DotsContainer>
        {slideItems.map((slide, i) => (
          <Dot key={i} active={activeIndex === i} onClick={() => dotSlide(i)} />
        ))}
      </DotsContainer>
    </SliderContainer>
  )
}

export default Slider
