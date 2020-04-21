import React from 'react'
import styled from 'styled-components'
import CharacterItem from './CharacterItem'
import Character from '../Character'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 800px;
  background: #aaa;
  margin: 0 0 60px 0;
`

const ChracterTable = ({ characters }: { characters: Character[] }) => {
  return (
    <>
      <Container>
        {characters.map((character, i) => {
          return <CharacterItem key={i} character={character}></CharacterItem>
        })}
      </Container>
    </>
  )
}

export default ChracterTable
