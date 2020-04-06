import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 200px;
  background: darkblue;
`

const Contents = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 40px 150px 40px 150px;

  & > h1 {
    color: white;
    font-size: 30px;
    font-family: escore9;
    padding: 0 40px 0 0;
  }

  & > p {
    color: white;
  }
`

const TitleBanner = () => {
  return (
    <Container>
      <Contents>
        <h1>Character Combination</h1>
        <p>Description about application...</p>
      </Contents>
    </Container>
  )
}

export default TitleBanner
