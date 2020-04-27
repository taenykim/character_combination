import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'
import { getSynergyElement } from './synergyModule'

const languages = { KOR: { synergyBox: '시너지' }, ENG: { synergyBox: 'Synergy' } }

const Container = styled.div`
  display: flex;
  color: white;
  width: 800px;
  margin: 20px 0px 20px 0px;
  font-size: 12px;
`

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Synergy = styled.span`
  display: flex;
  align-items: center;
`

const SynergyBox = () => {
  const [synergyElements, setSynergyElements] = useState<JSX.Element[]>([])
  const characters = useSelector((state: RootState) => state.dndcharactersReducer.characters)
  const language: string = useSelector((state: RootState) => state.languageReducer.language)
  useEffect(() => {
    setSynergyElements(getSynergyElement(characters, language))
  }, [characters, language])
  return (
    <Container>
      <Title>{languages[language].synergyBox}</Title>
      <Synergy>
        {synergyElements.length === 0 ? (
          <>없음</>
        ) : (
          synergyElements.map((synergyElement) => synergyElement)
        )}
      </Synergy>
    </Container>
  )
}

export default SynergyBox
