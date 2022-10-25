import React from 'react'
import { ListItem } from './listItem'

interface Props {
  todos: TodoListItem[]
  toggleTodo: ToggleTodo
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem key={todo.text} item={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}
