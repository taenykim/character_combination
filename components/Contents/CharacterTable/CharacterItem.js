import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ADD_CHARACTER } from '../../../reducers/wrapper'

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 5px solid
    ${(props) => {
      if (props.group === 'Avengers') return 'red'
      if (props.group === 'Gardians') return 'dodgerblue'
    }};
  box-sizing: border-box;
  background: yellow;

  & > div {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
  }

  & > h1 {
    background: ${(props) => {
      if (props.group === 'Avengers') return 'red'
      if (props.group === 'Gardians') return 'dodgerblue'
    }};
    padding: 0px 2px 2px 0px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10px;
  }

  & > p {
    position: absolute;
    padding-bottom: 2px;
    width: 100%;
    bottom: 0;
    text-align: center;
    font-size: 11px;
    font-family: escore4;
  }
`

const CharacterItem = ({ character }) => {
  const dispatch = useDispatch()

  const clickCharacter = () => {
    dispatch({
      type: ADD_CHARACTER,
      character: character.name,
    })
  }
  return (
    <Container group={character.group} onClick={clickCharacter}>
      <div>🔍</div>
      <h1>{character.group}</h1>
      <p>{character.name}</p>
    </Container>
  )
}

export default CharacterItem
