import React from 'react'

interface Props {
  item: TodoListItem
  toggleTodo: ToggleTodo
  deleteTodoItem: DeleteTodoItem
}

export const ListItem: React.FC<Props> = ({
  item,
  toggleTodo,
  deleteTodoItem,
}) => {
  return (
    <li>
      <label
        style={{
          textDecoration: item.isCompleted ? 'line-through' : undefined,
        }}
      >
        <input
          type="checkbox"
          defaultChecked={item.isCompleted}
          onClick={() => {
            toggleTodo(item)
          }}
        />{' '}
        {item.text}
        <button
          type="submit"
          onClick={() => {
            deleteTodoItem(item.id)
          }}
        >
          X
        </button>
      </label>
    </li>
  )
}
