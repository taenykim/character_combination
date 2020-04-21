import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'

const languages = {
  KOR: { title: '캐릭터 조합', description: '이 어플리케이션에 대한 설명' },
  ENG: { title: 'Character Combination', description: 'Description about application...' },
}

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
  const language = useSelector((state: RootState) => state.wrapper.language)

  return (
    <Container>
      <Contents>
        <h1>{languages[language].title}</h1>
        <p>{languages[language].description}</p>
      </Contents>
    </Container>
  )
}

export default TitleBanner
