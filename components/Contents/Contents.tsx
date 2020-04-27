import React from 'react'
import styled from 'styled-components'
import DndBox from './DndBox/DndBox'
import Canvas from './Canvas/Canvas'
import CharacterTable from './CharacterTable/CharacterTable'
import Character from './Character'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import SynergyBox from './SynergyBox/SynergyBox'
import ControlBox from './ControlBox/ControlBox'

const languages = {
  KOR: { arrangement: '배치', generatedImage: '생성된 이미지', characters: '캐릭터들' },
  ENG: { arrangement: 'Arrangement', generatedImage: 'Generated Image', characters: 'Characters' },
}

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
  const language: string = useSelector((state: RootState) => state.languageReducer.language)
  return (
    <Container>
      <p>{languages[language].arrangement}</p>
      <DndBox />
      <SynergyBox />
      <p>{languages[language].generatedImage}</p>
      <Canvas />
      <p>{languages[language].characters}</p>
      <ControlBox />
      <CharacterTable />
    </Container>
  )
}

export default Contents
