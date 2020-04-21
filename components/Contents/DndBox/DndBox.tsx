import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CHARACTERS, ADD_CHARACTER } from '../../../reducers/charactersReducer'
import CharacterItem from './CharacterItem'
import Character from '../Character'
import { RootState } from '../../../reducers'

const languages = {
  KOR: { leader: '리더' },
  ENG: { leader: 'leader' },
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 0 20px 0;
`

const LeaderText = styled.div`
  position: absolute;
  width: 40px;
  text-align: center;
  padding: 2px 0px 2px 0px;
  left: 20px;
  top: -20px;
  color: black;
  background: yellow;
  font-family: escore6;
  font-size: 8px;
  border: 1px solid red;
  border-radius: 2px;
`

const DndBox = () => {
  const language: string = useSelector((state: RootState) => state.languageReducer.language)

  useEffect(() => {
    dispatch({
      type: ADD_CHARACTER,
      character: new Character(
        'Avengers',
        'Captain',
        true,
        '어벤져스',
        '캡틴 아메리카',
        ['leader'],
        ['리더']
      ),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character(
        'Avengers',
        'Iron Man',
        true,
        '어벤져스',
        '아이언맨',
        ['scientist'],
        ['과학자']
      ),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character(
        'Avengers',
        'Spider Man',
        true,
        '어벤져스',
        '스파이더맨',
        ['animal'],
        ['동물']
      ),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character('Avengers', 'Hulk', true, '어벤져스', '헐크', ['power'], ['힘']),
    })
    dispatch({
      type: ADD_CHARACTER,
      character: new Character(
        'Avengers',
        'Thor',
        true,
        '어벤져스',
        '토르',
        ['lightening'],
        ['번개']
      ),
    })
  }, [])
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.charactersReducer.characters)
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
      {items && items.length ? <LeaderText>{languages[language].leader}</LeaderText> : <div></div>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {(items as Array<any[]>).map((item: any, index) => (
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
    </Container>
  )
}

export default DndBox
