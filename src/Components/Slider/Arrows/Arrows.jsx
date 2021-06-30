import React from 'react'
import { ArrowsContainer, ArrowImage } from './Arrows.js'
import LeftArrow from '../../../static/LeftArrow.svg'
import RightArrow from '../../../static/RightArrow.svg'

const Arrows = ({ direction, handleClick }) => {
  return (
    <ArrowsContainer onClick={handleClick} direction={direction}>
      {direction === 'right' ? (
        <ArrowImage src={RightArrow} />
      ) : (
        <ArrowImage src={LeftArrow} />
      )}
    </ArrowsContainer>
  )
}

export default Arrows
