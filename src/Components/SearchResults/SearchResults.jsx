import React from 'react'
import MovieCard from '../MovieCard/MovieCard.jsx'

import { SearchResultsContainer, SearchCard } from './SeachResults'

const SearchResults = ({ results }) => {
  return (
    <SearchResultsContainer>
      {results.map((item) => (
        <SearchCard>
          <MovieCard hover={'carrousel'} key={item.id} data={item} />
        </SearchCard>
      ))}
    </SearchResultsContainer>
  )
}

export default SearchResults
