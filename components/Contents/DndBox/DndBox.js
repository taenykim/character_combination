import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CHARACTERS, ADD_CHARACTER } from '../../../reducers/wrapper'
import CharacterItem from './CharacterItem'

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
  useEffect(() => {
    dispatch({
      type: ADD_CHARACTER,
      name: 'Captain',
      group: 'Avengers',
    })
    dispatch({
      type: ADD_CHARACTER,
      name: 'Iron Man',
      group: 'Avengers',
    })
    dispatch({
      type: ADD_CHARACTER,
      name: 'Spider Man',
      group: 'Avengers',
    })
    dispatch({
      type: ADD_CHARACTER,
      name: 'Hulk',
      group: 'Avengers',
    })
    dispatch({
      type: ADD_CHARACTER,
      name: 'Thor',
      group: 'Avengers',
    })
  }, [])
  const dispatch = useDispatch()
  const items = useSelector((state) => state.wrapper.characters)
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
      <SynergyBox>시너지박스</SynergyBox>
    </Container>
  )
}

export default DndBox
