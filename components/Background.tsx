import React from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Background = ({ children }) => {
  return (
    <>
      <BackgroundContainer>{children}</BackgroundContainer>
    </>
  )
}

export default Background
