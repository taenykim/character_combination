import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'

const languages = { KOR: { synergyBox: '시너지 박스' }, ENG: { synergyBox: 'Synergy Box' } }

const Container = styled.div`
  color: white;
  width: 800px;
  margin: 20px 0px 20px 0px;
`

const SynergyBox = () => {
  const language = useSelector((state: RootState) => state.wrapper.language)
  return <Container>{languages[language].synergyBox}</Container>
}

export default SynergyBox
