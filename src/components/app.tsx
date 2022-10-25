import React, { useState } from 'react'
import '../styles.css'
import LOGO from '../logo.png'
import { TodoList } from './todoList'
import { AddItem } from './addItem'

const initialTodos: TodoListItem[] = [
  {
    id: 1,
    text: 'Task 1',
    isCompleted: false,
  },
  {
    id: 2,
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

  const addTodoItem: AddTodoItem = (text: string) => {
    const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
    const newTodoItem = { id, text, isCompleted: false }
    setTodos([...todos, newTodoItem])
  }

  const deleteTodoItem = (id: number): void => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <>
      <div id="header">
        <img src={LOGO} alt="Todo application logo" width="135" height="110" />
        <h1>React TypeScript Webpack Template</h1>
      </div>

      <AddItem addTodoItem={addTodoItem} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodoItem={deleteTodoItem}
      />
    </>
  )
}
