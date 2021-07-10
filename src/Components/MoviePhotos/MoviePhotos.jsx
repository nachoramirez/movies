import React from 'react'
import {
  MovieImages,
  MoviePhotosContainer,
  MoviePhotosTitle,
} from './MoviePhotos'

const MoviePhotos = ({ photos }) => {
  return (
    <>
      <MoviePhotosTitle> Photos</MoviePhotosTitle>
      <MoviePhotosContainer>
        {photos.map((item) => (
          <MovieImages ley={item.id} img={`https://image.tmdb.org/t/p/original${item.file_path}`} />
        ))}
      </MoviePhotosContainer>
    </>
  )
}

export default MoviePhotos
