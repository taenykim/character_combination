import React from 'react'
import styled from 'styled-components'
import DndBox from './Contents/DndBox/DndBox'
import Canvas from './Contents/Canvas'
import CharacterTable from './Contents/CharacterTable/CharacterTable'
import Character from './Contents/Character'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

const languages = {
  KOR: { arrangement: '배치', generatedImage: '생성된 이미지', characters: '캐릭터들' },
  ENG: { arrangement: 'Arrangement', generatedImage: 'Generated Image', characters: 'Characters' },
}

const characters = [
  new Character('Avengers', 'Captain', true, '어벤져스', '캡틴 아메리카'),
  new Character('Avengers', 'Iron Man', true, '어벤져스', '아이언맨'),
  new Character('Avengers', 'Spider Man', true, '어벤져스', '스파이더맨'),
  new Character('Avengers', 'Hulk', true, '어벤져스', '헐크'),
  new Character('Avengers', 'Thor', true, '어벤져스', '토르'),
  new Character('Gardians', 'Rocket', false, '가오갤', '로켓'),
  new Character('Gardians', 'Groot', false, '가오갤', '그루트'),
  new Character('Gardians', 'Star Lord', false, '가오갤', '스타 로드'),
  new Character('Gardians', 'Gamora', false, '가오갤', '가모라'),
  new Character('Gardians', 'Drax', false, '가오갤', '드랙스'),
  new Character('Dr.strange', 'Dr.strange', false, '닥터스트레인지', '닥터스트레인지'),
  new Character('Wakanda', 'Black Panther', false, '와칸다', '블랙 펜서'),
  new Character('Wakanda', 'Shuri', false, '와칸다', '슈리'),
  new Character('Wakanda', 'Killmonger', false, '와칸다', '킬몽거'),
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
  const language: string = useSelector((state: RootState) => state.wrapper.language)
  return (
    <Container>
      <p>{languages[language].arrangement}</p>
      <DndBox></DndBox>
      <p>{languages[language].generatedImage}</p>
      <Canvas></Canvas>
      <p>{languages[language].characters}</p>
      <CharacterTable characters={characters}></CharacterTable>
    </Container>
  )
}

export default Contents
