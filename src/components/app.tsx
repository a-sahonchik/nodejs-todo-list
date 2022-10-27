import React, { useEffect, useState } from 'react'
import '../styles.css'
import LOGO from '../logo.png'
import { TodoList } from './todoList'
import { AddItem } from './addItem'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

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
        <AppBar position="static" style={{ background: '#404040' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  mr: 2,
                }}
              >
                <img
                  alt="Todo application logo"
                  src={LOGO}
                  width="27"
                  height="22"
                  className="d-inline-block align-middle m-3"
                />{' '}
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 1,
                    fontFamily: 'monospace',
                    fontWeight: { xs: 400, md: 700 },
                    fontSize: { xs: '1em', md: '2em' },
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  React TypeScript Todo App
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  variant={i18n.language === 'en' ? 'contained' : 'outlined'}
                  onClick={() => changeLanguage('en')}
                >
                  en
                </Button>
                <Button
                  variant={i18n.language === 'ru' ? 'contained' : 'outlined'}
                  color="success"
                  onClick={() => changeLanguage('ru')}
                >
                  ru
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <Container maxWidth="xl">
        <AddItem addTodoItem={addTodoItem} />
      </Container>

      <Container className="mb-5" maxWidth="xl">
        <TodoList
          todos={sortedTodos}
          toggleTodo={toggleTodo}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      </Container>
    </>
  )
}
