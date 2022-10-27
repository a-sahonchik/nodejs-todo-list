import React, { useEffect, useState } from 'react'
import '../styles.css'
import LOGO from '../logo.png'
import { TodoList } from './todoList'
import { AddItem } from './addItem'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

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
    const uuid = uuidv4()
    const newTodoItem = {
      uuid,
      text,
      isCompleted: false,
      editedAt: new Date().toLocaleString(),
    }
    const newTodos = [...todos, newTodoItem]
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  }

  const deleteTodoItem = (uuid: string): void => {
    const newTodos = todos.filter((item) => item.uuid !== uuid)
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  }

  const editTodoItem = (selectedTodo: TodoListItem, newText: string): void => {
    const newTodos = todos.map((item) => {
      if (item === selectedTodo && newText !== item.text) {
        return {
          ...item,
          text: newText,
          editedAt: new Date().toLocaleString(),
        }
      }
      return item
    })
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  }

  const sortedTodos = todos
    .sort((a, b) => {
      return a.editedAt.localeCompare(b.editedAt)
    })
    .reverse()

  const { i18n } = useTranslation()

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng)
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
            <div className="justify-content-end">
              <Button
                variant={i18n.language === 'en' ? 'primary' : 'outline-primary'}
                type="button"
                onClick={() => changeLanguage('en')}
              >
                en
              </Button>
              <Button
                variant={i18n.language === 'ru' ? 'success' : 'outline-success'}
                type="button"
                onClick={() => changeLanguage('ru')}
              >
                ru
              </Button>
            </div>
          </Container>
        </Navbar>
      </div>

      <Container>
        <AddItem addTodoItem={addTodoItem} />
      </Container>

      <Container className="mb-5">
        <TodoList
          todos={sortedTodos}
          toggleTodo={toggleTodo}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
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
