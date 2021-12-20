import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  GenresContainer,
  GenresContent,
  GenresTitle,
  GenreName,
  GenreDivition,
} from './Genres'

import useCallApi from '../../hooks/useCallApi'

const Genres = () => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  const history = useHistory()

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current == null) {
        setIsActive(!isActive)
      }
    }
    if (isActive) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive])

  const GenresList = useCallApi({
    api: 'https://api.themoviedb.org/3/genre/movie/list?api_key=ec4b3e3a8cd0222860f2fbc8738e8731',
  })

  return GenresList.genres === undefined ? (
    <> </>
  ) : (
    <GenresContainer onClick={() => setIsActive(!isActive)}>
      <GenresTitle isActive={isActive}> Genres</GenresTitle>
      <GenresContent display={isActive}>
        {GenresList.genres.map((item) => (
          <>
            <GenreName
              onClick={() => history.push(`/genre/${item.name}?q=${item.id}`)}
              key={item.id}
            >
              {item.name}
            </GenreName>
            <GenreDivition>|</GenreDivition>
          </>
        ))}
      </GenresContent>
    </GenresContainer>
  )
}

export default Genres
