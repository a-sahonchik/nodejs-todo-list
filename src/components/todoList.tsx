import React from 'react'
import { ListItem } from './listItem'

interface Props {
  todos: TodoListItem[]
  toggleTodo: ToggleTodo
  deleteTodoItem: DeleteTodoItem
}

export const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodoItem,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          item={todo}
          toggleTodo={toggleTodo}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </ul>
  )
}
