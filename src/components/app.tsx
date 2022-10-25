import React, { useState } from 'react'
import '../styles.css'
import LOGO from '../logo.png'
import { TodoList } from './todoList'
import { AddItem } from './addItem'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

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
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img
                alt="Todo application logo"
                src={LOGO}
                width="27"
                height="22"
                className="d-inline-block align-middle m-3"
              />{' '}
              React TypeScript Todo App
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <Container>
        <AddItem addTodoItem={addTodoItem} />
      </Container>

      <Container className="mb-5">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodoItem={deleteTodoItem}
        />
      </Container>

      <footer className="bg-dark text-white text-center text-lg-start mt-auto">
        <div className="text-center p-3">
          <span>React TypeScript Todo App</span>
        </div>
      </footer>
    </>
  )
}
