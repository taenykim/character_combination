import React from 'react'
import styled from 'styled-components'
import DndBox from './Contents/DndBox/DndBox'
import Canvas from './Contents/Canvas'
import CharacterTable from './Contents/CharacterTable/CharacterTable'
import Character from './Contents/Character'

const characters = [
  new Character('Avengers', 'Captain'),
  new Character('Avengers', 'Iron Man'),
  new Character('Avengers', 'Spider Man'),
  new Character('Avengers', 'Hulk'),
  new Character('Avengers', 'Thor'),
  new Character('Gardians', 'Racoon'),
  new Character('Gardians', 'Groot'),
  new Character('Gardians', 'Star Lord'),
  new Character('Gardians', 'Gamora'),
  new Character('Gardians', 'Drax'),
  new Character('Dr.strange', 'Dr.strange'),
  new Character('Wakanda', 'Black Panther'),
  new Character('Wakanda', 'Shuri'),
  new Character('Wakanda', 'Killmonger'),
]

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background: #222;

  & > p {
    color: #ccc;
    font-size: 20px;
    font-family: escore5;
    margin: 20px 0px 20px 0px;
  }

  & > p:nth-child(1) {
    margin: 40px 0px 20px 0px;
  }
`

const Contents = () => {
  return (
    <Container>
      <p>배치</p>
      <DndBox></DndBox>
      <p>생성된 이미지</p>
      <Canvas></Canvas>
      <p>캐릭터들</p>
      <CharacterTable characters={characters}></CharacterTable>
    </Container>
  )
}

export default Contents
