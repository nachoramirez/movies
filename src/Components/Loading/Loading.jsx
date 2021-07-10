import React from 'react'
import { Container } from '../../Containers/Containers'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border: 10px solid #c4c4c4;
  border-top: 10px solid #9bf2d6;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: ${rotate} 2s linear infinite;
`

const LoadingContainer = styled(Container)`
  height: 100vh;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader className="loader"></Loader>
    </LoadingContainer>
  )
}

export default Loading
