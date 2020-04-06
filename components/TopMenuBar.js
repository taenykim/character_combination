import React from 'react'
import styled from 'styled-components'

const contents = ['Character', 'Kpop Artist']

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 40px;
  background: purple;
`

const Contents = styled.div`
  display: flex;
  padding: 0 180px 0 180px;

  & > span {
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
        {contents.map((item) => {
          return <span>{item}</span>
        })}
      </Contents>
    </Container>
  )
}

export default TopMenuBar
