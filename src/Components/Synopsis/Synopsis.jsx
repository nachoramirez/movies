import React from 'react'
import { SynopsisContainer, MovieTitle, MovieSynopsis } from './Synopsis'

const Synopsis = ({ data }) => {
  const { backdrop_path, title, overview, name } = data

  return (
    <SynopsisContainer
      img={`https://image.tmdb.org/t/p/original${backdrop_path}`}
    >
      <MovieTitle>{title || name}</MovieTitle>
      <h2>synopsis</h2>
      <MovieSynopsis>{overview}</MovieSynopsis>
    </SynopsisContainer>
  )
}

export default Synopsis
