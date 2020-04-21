import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'
import { getSynergys } from './synergy'

const languages = { KOR: { synergyBox: '시너지' }, ENG: { synergyBox: 'Synergy' } }

const Container = styled.div`
  color: white;
  width: 800px;
  margin: 20px 0px 20px 0px;
  font-size: 15px;
`

const Title = styled.span``

const Synergy = styled.span``

const SynergyBox = () => {
  const language: string = useSelector((state: RootState) => state.wrapper.language)
  const characters = useSelector((state: RootState) => state.wrapper.characters)
  console.log(getSynergys(characters))
  return (
    <Container>
      <Title>{languages[language].synergyBox}</Title>
      <Synergy>없음</Synergy>
    </Container>
  )
}

export default SynergyBox
