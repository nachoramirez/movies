import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {
  MovieInfoContainer,
  Category,
  MoreInfoContainer,
  Info,
  Trailer,
  CategoryTitle,
} from './MovieInfo'

const MovieInfo = ({ data, videos, credits }) => {
  const history = useHistory()

  const { genres, release_date, runtime, first_air_date, number_of_episodes } =
    data

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  const { cast, crew } = credits

  const director = crew.find((element) => element.job === 'Director')

  const isTv = number_of_episodes !== undefined ? '&tv=true' : ''

  return (
    <MovieInfoContainer>
      <MoreInfoContainer>
        <div>
          {genres.map((item) => (
            <Category key={item.id}>
              <CategoryTitle
                onClick={() => history.push(`/genre/${item.name}?q=${item.id}${isTv}`)}
              >
                {item.name}
              </CategoryTitle>
            </Category>
          ))}
        </div>
        <Info>Premiere: {first_air_date || release_date}</Info>
       {/* if has a number_of_episodes it's a serie so show the number of episode but 
       if number_of_episodes is undefined it's a movie so show the duration  */}

        {number_of_episodes === undefined ? (
          <Info>
            Duration: {hours} h {minutes} m
          </Info>
        ) : (
          <Info>Duration: {number_of_episodes} Episodes</Info>
        )}

        {director !== undefined && <Info>Director: {director.name}</Info>}

        <Info>
          Cast: -{cast.slice(0, 3).map((item) => `  ${item.name} - `)}
        </Info>
      </MoreInfoContainer>
      <Trailer>
        <iframe
          height="300"
          width="100%"
          src={`https://www.youtube.com/embed/${
            videos.results[0] !== undefined  && videos.results[0].key
          }
            `}
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
