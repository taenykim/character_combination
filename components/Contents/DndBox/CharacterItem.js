import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const languages = {
  KOR: { name: 'name_KOR', group: 'group_KOR' },
  ENG: { name: 'name', group: 'group' },
}

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

const CharacterItem = ({ character }) => {
  const language = useSelector((state) => state.wrapper.language)
  return (
    <Container group={character.character.group}>
      <div>🔍</div>
      <h1>{character.character[languages[language].name]}</h1>
      <p>{character.character[languages[language].group]}</p>
    </Container>
  )
}

export default CharacterItem
