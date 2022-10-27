import React from 'react'
import { ListItem } from './listItem'

import List from '@mui/material/List'

interface Props {
  todos: TodoListItem[]
  toggleTodo: ToggleTodo
  deleteTodoItem: DeleteTodoItem
  editTodoItem: EditTodoItem
}

export const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodoItem,
  editTodoItem,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.uuid}
          item={todo}
          toggleTodo={toggleTodo}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      ))}
    </List>
  )
}
