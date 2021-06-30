import React, { useState } from 'react'
import {
  CarrouselContainer,
  CarrouselWrapper,
  CarrouselArrows,
} from './Carrousel'
import RightCarrousel from '../../static/RightCarrousel.svg'
import LeftCarrousel from '../../static/LeftCarrousel.svg'

const Carrousel = ({ children }) => {
  const getWindowWidth = () => window.innerWidth
  const [translate, setTranslate] = useState(0)
  const [viewed, setViewed] = useState(0)
  const ItemWidth = getWindowWidth() * 0.15 + 20
  const totalInViewport = Math.floor(getWindowWidth() / ItemWidth)
  const totalItems = React.Children.count(children)

  const handleNext = () => {
    if (viewed + totalInViewport < totalItems) {
      setTranslate(translate + getWindowWidth())
      setViewed(viewed + totalInViewport)
    } else {
      setTranslate(0)
      setViewed(0)
    }
  }

  const handlePrev = () => {
    if (translate > 0) {
      setTranslate(translate - getWindowWidth())
      setViewed(viewed - totalInViewport)
    } else {
      setTranslate(
        Math.floor(totalItems / totalInViewport - 1) * getWindowWidth()
      )
      setViewed(totalItems)
    }
  }

  return (
    <CarrouselContainer>
      <CarrouselWrapper distance={translate}>{children}</CarrouselWrapper>
      <CarrouselArrows
        onClick={handleNext}
        src={RightCarrousel}
        direction={'right'}
      />
      <CarrouselArrows src={LeftCarrousel} onClick={handlePrev} />
    </CarrouselContainer>
  )
}

export default Carrousel
