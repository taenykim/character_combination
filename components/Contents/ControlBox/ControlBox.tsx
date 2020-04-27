import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'
import Character from '../Character'

const languages = {
  KOR: { controlBox: '컨트롤 박스' },
  ENG: { controlBox: 'Control Box' },
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 800px;
  margin: 20px 0px 20px 0px;
  font-size: 12px;
`

const Controller = styled.div``

const Title = styled.div``

const ControlBox = () => {
  const language: string = useSelector((state: RootState) => state.languageReducer.language)
  const characters: Character[] = useSelector(
    (state: RootState) => state.charactersReducer.characters
  )

  return (
    <Container>
      <Title>{languages[language].controlBox}</Title>
      <Controller>컨트롤러</Controller>
    </Container>
  )
}

export default ControlBox
