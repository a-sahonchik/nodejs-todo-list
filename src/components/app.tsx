import React, { useState } from 'react'
import '../styles.css'
import LOGO from '../logo.png'
import { ListItem } from './listItem'

const initialTodos: TodoListItem[] = [
  {
    text: 'Task 1',
    isCompleted: false,
  },
  {
    text: 'Task 2',
    isCompleted: true,
  },
]

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: TodoListItem): void => {
    const newTodos = todos.map((item) => {
      if (item === selectedTodo) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        }
      }
      return item
    })
    setTodos(newTodos)
  }

  return (
    <>
      <div id="header">
        <img src={LOGO} alt="Todo application logo" width="135" height="110" />
        <h1>React TypeScript Webpack Template</h1>
      </div>

      <ListItem item={todos[0]} toggleTodo={toggleTodo} />
      <ListItem item={todos[1]} toggleTodo={toggleTodo} />
    </>
  )
}
