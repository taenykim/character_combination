import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 150px;
  background: black;
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 150px 40px 150px;
  & > p {
    color: white;
  }
`

const Footer = () => {
  return (
    <Container>
      <Contents>
        <p>Description about application...</p>
      </Contents>
    </Container>
  )
}

export default Footer
