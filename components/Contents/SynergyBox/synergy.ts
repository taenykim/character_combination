import { dndCharacter } from '../../../reducers/wrapper'

const getSynergys = (characters: dndCharacter[]) => {
  const synergys = {}
  characters.forEach((_character) => {
    const { character } = _character
    character.synergy.forEach((synergy: string) => {
      if (synergys[synergy]) {
        synergys[synergy] += 1
      } else {
        synergys[synergy] = 1
      }
    })
  })
  return synergys
}

export { getSynergys }
