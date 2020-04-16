import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterItem from './CharacterItem'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 800px;
  background: #aaa;
  margin: 0 0 60px 0;
`

const ControlContainer = styled.div`
  color: white;
  margin: 20px;
`

const ChracterTable = ({ characters }) => {
  return (
    <>
      <ControlContainer>컨트롤 박스</ControlContainer>
      <Container>
        {characters.map((character, i) => {
          return <CharacterItem key={i} character={character}></CharacterItem>
        })}
      </Container>
    </>
  )
}

export default ChracterTable
