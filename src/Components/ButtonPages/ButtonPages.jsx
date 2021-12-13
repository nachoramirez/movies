import React from 'react'

import { ButtonPagesContainer, ButtonPage, ButtonArrow } from './ButtonPages.js'

import LeftButtonArrow from '../../static/LeftButtonArrow.svg'
import RightButtonArrow from '../../static/RightButtonArrow.svg'

const ButtonPages = () => {
  return (
    <ButtonPagesContainer>
      <ButtonArrow src={LeftButtonArrow}/>
      <ButtonPage >1</ButtonPage>
      <ButtonPage>2</ButtonPage>
      <ButtonPage selected>3</ButtonPage>
      <ButtonPage>4</ButtonPage>
      <ButtonPage>5</ButtonPage>
      <ButtonArrow src={RightButtonArrow}/>
    </ButtonPagesContainer>
  )
}

export default ButtonPages
