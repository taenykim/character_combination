import { dndCharacter } from '../../../reducers/dndcharactersReducer'

const getSynergys = (characters: dndCharacter[], language: string) => {
  const synergys = {}
  characters.forEach((_character) => {
    const { character } = _character
    let _synergeys: string[]
    if (language === 'KOR') {
      _synergeys = character.synergys_KOR
    }
    if (language === 'ENG') {
      _synergeys = character.synergys
    }
    _synergeys.forEach((synergy: string) => {
      if (synergys[synergy]) {
        synergys[synergy] += 1
      } else {
        synergys[synergy] = 1
      }
    })
  })
  return synergys
}

const getSynergyElement = (characters: dndCharacter[], language: string) => {
  const elements: JSX.Element[] = []
  let i = 0
  for (let [key, value] of Object.entries(getSynergys(characters, language))) {
    elements.push(
      <span
        key={i}
        style={{
          cursor: 'pointer',
          marginLeft: '10px',
          fontSize: '12px',
          border: '1px solid white',
          borderRadius: '2px',
          padding: '4px 6px 4px 6px',
        }}
      >
        {key}: {value}
      </span>
    )
    i++
  }
  return elements
}

export { getSynergyElement }
