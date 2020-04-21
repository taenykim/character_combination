import { dndCharacter } from '../../../reducers/wrapper'

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
  for (let [key, value] of Object.entries(getSynergys(characters, language))) {
    elements.push(
      <span
        style={{
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
  }
  return elements
}

export { getSynergyElement }
