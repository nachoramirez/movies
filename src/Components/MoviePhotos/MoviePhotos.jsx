import React from 'react'
import { MovieImages, MoviePhotosContainer,MoviePhotosTitle } from './MoviePhotos'

const MoviePhotos = () => {
  return (
    <>
    <MoviePhotosTitle> Photos</MoviePhotosTitle>
      <MoviePhotosContainer>
        <MovieImages img="https://image.tmdb.org/t/p/original/sgHmoqF97bjM1HUyw43FzjzXtEr.jpg" />
        <MovieImages img="https://image.tmdb.org/t/p/original/sgHmoqF97bjM1HUyw43FzjzXtEr.jpg" />
        <MovieImages img="https://image.tmdb.org/t/p/original/sgHmoqF97bjM1HUyw43FzjzXtEr.jpg" />
        <MovieImages img="https://image.tmdb.org/t/p/original/sgHmoqF97bjM1HUyw43FzjzXtEr.jpg" />
        <MovieImages img="https://image.tmdb.org/t/p/original/sgHmoqF97bjM1HUyw43FzjzXtEr.jpg" />
      </MoviePhotosContainer>
    </>
  )
}

export default MoviePhotos
