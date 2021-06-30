import React from 'react'
import {
  MovieInfoContainer,
  Category,
  MoreInfoContainer,
  Info,
  Trailer,
} from './MovieInfo'

const MovieInfo = () => {
  return (
    <MovieInfoContainer>
      <MoreInfoContainer>
        <div>
          <Category>Action</Category>
          <Category>Adventure</Category>
          <Category>Thriller</Category>
        </div>
        <Info>Premiere: 26 / 5 / 2021</Info>
        <Info>Duration: 2h 13m</Info>
        <Info>Director: Craig Gillespie</Info>
        <Info>Cast: Emma Stone - Emma Thompson - Joel Fry </Info>
      </MoreInfoContainer>
      <Trailer>
        <iframe
          height="300"
          width="100%"
          src="https://www.youtube.com/embed/gmRKv7n2If8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Trailer>
    </MovieInfoContainer>
  )
}

export default MovieInfo
