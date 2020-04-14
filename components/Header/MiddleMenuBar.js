import React from 'react'
import styled from 'styled-components'

const contents = ['combination']

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
  return (
    <Container>
      <Contents>
        <div>
          {contents.map((item, i) => {
            return <span key={i}>{item}</span>
          })}
        </div>
        <div>
          <span>
            <input style={{ marginRight: '4px' }} placeholder="검색하기"></input>
            <button>🔍</button>
          </span>
        </div>
      </Contents>
    </Container>
  )
}

export default MiddleMenuBar
