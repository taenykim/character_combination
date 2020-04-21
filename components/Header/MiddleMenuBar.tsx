import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers'

const languages = {
  KOR: { contents: ['캐릭터조합', '캐릭터사전'], search: '검색하기' },
  ENG: { contents: ['Combination', 'Docs'], search: 'search' },
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  background: #333;
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
`

const MiddleMenuBar = () => {
  const language: string = useSelector((state: RootState) => state.wrapper.language)
  return (
    <Container>
      <Contents>
        <div>
          {languages[language].contents.map((item, i) => {
            return <span key={i}>{item}</span>
          })}
        </div>
        <div>
          <span>
            <input style={{ marginRight: '4px' }} placeholder={languages[language].search}></input>
            <button>🔍</button>
          </span>
        </div>
      </Contents>
    </Container>
  )
}

export default MiddleMenuBar
