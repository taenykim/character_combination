import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../reducers'
import Character from '../Character'
import {
  nameAscendingButtonHandler,
  nameDescendingButtonHandler,
  groupAscendingButtonHandler,
  groupDescendingButtonHandler,
  newestButtonHandler,
  oldestButtonHandler,
} from './controlModule'
import { UPDATE_CHARACTERS_TABLE } from '../../../reducers/charactersReducer'

const languages = {
  KOR: {
    controlBox: '컨트롤 박스',
    newest: '최신순',
    oldest: '오래된순',
    nameAscending: '이름(오름차순)',
    nameDescending: '이름(내림차순)',
    groupAscending: '그룹(오름차순)',
    groupDescending: '그룹(내림차순)',
  },
  ENG: {
    controlBox: 'Control Box',
    newest: 'Newest',
    oldest: 'Oldest',
    nameAscending: 'Name(ascending)',
    nameDescending: 'Name(descending)',
    groupAscending: 'Group(ascending)',
    groupDescending: 'Group(descending)',
  },
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 800px;
  margin: 20px 0px 20px 0px;
  font-size: 12px;
`

const Controller = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  & > button {
    margin-right: 10px;
    padding: 3px 8px 3px 8px;
    border: 1px solid white;
    border-radius: 3px;
    cursor: pointer;
  }
`

const Title = styled.div``

const ControlBox = () => {
  const language: string = useSelector((state: RootState) => state.languageReducer.language)
  const characters: Character[] = useSelector(
    (state: RootState) => state.charactersReducer.characters
  )
  const dispatch = useDispatch()

  const clickControlButton = (buttonType: string) => {
    if (buttonType === 'newest') {
    }
    if (buttonType === 'oldest') {
    }
    if (buttonType === 'nameAscending') {
      const updatedCharacters = nameAscendingButtonHandler(characters, language)
      dispatch({
        type: UPDATE_CHARACTERS_TABLE,
        characters: updatedCharacters,
      })
    }
    if (buttonType === 'nameDescending') {
      const updatedCharacters = nameDescendingButtonHandler(characters, language)
      dispatch({
        type: UPDATE_CHARACTERS_TABLE,
        characters: updatedCharacters,
      })
    }
    if (buttonType === 'groupAscending') {
      const updatedCharacters = groupAscendingButtonHandler(characters, language)
      dispatch({
        type: UPDATE_CHARACTERS_TABLE,
        characters: updatedCharacters,
      })
    }
    if (buttonType === 'groupDescending') {
      const updatedCharacters = groupDescendingButtonHandler(characters, language)
      dispatch({
        type: UPDATE_CHARACTERS_TABLE,
        characters: updatedCharacters,
      })
    }
    if (buttonType === 'newest') {
      const updatedCharacters = newestButtonHandler(characters)
      dispatch({
        type: UPDATE_CHARACTERS_TABLE,
        characters: updatedCharacters,
      })
    }
    if (buttonType === 'oldest') {
      const updatedCharacters = oldestButtonHandler(characters)
      dispatch({
        type: UPDATE_CHARACTERS_TABLE,
        characters: updatedCharacters,
      })
    }
    return
  }

  return (
    <Container>
      <Title>{languages[language].controlBox}</Title>
      <Controller>
        <button onClick={() => clickControlButton('newest')}>{languages[language].newest}</button>
        <button onClick={() => clickControlButton('oldest')}>{languages[language].oldest}</button>
        <button onClick={() => clickControlButton('nameAscending')}>
          {languages[language].nameAscending}
        </button>
        <button onClick={() => clickControlButton('nameDescending')}>
          {languages[language].nameDescending}
        </button>
        <button onClick={() => clickControlButton('groupAscending')}>
          {languages[language].groupAscending}
        </button>
        <button onClick={() => clickControlButton('groupDescending')}>
          {languages[language].groupDescending}
        </button>
      </Controller>
    </Container>
  )
}

export default ControlBox
