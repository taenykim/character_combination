import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'

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
  const language = useSelector((state: RootState) => state.wrapper.language)
  return (
    <Container>
      <Title>{languages[language].synergyBox}</Title>
      <Synergy>없음</Synergy>
    </Container>
  )
}

export default SynergyBox
