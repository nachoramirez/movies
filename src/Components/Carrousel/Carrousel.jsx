import React from 'react'
import {
  CarrouselContainer,
  CarrouselWrapper,
  CarrouselArrows,
  CarrouselDotsContainer,
  CarrouselDot,
} from './Carrousel'
import RightCarrousel from '../../static/RightCarrousel.svg'
import LeftCarrousel from '../../static/LeftCarrousel.svg'
import { useSwipeable } from 'react-swipeable'

import useSlibing from '../../hooks/useSliding'

const Carrousel = ({ children, width }) => {
  const getWindowWidth = () => window.innerWidth
  const clones = 7

  const {
    handleDots,
    handleNext,
    handlePrev,
    translate,
    transition,
    dotsToShow,
    activeDot,
  } = useSlibing(children, clones, width)

  //gets the first elements to clone
  const fisrtChildrens = React.Children.toArray(children.slice(0, clones))
  const lastChildrens = React.Children.toArray(
    children.slice(React.Children.toArray.length - clones)
  )

  const handelers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <CarrouselContainer { ...handelers}>
      <CarrouselWrapper transition={transition} distance={translate}>
        {lastChildrens.map((item) => React.cloneElement(item))}
        {children}
        {
          //clones the first elements to show at the end of the carrousel
          fisrtChildrens.map((item) => React.cloneElement(item))
        }
      </CarrouselWrapper>
      <CarrouselArrows
        onClick={handleNext}
        src={RightCarrousel}
        direction={'right'}
      />
      <CarrouselArrows src={LeftCarrousel} onClick={handlePrev} />
      <CarrouselDotsContainer>
        {dotsToShow.map((item) => (
          <CarrouselDot
            onClick={() => handleDots(item)}
            key={item}
            selected={item === activeDot}
          />
        ))}
      </CarrouselDotsContainer>
    </CarrouselContainer>
  )
}

export default Carrousel
