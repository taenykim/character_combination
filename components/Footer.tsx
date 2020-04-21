import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

const languages = {
  KOR: { description: '푸터 설명' },
  ENG: { description: 'Footer description' },
}

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
  const language: string = useSelector((state: RootState) => state.wrapper.language)
  return (
    <Container>
      <Contents>
        <p>{languages[language].description}</p>
      </Contents>
    </Container>
  )
}

export default Footer
