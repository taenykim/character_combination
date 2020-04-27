import Character from '../components/Contents/Character'

type reduxState = {
  characters: Character[]
}

export const initialState: reduxState = {
  characters: [
    new Character(
      'Avengers',
      'Captain',
      true,
      '어벤져스',
      '캡틴 아메리카',
      ['leader'],
      ['리더'],
      2012
    ),
    new Character(
      'Avengers',
      'Iron Man',
      true,
      '어벤져스',
      '아이언맨',
      ['scientist'],
      ['과학자'],
      2012
    ),
    new Character(
      'Avengers',
      'Spider Man',
      true,
      '어벤져스',
      '스파이더맨',
      ['animal'],
      ['동물'],
      2012
    ),
    new Character('Avengers', 'Hulk', true, '어벤져스', '헐크', ['power'], ['힘'], 2012),
    new Character('Avengers', 'Thor', true, '어벤져스', '토르', ['lightening'], ['번개'], 2012),
    new Character('Gardians', 'Rocket', false, '가오갤', '로켓', ['animal'], ['동물'], 2014),
    new Character('Gardians', 'Groot', false, '가오갤', '그루트', ['plant'], ['식물'], 2014),
    new Character(
      'Gardians',
      'Star Lord',
      false,
      '가오갤',
      '스타 로드',
      ['leader'],
      ['리더'],
      2014
    ),
    new Character('Gardians', 'Gamora', false, '가오갤', '가모라', [], [], 2014),
    new Character('Gardians', 'Drax', false, '가오갤', '드랙스', [], [], 2014),
    new Character(
      'Dr.strange',
      'Dr.strange',
      false,
      '닥터스트레인지',
      '닥터스트레인지',
      ['magic'],
      ['마법'],
      2016
    ),
    new Character(
      'Wakanda',
      'Black Panther',
      false,
      '와칸다',
      '블랙 펜서',
      ['leader'],
      ['리더'],
      2018
    ),
    new Character('Wakanda', 'Shuri', false, '와칸다', '슈리', [], [], 2018),
    new Character('Wakanda', 'Killmonger', false, '와칸다', '킬몽거', [], [], 2018),
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      }
    }
  }
}
