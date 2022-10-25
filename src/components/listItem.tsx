import React from 'react'

interface Props {
  item: TodoListItem
  toggleTodo: ToggleTodo
}

export const ListItem: React.FC<Props> = ({ item, toggleTodo }) => {
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
      </label>
    </li>
  )
}
