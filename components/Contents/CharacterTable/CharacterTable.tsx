import React from 'react'
import styled from 'styled-components'
import CharacterItem from './CharacterItem'
import Character from '../Character'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 800px;
  background: #aaa;
  margin: 0 0 60px 0;
`

const ChracterTable = () => {
  const characters: Character[] = useSelector(
    (state: RootState) => state.charactersReducer.characters
  )
  console.log(characters)
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
