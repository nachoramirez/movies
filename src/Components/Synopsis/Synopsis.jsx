import React from 'react'
import { SynopsisContainer, MovieTitle, MovieSynopsis } from './Synopsis'

const Synopsis = () => {
  return (
    <SynopsisContainer
      img={
        'https://image.tmdb.org/t/p/original/8ChCpCYxh9YXusmHwcE9YzP0TSG.jpg'
      }
    >
      <MovieTitle>Cruella</MovieTitle>
      <h2>synopsis</h2>
      <MovieSynopsis>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu lectus
        ornare placerat nibh nibh dolor. Sem dictum eu purus id. Massa, aliquet
        arcu curabitur massa, lorem a. Condimentum sagittis, eu rutrum mi. In
        tellus fermentum tristique cursus nunc a vel sem morbi. Egestas integer
        eget pulvinar orci mollis lacus. Tortor facilisi ipsum faucibus ornare
        sed. Nec euismod ut id sed ullamcorper. Amet, ultrices neque, interdum
        quis. Nunc cursus magna sed consectetur turpis. Integer dui ultricies
        augue at quam venenatis, sagittis. Laoreet lectus leo nisl amet duis
        duis pharetra, purus maecenas. Orci a mi fusce at. Convallis semper at
        egestas nunc. Molestie nunc.
      </MovieSynopsis>
    </SynopsisContainer>
  )
}

export default Synopsis
