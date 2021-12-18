import React from 'react'
import { useHistory } from 'react-router-dom'

import { ButtonPagesContainer, ButtonPage, ButtonArrow } from './ButtonPages.js'

import LeftButtonArrow from '../../static/LeftButtonArrow.svg'
import RightButtonArrow from '../../static/RightButtonArrow.svg'

const ButtonPages = ({ totalPages, currentPage, searchName }) => {
  const history = useHistory()

  var pagesNumber = []

  for (let i = 0; i < totalPages; i++) {
    pagesNumber.push(i + 1)
  }

  return (
    <ButtonPagesContainer>
      <ButtonArrow
        onClick={() =>
          currentPage > 1
            ? history.push(`/search?q=${searchName}&page=${currentPage - 1}`)
            : null
        }
        src={LeftButtonArrow}
      />

      {pagesNumber.map((item) => (
        <ButtonPage
          onClick={() => history.push(`/search?q=${searchName}&page=${item}`)}
          selected={currentPage == item}
        >
          {item}
        </ButtonPage>
      ))}

      <ButtonArrow
        onClick={() =>
          currentPage < totalPages
            ? history.push(`/search?q=${searchName}&page=${currentPage + 1}`)
            : null
        }
        src={RightButtonArrow}
      />
    </ButtonPagesContainer>
  )
}

export default ButtonPages
