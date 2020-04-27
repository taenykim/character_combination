import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_CHARACTER, ADD_CHARACTER } from '../../../reducers/dndcharactersReducer'
import { RootState } from '../../../reducers'
import Character from '../Character'

const languages = {
  KOR: { name: 'name_KOR', group: 'group_KOR' },
  ENG: { name: 'name', group: 'group' },
}

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 5px solid
    ${(props: { group: string; toggle: boolean }) => {
      if (props.group === 'Avengers') return 'red'
      if (props.group === 'Gardians') return 'dodgerblue'
      if (props.group === 'Dr.strange') return 'orange'
      if (props.group === 'Wakanda') return 'black'
      return 'black'
    }};
  box-sizing: border-box;
  background: ${(props: { group: string; toggle: boolean }) => {
    return props.toggle === true ? 'lightgreen' : 'yellow'
  }};

  & > div {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
  }

  & > h1 {
    color: ${(props: { group: string; toggle: boolean }) => {
      if (props.group === 'Wakanda') return 'white'
      return 'black'
    }};
    background: ${(props: { group: string; toggle: boolean }) => {
      if (props.group === 'Avengers') return 'red'
      if (props.group === 'Gardians') return 'dodgerblue'
      if (props.group === 'Dr.strange') return 'orange'
      if (props.group === 'Wakanda') return 'black'
      return 'black'
    }};
    padding: 0px 2px 2px 0px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 9px;
    font-family: escore5;
  }

  & > p {
    position: absolute;
    padding-bottom: 2px;
    width: 100%;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    font-family: escore6;
  }
`

const CharacterItem = ({ character }: { character: Character }) => {
  const language: string = useSelector((state: RootState) => state.languageReducer.language)
  const [clickedToggle, setClickedToggle] = useState<boolean>(character.selected)
  const dispatch = useDispatch()

  const clickCharacter = () => {
    setClickedToggle(!clickedToggle)
    clickedToggle
      ? dispatch({
          type: DELETE_CHARACTER,
          name: character.name,
        })
      : dispatch({
          type: ADD_CHARACTER,
          character: character,
        })
  }
  return (
    <Container toggle={clickedToggle} group={character.group} onClick={clickCharacter}>
      <div>🔍</div>
      <h1>{character[languages[language].group]}</h1>
      <p>{character[languages[language].name]}</p>
    </Container>
  )
}

export default CharacterItem
