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
          <MovieImages key={item.file_path} img={`https://image.tmdb.org/t/p/original${item.file_path}`} />
        ))}
      </MoviePhotosContainer>
    </>
  )
}

export default MoviePhotos
