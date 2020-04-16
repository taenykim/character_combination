import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { DELETE_CHARACTER, ADD_CHARACTER } from '../../../reducers/wrapper'

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 5px solid
    ${(props) => {
      if (props.group === 'Avengers') return 'red'
      if (props.group === 'Gardians') return 'dodgerblue'
      if (props.group === 'Dr.strange') return 'orange'
      if (props.group === 'Wakanda') return 'black'
    }};
  box-sizing: border-box;
  background: ${(props) => {
    return props.clickedToggle === true ? 'lightgreen' : 'yellow'
  }};

  & > div {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
  }

  & > h1 {
    color: ${(props) => {
      if (props.group === 'Wakanda') return 'white'
    }};
    background: ${(props) => {
      if (props.group === 'Avengers') return 'red'
      if (props.group === 'Gardians') return 'dodgerblue'
      if (props.group === 'Dr.strange') return 'orange'
      if (props.group === 'Wakanda') return 'black'
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
  const [clickedToggle, setClickedToggle] = useState(false)
  const dispatch = useDispatch()

  const clickCharacter = () => {
    setClickedToggle(!clickedToggle)
    clickedToggle
      ? dispatch({
          type: DELETE_CHARACTER,
          character: character.name,
        })
      : dispatch({
          type: ADD_CHARACTER,
          character: character.name,
        })
  }
  return (
    <Container clickedToggle={clickedToggle} group={character.group} onClick={clickCharacter}>
      <div>🔍</div>
      <h1>{character.group}</h1>
      <p>{character.name}</p>
    </Container>
  )
}

export default CharacterItem
