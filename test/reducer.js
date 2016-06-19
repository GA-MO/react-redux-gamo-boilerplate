import expect from 'expect'
import todo from '../app/reducers/todo'

describe('Todo reducer', () => {
  it('Add todo', () => {
    let stateAfter = [
      {
        id: 0,
        todo: 'Hello',
      }
    ]

    let action = {
      type: 'ADD_TODO',
      data: 'Hello'
    }

    expect(todo([], action)).toEqual(stateAfter)
  })

  it('Delete todo', () => {
    let stateBefore = [
      {
        id: 0,
        todo: 'Hello 1',
      },
      {
        id: 1,
        todo: 'Hello 2',
      }
    ]

    let stateAfter = [
      {
        id: 0,
        todo: 'Hello 1',
      }
    ]

    let action = {
      type: 'DELETE_TODO',
      id: 1
    } 

    expect(todo(stateBefore, action)).toEqual(stateAfter)
  })
})