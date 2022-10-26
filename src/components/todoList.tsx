import React from 'react'
import { ListItem } from './listItem'

import ListGroup from 'react-bootstrap/ListGroup'

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
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.uuid}
          item={todo}
          toggleTodo={toggleTodo}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      ))}
    </ListGroup>
  )
}
