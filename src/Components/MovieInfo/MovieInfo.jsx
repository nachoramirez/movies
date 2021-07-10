import React from 'react'
import {
  MovieInfoContainer,
  Category,
  MoreInfoContainer,
  Info,
  Trailer,
  CategoryTitle,
} from './MovieInfo'

const MovieInfo = ({ data, videos, credits }) => {
  const { genres, release_date, runtime } = data

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  const { key } = videos.results[0]

  const { cast, crew } = credits

  const director = crew.find(
    element => element.job == "Director"
  )


  return (
    <MovieInfoContainer>
      <MoreInfoContainer>
        <div>
          {genres.map((item) => (
            <Category key={item.id}>
              <CategoryTitle>{item.name}</CategoryTitle>
            </Category>
          ))}
        </div>
        <Info>Premiere: {release_date}</Info>
        <Info>
          Duration: {hours} h {minutes} m
        </Info>
        <Info>Director: {director.name}</Info>
        <Info>
          Cast: -{cast.slice(0, 3).map((item) => `  ${item.name} - `)}
        </Info>
      </MoreInfoContainer>
      <Trailer>
        <iframe
          height="300"
          width="100%"
          src={`https://www.youtube.com/embed/${key}`}
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
