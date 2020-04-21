import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CHARACTERS, ADD_CHARACTER } from '../../../reducers/wrapper'
import CharacterItem from './CharacterItem'
import Character from '../Character'
import { RootState } from '../../../reducers'

const languages = { KOR: { synergyBox: '시너지 박스' }, ENG: { synergyBox: 'Synergy Box' } }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
`

const SynergyBox = styled.div`
  color: white;
  width: 800px;
  margin: 20px 0px 20px 0px;
`

const DndBox = () => {
  const language = useSelector((state: RootState) => state.wrapper.language)
  useEffect(() => {
    dispatch({
      type: ADD_CHARACTER,
      character: new Character('Avengers', 'Captain', true, '어벤져스', '캡틴 아메리카'),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character('Avengers', 'Iron Man', true, '어벤져스', '아이언맨'),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character('Avengers', 'Spider Man', true, '어벤져스', '스파이더맨'),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character('Avengers', 'Hulk', true, '어벤져스', '헐크'),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character('Avengers', 'Thor', true, '어벤져스', '토르'),
    })
  }, [])
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.wrapper.characters)
  const onDragEnd = (result) => {
    console.log(result)
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const reorderItems = reorder(items, result.source.index, result.destination.index)
    dispatch({ type: UPDATE_CHARACTERS, characters: reorderItems })
    console.log(items)
  }

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  // const getItemStyle = (isDragging, draggableStyle) => ({
  //   // some basic styles to make the items look a bit nicer
  //   userSelect: 'none',
  //   padding: grid * 2,
  //   margin: `0 ${grid}px 0 0`,

  //   // change background colour if dragging
  //   background: isDragging ? 'lightgreen' : 'grey',

  //   // styles we need to apply on draggables
  //   ...draggableStyle,
  // })

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    height: '80px',
    width: 'fit-content',
    alignSelf: 'center',
    // padding: grid,
    // overflow: 'auto',
  })

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      <CharacterItem key={index} character={item}></CharacterItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <SynergyBox>{languages[language].synergyBox}</SynergyBox>
    </Container>
  )
}

export default DndBox
