import React from 'react'
import { useHistory } from 'react-router-dom'

import { ButtonPagesContainer, ButtonPage, ButtonArrow } from './ButtonPages.js'

import LeftButtonArrow from '../../static/LeftButtonArrow.svg'
import RightButtonArrow from '../../static/RightButtonArrow.svg'

const ButtonPages = ({ totalPages, currentPage, name, pathName }) => {
  const history = useHistory()

  var pagesNumber = []

  for (let i = 0; i < totalPages && i < 10; i++) {
    pagesNumber.push(i + 1)
  }

  return (
    <ButtonPagesContainer>
      <ButtonArrow
        onClick={() =>
          currentPage > 1
            ? history.push(`/movies/${pathName}?q=${name}&page=${currentPage - 1}`)
            : null
        }
        src={LeftButtonArrow}
      />

      {pagesNumber.map((item) => (
        <ButtonPage
          onClick={() => history.push(`/movies/${pathName}?q=${name}&page=${item}`)}
          selected={currentPage === item}
          key={item}
        >
          {item}
        </ButtonPage>
      ))}

      <ButtonArrow
        onClick={() =>
          currentPage < totalPages && currentPage < 10
            ? history.push(`/movies/${pathName}?q=${name}&page=${currentPage + 1}`)
            : null
        }
        src={RightButtonArrow}
      />
    </ButtonPagesContainer>
  )
}

export default ButtonPages
