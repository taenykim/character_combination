import React from 'react'
import styled from 'styled-components'
import DndBox from './Contents/DndBox'
import Canvas from './Contents/Canvas'
import CharacterTable from './Contents/CharacterTable'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 1000px;
  background: #222;
`

const Contents = () => {
  return (
    <Container>
      <DndBox></DndBox>
      <Canvas></Canvas>
      <CharacterTable></CharacterTable>
    </Container>
  )
}

export default Contents
