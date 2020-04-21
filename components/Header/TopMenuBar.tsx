import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_LANGUAGE } from '../../reducers/languageReducer'
import { RootState } from '../../reducers'

const languages = {
  KOR: { contents: ['캐릭터'] },
  ENG: { contents: ['characters'] },
}
const languageList = ['KOR', 'ENG']

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  background: #111;
`

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 360px);
  & > div > span {
    color: white;
    font-size: 12px;
    font-family: escore5;
    padding: 0 40px 0 0;
  }
`

const LanguageElement = styled.span`
  border: 1px solid white;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  margin-right: 10px;
`

const TopMenuBar = () => {
  const language: string = useSelector((state: RootState) => state.languageReducer.language)
  const dispatch = useDispatch()

  const onClickLanguageButton = (language) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      language: language,
    })
  }
  return (
    <Container>
      <Contents>
        <div>
          {languages[language].contents.map((item: string, i: number) => {
            return <span key={i}>{item}</span>
          })}
        </div>
        <div>
          {languageList.map((item) => {
            return (
              <LanguageElement onClick={() => onClickLanguageButton(item)}>{item}</LanguageElement>
            )
          })}
        </div>
      </Contents>
    </Container>
  )
}

export default TopMenuBar
