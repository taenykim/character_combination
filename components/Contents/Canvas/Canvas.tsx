import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducers'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  height: 500px;
  background: white;
  margin: 0 0 20px 0;
`

const CanvasContainer = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Canvas = () => {
  const characters = useSelector((state: RootState) => state.dndcharactersReducer.characters)

  useEffect(() => {
    var canvas: any = document.getElementById('imageCanvas')
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
    const CANVAS_WIDTH = canvas.width
    const CANVAS_HEIGHT = canvas.height
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    const offset = CANVAS_WIDTH / characters.length

    for (let i = 0; i < characters.length; i++) {
      ctx.fillStyle = i % 2 === 0 ? 'dodgerblue' : 'red'
      ctx.fillRect(i * offset, 0, offset, CANVAS_HEIGHT)
    }
    console.log(characters)
  })
  return (
    <Container>
      <CanvasContainer id="imageCanvas"></CanvasContainer>
    </Container>
  )
}

export default Canvas
