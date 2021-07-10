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

import useSlibing from '../../hooks/useSliding'

const Carrousel = ({ children }) => {
  const clones = 7
  const {
    handleNext,
    handlePrev,
    translate,
    transition,
    dotsToShow,
    activeDot,
  } = useSlibing(children,clones)

  //gets the first elements to clone
  const fisrtChildrens = React.Children.toArray(children.slice(0, clones))
  const lastChildrens = React.Children.toArray(
    children.slice(React.Children.toArray.length - clones)
  )


  return (
    <CarrouselContainer>
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
          <CarrouselDot key={item} selected={item === activeDot} />
        ))}
      </CarrouselDotsContainer>
    </CarrouselContainer>
  )
}

export default Carrousel
