import React, { useEffect, useState } from 'react'
import '../styles.css'
import LOGO from '../logo.png'
import { TodoList } from './todoList'
import { AddItem } from './addItem'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoListItem[]>([])

  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  useEffect(() => {
    const storageItem = localStorage.getItem(LOCAL_STORAGE_KEY)
    const storedTodos = storageItem != null ? JSON.parse(storageItem) : []
    if (storedTodos?.length > 0) setTodos(storedTodos)
  }, [])

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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  }

  const addTodoItem: AddTodoItem = (text: string) => {
    const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
    const newTodoItem = { id, text, isCompleted: false }
    const newTodos = [...todos, newTodoItem]
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  }

  const deleteTodoItem = (id: number): void => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
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
