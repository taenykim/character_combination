import React from 'react'
import styled from 'styled-components'

const contents = ['Character']

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

const TopMenuBar = () => {
  return (
    <Container>
      <Contents>
        <div>
          {contents.map((item, i) => {
            return <span key={i}>{item}</span>
          })}
        </div>
        <div>
          <span>번역</span>
        </div>
      </Contents>
    </Container>
  )
}

export default TopMenuBar
